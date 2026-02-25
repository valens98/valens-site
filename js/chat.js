/**
 * chat.js — AI Playground.
 * Chat con Claude che risponde a domande su Daniele.
 */

(function () {
  const messagesEl   = document.getElementById('chat-messages');
  const inputEl      = document.getElementById('chat-input');
  const sendBtn      = document.getElementById('chat-send');
  const suggestions  = document.querySelectorAll('.suggestion-chip');

  if (!messagesEl || !inputEl || !sendBtn) return;

  // ── SYSTEM PROMPT ─────────────────────────────────
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
- Usa backtick per termini tecnici (es: \`ZKP\`, \`Python\`)
- Se la domanda è completamente fuori tema, reindirizza gentilmente verso il profilo di Daniele`;

  let history = [];

  // ── HELPERS ───────────────────────────────────────
  function scrollBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addMessage(role, html) {
    const div = document.createElement('div');
    div.className = `msg ${role === 'user' ? 'user' : 'ai'}`;
    div.innerHTML = `
      <div class="msg-avatar" aria-hidden="true">${role === 'user' ? 'YOU' : 'AI'}</div>
      <div class="msg-bubble">${html}</div>`;
    messagesEl.appendChild(div);
    scrollBottom();
    return div;
  }

  function addTyping() {
    const div = document.createElement('div');
    div.className = 'msg ai';
    div.id = '__typing__';
    div.innerHTML = `
      <div class="msg-avatar" aria-hidden="true">AI</div>
      <div class="msg-bubble typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>`;
    messagesEl.appendChild(div);
    scrollBottom();
    return div;
  }

  // Convert backtick markdown to <code>
  function formatText(text) {
    return text
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  function setLoading(loading) {
    sendBtn.disabled  = loading;
    inputEl.disabled  = loading;
    sendBtn.textContent = loading ? '...' : '↵ invia';
  }

  // ── SEND ──────────────────────────────────────────
  async function sendMessage(text) {
    text = text.trim();
    if (!text) return;

    inputEl.value = '';
    addMessage('user', text);
    history.push({ role: 'user', content: text });

    const typing = addTyping();
    setLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM,
          messages: history,
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data  = await response.json();
      const reply = data.content?.[0]?.text || 'Non ho ricevuto una risposta valida.';

      history.push({ role: 'assistant', content: reply });
      typing.remove();
      addMessage('ai', formatText(reply));

    } catch (err) {
      console.error('[chat.js]', err);
      typing.remove();
      addMessage('ai', 'Connessione non disponibile al momento. Puoi contattare Daniele direttamente via email o GitHub!');
    } finally {
      setLoading(false);
      inputEl.focus();
    }
  }

  // ── EVENTS ────────────────────────────────────────
  sendBtn.addEventListener('click', () => sendMessage(inputEl.value));

  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputEl.value);
    }
  });

  suggestions.forEach(chip => {
    chip.addEventListener('click', () => sendMessage(chip.textContent));
  });
})();
