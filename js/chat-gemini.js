/**
 * chat-gemini.js — Client per il proxy Cloudflare Worker → Gemini.
 *
 * Per attivare: in index.html sostituisci l'ultimo <script> con:
 *   <script src="js/chat-gemini.js"></script>
 *
 * Dopo il deploy del Worker, aggiorna WORKER_URL qui sotto.
 */

(function () {
  // ⬇️ Sostituisci con l'URL del tuo Cloudflare Worker dopo il deploy
  const WORKER_URL = 'https://daniele-ai.tuonome.workers.dev';

  const messagesEl  = document.getElementById('chat-messages');
  const inputEl     = document.getElementById('chat-input');
  const sendBtn     = document.getElementById('chat-send');
  const suggestions = document.querySelectorAll('.suggestion-chip');
  if (!messagesEl || !inputEl || !sendBtn) return;

  let history = [];

  /* ── HELPERS ─────────────────────────────────────── */
  function scrollBottom() { messagesEl.scrollTop = messagesEl.scrollHeight; }

  function formatText(text) {
    return text
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
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

  function setLoading(on) {
    sendBtn.disabled = on;
    inputEl.disabled = on;
    sendBtn.textContent = on ? '...' : '↵ invia';
  }

  /* ── SEND ────────────────────────────────────────── */
  async function sendMessage(text) {
    text = text.trim();
    if (!text) return;
    if (text.length > 400) {
      addMessage('ai', 'Messaggio troppo lungo! Massimo 400 caratteri.');
      return;
    }

    inputEl.value = '';
    addMessage('user', text);
    history.push({ role: 'user', content: text });

    const typing = addTyping();
    setLoading(true);

    try {
      const res  = await fetch(WORKER_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ messages: history }),
      });

      const data = await res.json();

      if (!res.ok) {
        typing.remove();
        addMessage('ai', `⚠️ ${data.error || 'Qualcosa è andato storto. Riprova!'}`);
        history.pop();
      } else {
        const reply = data.reply || '';
        history.push({ role: 'assistant', content: reply });
        typing.remove();
        addMessage('ai', formatText(reply));
      }

    } catch {
      typing.remove();
      history.pop();
      addMessage('ai', 'Connessione non disponibile. Puoi comunque contattarmi via email o GitHub!');
    } finally {
      setLoading(false);
      inputEl.focus();
    }
  }

  /* ── EVENTS ──────────────────────────────────────── */
  sendBtn.addEventListener('click', () => sendMessage(inputEl.value));
  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputEl.value); }
  });
  suggestions.forEach(c => c.addEventListener('click', () => sendMessage(c.textContent)));
})();
