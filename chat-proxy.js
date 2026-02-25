/**
 * chat-proxy.js — Opzione B client: chiama il proxy Vercel invece di Claude direttamente.
 *
 * Per attivare: in index.html sostituisci
 *   <script src="js/chat.js"></script>
 * con
 *   <script src="js/chat-proxy.js"></script>
 *
 * Cambia API_URL con l'URL del tuo progetto Vercel dopo il deploy.
 */

(function () {
  // ⬇️ Cambia questo dopo il deploy su Vercel
  const API_URL = 'https://valens-site.vercel.app/api/chat';
  //              oppure usa il dominio personalizzato se lo hai configurato

  const messagesEl  = document.getElementById('chat-messages');
  const inputEl     = document.getElementById('chat-input');
  const sendBtn     = document.getElementById('chat-send');
  const suggestions = document.querySelectorAll('.suggestion-chip');
  if (!messagesEl || !inputEl || !sendBtn) return;

  let history = [];

  /* ── HELPERS ─────────────────────────────────────────────────────────── */
  function scrollBottom() { messagesEl.scrollTop = messagesEl.scrollHeight; }

  function formatText(text) {
    return text
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
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

  /* ── SEND ────────────────────────────────────────────────────────────── */
  async function sendMessage(text) {
    text = text.trim();
    if (!text) return;

    // Blocca messaggi troppo lunghi lato client (ridondante ma migliora UX)
    if (text.length > 500) {
      addMessage('ai', 'Messaggio troppo lungo! Massimo 500 caratteri.');
      return;
    }

    inputEl.value = '';
    addMessage('user', text);
    history.push({ role: 'user', content: text });

    const typing = addTyping();
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Mostra il messaggio di errore del server (es. rate limit)
        typing.remove();
        addMessage('ai', `⚠️ ${data.error || 'Errore sconosciuto. Riprova!'}`);
        // Non aggiungere alla storia se c'è stato un errore
        history.pop();
      } else {
        const reply = data.reply || 'Risposta vuota.';
        history.push({ role: 'assistant', content: reply });
        typing.remove();
        addMessage('ai', formatText(reply));
      }

    } catch (err) {
      console.error('[chat-proxy]', err);
      typing.remove();
      history.pop();
      addMessage('ai', 'Connessione non disponibile. Riprova tra poco o contattami via email!');
    } finally {
      setLoading(false);
      inputEl.focus();
    }
  }

  /* ── EVENTS ──────────────────────────────────────────────────────────── */
  sendBtn.addEventListener('click', () => sendMessage(inputEl.value));
  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputEl.value); }
  });
  suggestions.forEach(chip => chip.addEventListener('click', () => sendMessage(chip.textContent)));
})();
