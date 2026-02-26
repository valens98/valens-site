/**
 * api/chat.js — Opzione B: Proxy serverless per Vercel.
 *
 * Posiziona questo file in:  api/chat.js  (nella root del progetto)
 *
 * Protezioni implementate:
 *   1. Rate limit per IP  → max MAX_REQ_PER_IP richieste per WINDOW_MS
 *   2. Rate limit globale → max MAX_REQ_GLOBAL richieste totali per WINDOW_MS
 *   3. Lunghezza messaggio → max MAX_MSG_LEN caratteri per messaggio
 *   4. La API key NON è mai esposta al client
 *
 * Setup:
 *   1. `npm install` nella root (crea package.json con `npm init -y`)
 *   2. Su vercel.com → Settings → Environment Variables → aggiungi ANTHROPIC_API_KEY
 *   3. `vercel deploy` oppure collega il repo GitHub a Vercel (auto-deploy)
 */

// ── CONFIGURAZIONE RATE LIMIT ─────────────────────────
const WINDOW_MS      = 60 * 1000;  // finestra temporale: 1 minuto
const MAX_REQ_PER_IP = 5;          // max 5 messaggi/minuto per IP
const MAX_REQ_GLOBAL = 50;         // max 50 messaggi/minuto in totale
const MAX_MSG_LEN    = 500;        // max 500 caratteri per messaggio
const MAX_HISTORY    = 10;         // max turni di storia conversazione

// ── IN-MEMORY STORE (resetta ad ogni cold start) ──────
// Per limiti più persistenti, usa Vercel KV (piano gratuito disponibile)
const ipStore     = new Map(); // ip → { count, resetAt }
let   globalCount = 0;
let   globalReset = Date.now() + WINDOW_MS;

function checkRateLimit(ip) {
  const now = Date.now();

  // Reset globale
  if (now > globalReset) { globalCount = 0; globalReset = now + WINDOW_MS; }
  if (globalCount >= MAX_REQ_GLOBAL) {
    return { ok: false, error: 'Troppe richieste globali. Riprova tra un minuto.', status: 429 };
  }

  // Reset per IP
  const rec = ipStore.get(ip) || { count: 0, resetAt: now + WINDOW_MS };
  if (now > rec.resetAt) { rec.count = 0; rec.resetAt = now + WINDOW_MS; }
  if (rec.count >= MAX_REQ_PER_IP) {
    return { ok: false, error: `Hai raggiunto il limite (${MAX_REQ_PER_IP} messaggi/minuto). Riprova tra un po'!`, status: 429 };
  }

  // Incrementa
  rec.count++;
  ipStore.set(ip, rec);
  globalCount++;

  return { ok: true };
}

// ── SYSTEM PROMPT (identico a chat.js) ───────────────
const SYSTEM = `Sei l'assistente AI personale di Daniele Valenti, un Cybersecurity Engineer e ricercatore in AI.

Profilo di Daniele:
- Studente magistrale MSc Computer Science & AI alla Sapienza di Roma
- BSc Ingegneria Informatica (Sapienza) con tesi su APHRODITE per la ISS
- Appassionato di crittografia avanzata (ZKP, Groth16, Schnorr)
- Interessi: machine learning, cybersecurity, CTF, AI generativa
- Ha collaborato con Cisco, Eni e Sapienza
- Progetti principali: AI Trading System (LSTM/RL), ZKP Research, Anomaly Detection su reti, CTF writeups
- Contatti: Roma, Italia. GitHub: github.com/valens98

Istruzioni:
- Rispondi in italiano, in modo tecnico ma accessibile
- Sii entusiasta su AI e cybersecurity
- Massimo 3-4 paragrafi per risposta
- Usa backtick per termini tecnici
- Se la domanda è completamente fuori tema, reindirizza gentilmente verso il profilo di Daniele`;

// ── HANDLER ──────────────────────────────────────────
export default async function handler(req, res) {
  // CORS — permetti solo il tuo dominio
  const allowedOrigins = [
    'https://valens98.github.io',
    'http://localhost:3000', // per sviluppo locale
  ];
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non permesso.' });
  }

  // IP del client (Vercel forwarda in x-forwarded-for)
  const ip = (req.headers['x-forwarded-for'] || '127.0.0.1').split(',')[0].trim();

  // Rate limit
  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return res.status(limit.status).json({ error: limit.error });
  }

  // Parsing body
  let body;
  try { body = req.body; }
  catch { return res.status(400).json({ error: 'Body non valido.' }); }

  const { messages } = body || {};

  // Validazione messaggi
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messaggi mancanti.' });
  }

  // Controlla lunghezza ultimo messaggio
  const lastMsg = messages[messages.length - 1];
  if (!lastMsg?.content || typeof lastMsg.content !== 'string') {
    return res.status(400).json({ error: 'Messaggio non valido.' });
  }
  if (lastMsg.content.length > MAX_MSG_LEN) {
    return res.status(400).json({ error: `Messaggio troppo lungo (max ${MAX_MSG_LEN} caratteri).` });
  }

  // Tronca la storia per non sprecare token
  const trimmedMessages = messages.slice(-MAX_HISTORY);

  // Chiave API (solo server-side)
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('[chat proxy] ANTHROPIC_API_KEY non configurata');
    return res.status(500).json({ error: 'Configurazione server mancante.' });
  }

  // Chiamata Claude
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':         'application/json',
        'x-api-key':            apiKey,
        'anthropic-version':    '2023-06-01',
      },
      body: JSON.stringify({
        model:      'claude-haiku-4-5-20251001', // Haiku: più economico, perfetto per chat portfolio
        max_tokens: 600,
        system:     SYSTEM,
        messages:   trimmedMessages,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('[chat proxy] Anthropic error:', err);
      return res.status(502).json({ error: 'Errore upstream.' });
    }

    const data  = await response.json();
    const reply = data.content?.[0]?.text || '';

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('[chat proxy] fetch error:', err);
    return res.status(500).json({ error: 'Errore interno del server.' });
  }
}
