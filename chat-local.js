/**
 * chat-local.js — Opzione A: AI simulata, zero API, zero costi.
 *
 * Come funziona:
 *   1. Il testo dell'utente viene confrontato con keyword predefinite
 *   2. Viene selezionata la risposta più pertinente
 *   3. Il testo viene "dattilografato" lettera per lettera per sembrare AI
 *
 * Per attivare: in index.html sostituisci
 *   <script src="js/chat.js"></script>
 * con
 *   <script src="js/chat-local.js"></script>
 */

(function () {
  const messagesEl  = document.getElementById('chat-messages');
  const inputEl     = document.getElementById('chat-input');
  const sendBtn     = document.getElementById('chat-send');
  const suggestions = document.querySelectorAll('.suggestion-chip');
  if (!messagesEl || !inputEl || !sendBtn) return;

  /* ── KNOWLEDGE BASE ──────────────────────────────────────────────────────
     Ogni entry ha:
       keys   → parole chiave che attivano questa risposta (lowercase)
       answer → risposta in Markdown-lite (backtick per <code>)
  ──────────────────────────────────────────────────────────────────────── */
  const KB = [
    {
      keys: ['aphrodite', 'iss', 'spaziale', 'stazione', 'tesi', 'triennale'],
      answer:
        `APHRODITE è il progetto su cui ho scritto la mia tesi triennale in Ingegneria Informatica alla Sapienza. Si tratta di un sistema software safety-critical sviluppato per la Stazione Spaziale Internazionale (ISS).\n\nLavorare su software per l'ISS significa che un bug non è un'opzione: ho applicato metodologie di testing rigorose e standard di qualità tipici del settore aerospace. È stata l'esperienza che mi ha fatto capire quanto il software possa avere impatto nel mondo reale.`,
    },
    {
      keys: ['zkp', 'zero knowledge', 'proof', 'groth', 'schnorr', 'crittografia', 'crypto', 'cryptography'],
      answer:
        `La crittografia è una delle mie passioni principali. Mi sto specializzando in `Zero-Knowledge Proofs` (ZKP), in particolare con i protocolli `Groth16` e `Schnorr`.\n\nLe ZKP permettono di dimostrare di conoscere un segreto senza rivelarlo — una primitiva crittografica con applicazioni enormi: autenticazione decentralizzata, privacy nei sistemi blockchain, verifica di identità. Sto sviluppando implementazioni in `Python` e sto esplorando applicazioni in sistemi di autenticazione distribuita.`,
    },
    {
      keys: ['trading', 'lstm', 'reinforcement', 'rl', 'finanza', 'mercato', 'bot'],
      answer:
        `Ho sviluppato un sistema di AI trading algoritmico che combina reti neurali `LSTM` per l'analisi di serie temporali con `Reinforcement Learning` per le decisioni di trading.\n\nIl modello impara dall'ambiente di mercato tramite reward shaping, cercando di massimizzare il rendimento aggiustato per il rischio. È un progetto che unisce due cose che amo: il machine learning e i sistemi complessi. Stack principale: `PyTorch`, `Pandas`, `NumPy`.`,
    },
    {
      keys: ['anomaly', 'rete', 'network', 'anomalia', 'autoencoder', 'detection'],
      answer:
        `Ho costruito un sistema di anomaly detection per il traffico di rete usando `autoencoders` profondi con un approccio completamente unsupervised.\n\nL'idea: l'autoencoder impara a ricostruire il traffico "normale"; quando arriva traffico anomalo (attacchi, malware, ecc.) il reconstruction error sale sopra soglia e scatta l'alert. Ho usato `Keras`, `Wireshark` per la cattura dei pacchetti, e `Pandas` per il preprocessing. Funziona su dataset pubblici come CICIDS.`,
    },
    {
      keys: ['ctf', 'capture', 'flag', 'pwn', 'reverse', 'writeup', 'hacking'],
      answer:
        `Partecipo attivamente a CTF (Capture The Flag), competizioni di cybersecurity. Le categorie che preferisco sono `crypto`, `pwn` e `reverse engineering`.\n\nSto raccogliendo i miei writeup su GitHub: ogni soluzione è documentata con l'approccio usato, gli strumenti (`pwntools`, `Ghidra`, `GDB`, `z3`) e le lezioni imparate. I CTF sono il modo migliore per tenersi aggiornati sulle tecniche offensive e difensive.`,
    },
    {
      keys: ['ml', 'machine learning', 'deep learning', 'pytorch', 'tensorflow', 'sklearn', 'ai', 'intelligenza'],
      answer:
        `Il machine learning è al centro della mia ricerca magistrale. Lavoro principalmente con `PyTorch` per il deep learning e `Scikit-learn` per approcci classici.\n\nMi interessano soprattutto: modelli per serie temporali (LSTM, Transformer), anomaly detection unsupervised, e l'intersezione tra ML e sicurezza informatica (adversarial examples, model security). Attualmente sto anche esplorando LLM e AI generativa.`,
    },
    {
      keys: ['cisco', 'eni', 'collaborazione', 'lavoro', 'esperienza', 'internship', 'stage'],
      answer:
        `Ho avuto la fortuna di collaborare con realtà importanti:\n\n`Cisco` — Ho lavorato su analisi di sistemi distribuiti e sicurezza di rete a livello enterprise. `Eni` — Progetto su infrastrutture IT e sicurezza. `Sapienza` — Collaborazione a ricerca accademica in crittografia e AI.\n\nSono esperienze che mi hanno dato una prospettiva pratica molto diversa dall'ambiente universitario.`,
    },
    {
      keys: ['sapienza', 'politecnico', 'università', 'studio', 'msc', 'bsc', 'laurea', 'formazione'],
      answer:
        `Il mio percorso accademico è iniziato al `Politecnico di Milano` (2018–2022) con il programma Digital Engineering all'ELIS College. Poi mi sono trasferito alla `Sapienza di Roma` dove ho completato il BSc in Ingegneria Informatica.\n\nOra sono alla magistrale in `Computer Science & Artificial Intelligence` sempre alla Sapienza, dove mi specializzo in cybersecurity, crittografia e ML avanzato.`,
    },
    {
      keys: ['python', 'c++', 'javascript', 'linguaggio', 'stack', 'tecnologia', 'tool', 'strumenti'],
      answer:
        `Il mio stack principale ruota attorno a `Python` per ML, data science e scripting di sicurezza. Uso `C/C++` per sistemi embedded e software safety-critical (come APHRODITE). Per il web uso `JavaScript` e occasionalmente `React`.\n\nNell'ambito security: `Wireshark`, `Metasploit`, `Ghidra`, `Pwntools`, `z3`. Per ML: `PyTorch`, `TensorFlow`, `Keras`, `Scikit-learn`. Tutto gira su `Linux` con `Docker` per la containerizzazione.`,
    },
    {
      keys: ['contatt', 'email', 'linkedin', 'github', 'reach', 'collabora', 'progetto insieme'],
      answer:
        `Sono sempre aperto a collaborazioni interessanti!\n\n📧 Email: `danielevalenti06081998 [at] gmail.com`\n🐙 GitHub: `github.com/valens98`\n📍 Roma, Italia\n\nSono particolarmente interessato a collaborazioni in ambito cybersecurity, ricerca in crittografia, o progetti AI applicata. Non esitare a scrivermi!`,
    },
    {
      keys: ['chi sei', 'chi è daniele', 'presentati', 'raccontati', 'about', 'chi'],
      answer:
        `Sono Daniele Valenti, un Cybersecurity Engineer e ricercatore in AI con base a Roma. Studio il MSc in Computer Science & AI alla Sapienza, dopo il BSc in Ingegneria Informatica con una tesi sul sistema APHRODITE per la ISS.\n\nLe mie passioni principali sono la crittografia avanzata (ZKP), il machine learning, la cybersecurity offensiva/difensiva, e l'intersezione tra AI e security. Fuori dall'università mi trovi sui CTF o a sperimentare con nuovi modelli. Benvenuto nel mio portfolio!`,
    },
  ];

  const DEFAULT_ANSWER =
    `Non ho una risposta precisa su questo argomento, ma posso dirti di più su: i miei progetti (`APHRODITE`, `ZKP`, `AI Trading`), le mie competenze (`Python`, `cybersecurity`, `ML`), il mio percorso accademico o come contattarmi.\n\nProva a chiedermi qualcosa di più specifico!`;

  /* ── MATCHING ENGINE ─────────────────────────────────────────────────── */
  function findAnswer(text) {
    const t = text.toLowerCase();
    let best = null, bestScore = 0;

    KB.forEach(entry => {
      const score = entry.keys.reduce((acc, k) => acc + (t.includes(k) ? k.length : 0), 0);
      if (score > bestScore) { bestScore = score; best = entry; }
    });

    return best ? best.answer : DEFAULT_ANSWER;
  }

  /* ── RENDER HELPERS ──────────────────────────────────────────────────── */
  function formatText(text) {
    return text
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

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

  /* Typewriter effect — scrive la risposta lettera per lettera */
  function typeMessage(text, onDone) {
    const div = document.createElement('div');
    div.className = 'msg ai';
    div.innerHTML = `
      <div class="msg-avatar" aria-hidden="true">AI</div>
      <div class="msg-bubble" id="__typewriter__"></div>`;
    messagesEl.appendChild(div);

    const bubble = div.querySelector('#__typewriter__');
    const formatted = formatText(text);

    // Scrivi l'HTML carattere per carattere (evita di spezzare i tag)
    // Usiamo un approccio a plaintext + formattazione finale progressiva
    const plain = text;
    let i = 0;
    const SPEED = 18; // ms per carattere

    function tick() {
      i++;
      // Mostra il testo parziale formattato (i backtick possono essere incompleti,
      // quindi mostriamo prima plain e poi formattiamo solo quando i backtick sono pari)
      const chunk = plain.slice(0, i);
      const backtickCount = (chunk.match(/`/g) || []).length;
      bubble.innerHTML = backtickCount % 2 === 0
        ? formatText(chunk)
        : chunk.replace(/\n/g, '<br>');
      scrollBottom();
      if (i < plain.length) setTimeout(tick, SPEED);
      else if (onDone) onDone();
    }
    tick();
  }

  function addTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'msg ai'; div.id = '__typing__';
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

  function setLoading(loading) {
    sendBtn.disabled = loading;
    inputEl.disabled = loading;
    sendBtn.textContent = loading ? '...' : '↵ invia';
  }

  /* ── MAIN SEND ───────────────────────────────────────────────────────── */
  function send(text) {
    text = text.trim();
    if (!text) return;

    inputEl.value = '';
    addMessage('user', text);
    setLoading(true);

    // Simula un piccolo delay "di pensiero"
    const delay = 600 + Math.random() * 600;
    const typing = addTypingIndicator();

    setTimeout(() => {
      typing.remove();
      const answer = findAnswer(text);
      typeMessage(answer, () => setLoading(false));
      inputEl.focus();
    }, delay);
  }

  /* ── EVENTS ──────────────────────────────────────────────────────────── */
  sendBtn.addEventListener('click', () => send(inputEl.value));
  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(inputEl.value); }
  });
  suggestions.forEach(chip => chip.addEventListener('click', () => send(chip.textContent)));
})();
