/**
 * data.js — Tutto il contenuto del sito in un unico posto.
 * Modifica qui per aggiornare progetti, skills e risorse
 * senza toccare HTML o JS.
 */

const DATA = {

  skills: {
    bars: [
      { name: 'Python / ML',    pct: 90 },
      { name: 'Cybersecurity',  pct: 88 },
      { name: 'Cryptography',   pct: 82 },
      { name: 'C / C++',        pct: 75 },
      { name: 'JavaScript',     pct: 70 },
      { name: 'Linux / Bash',   pct: 85 },
    ],
    tags: [
      'PyTorch','TensorFlow','Scikit-learn','OpenSSL','Wireshark',
      'Metasploit','Docker','Git','LaTeX','SQL','React','FastAPI',
      'Ghidra','Z3 Solver','Pwntools',
    ],
    radar: {
      labels: ['AI/ML','Crypto','Pentest','Dev','Research','Sec Arch'],
      data:   [90, 82, 70, 72, 85, 80],
    },
  },

  projects: [
    {
      icon: '🔐', cat: 'cybersec', catLabel: 'Cybersecurity',
      title: 'APHRODITE — ISS System',
      desc: 'Sistema software safety-critical per la Stazione Spaziale Internazionale. Tesi di laurea in Ingegneria Informatica.',
      tech: ['C++','Safety-Critical','Embedded','Testing'],
      links: [{ label: '→ GitHub', href: 'https://github.com/valens98' }],
    },
    {
      icon: '🤖', cat: 'ml', catLabel: 'Machine Learning',
      title: 'AI Trading System',
      desc: 'Sistema di trading algoritmico basato su LSTM e reinforcement learning per analisi predittiva di mercato.',
      tech: ['Python','LSTM','RL','PyTorch','Pandas'],
      links: [{ label: '→ GitHub', href: 'https://github.com/valens98' }],
    },
    {
      icon: '🔑', cat: 'cybersec', catLabel: 'Cybersecurity',
      title: 'ZKP Research — Crittografia',
      desc: 'Implementazione di Zero-Knowledge Proofs per autenticazione decentralizzata. Protocolli Schnorr e Groth16.',
      tech: ['Python','ZKP','Cryptography','Groth16'],
      links: [{ label: '→ Paper', href: '#' }],
    },
    {
      icon: '🧬', cat: 'ml', catLabel: 'Machine Learning',
      title: 'Anomaly Detection — Network',
      desc: 'Modello unsupervised con autoencoders profondi per il rilevamento di anomalie in traffico di rete.',
      tech: ['Python','Autoencoder','Keras','Wireshark'],
      links: [{ label: '→ GitHub', href: 'https://github.com/valens98' }],
    },
    {
      icon: '🛡️', cat: 'cybersec', catLabel: 'Cybersecurity',
      title: 'CTF Writeups Collection',
      desc: 'Raccolta di writeup per CTF in ambito crypto, web security, reverse engineering e pwn.',
      tech: ['Python','Pwntools','z3','Ghidra','GDB'],
      links: [{ label: '→ GitHub', href: 'https://github.com/valens98' }],
    },
    {
      icon: '🌐', cat: 'software', catLabel: 'Software',
      title: 'Portfolio Site v2',
      desc: 'Questo sito. Neural network canvas, AI playground integrato, cyberpunk theme. HTML/CSS/JS vanilla.',
      tech: ['HTML','CSS','JavaScript','Claude API'],
      links: [{ label: '→ Live', href: '#' }, { label: '→ GitHub', href: 'https://github.com/valens98/valens-site' }],
    },
  ],

  resources: [
    // Appunti
    { icon: '📝', type: 'notes', typelabel: 'Appunti', title: 'Crittografia Avanzata',           meta: 'MSc Sapienza • 2023', href: '#', tags: 'crittografia crypto zkp' },
    { icon: '📝', type: 'notes', typelabel: 'Appunti', title: 'Machine Learning — Appunti',      meta: 'MSc Sapienza • 2023', href: '#', tags: 'ml machine learning ai deep learning' },
    { icon: '📝', type: 'notes', typelabel: 'Appunti', title: 'Network Security',                meta: 'MSc Sapienza • 2024', href: '#', tags: 'sicurezza network security reti' },
    { icon: '📝', type: 'notes', typelabel: 'Appunti', title: 'Intelligenza Artificiale',        meta: 'MSc Sapienza • 2024', href: '#', tags: 'ai intelligenza artificiale' },
    // Codice
    { icon: '💻', type: 'code',  typelabel: 'Codice',  title: 'ZKP Python Implementation',      meta: 'Groth16 + Schnorr • 2024', href: 'https://github.com/valens98', tags: 'zkp crittografia python codice' },
    { icon: '💻', type: 'code',  typelabel: 'Codice',  title: 'ML Trading Bot',                 meta: 'LSTM + RL • 2024',         href: 'https://github.com/valens98', tags: 'trading ml python codice lstm' },
    { icon: '💻', type: 'code',  typelabel: 'Codice',  title: 'CTF Scripts Collection',         meta: 'Pwntools • vari anni',     href: 'https://github.com/valens98', tags: 'ctf python pwntools codice' },
    // Ricerca
    { icon: '🔬', type: 'research', typelabel: 'Ricerca', title: 'APHRODITE — Tesi ISS',        meta: 'Sapienza • 2022', href: '#', tags: 'iss aphrodite tesi ricerca space' },
    { icon: '🔬', type: 'research', typelabel: 'Ricerca', title: 'Anomaly Detection in Networks',meta: 'Paper • 2024',    href: '#', tags: 'anomaly detection network ricerca ml' },
  ],

  typingPhrases: [
    'Cybersecurity Engineer',
    'AI Researcher',
    'Cryptography Enthusiast',
    'Machine Learning Developer',
    'CTF Player',
    'Space Software Engineer',
  ],

};
