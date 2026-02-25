# Daniele Valenti — Portfolio Site

Sito portfolio personale con tema cyberpunk/AI dark.

## Struttura del progetto

```
valens-site/
├── index.html          ← HTML + SEO completo
├── css/
│   └── style.css       ← Tutti gli stili
├── js/
│   ├── data.js         ← Contenuti (progetti, skills, risorse) — MODIFICA QUI
│   ├── neural.js       ← Rete neurale animata (background)
│   ├── ui.js           ← Cursor, typing, radar, filtri, reveal
│   └── chat.js         ← AI Playground (Claude API)
└── assets/
    ├── favicon.svg
    └── og-image.png    ← Da creare (1200x630px) per i link preview
```

## Come aggiornare i contenuti

Tutto il contenuto (progetti, skills, risorse) è in **`js/data.js`**.
Non toccare HTML o CSS per aggiornare le informazioni.

### Aggiungere un progetto
```js
// In DATA.projects, aggiungi un oggetto:
{
  icon: '🔥',
  cat: 'ml',           // cybersec | ml | software
  catLabel: 'Machine Learning',
  title: 'Nuovo Progetto',
  desc: 'Descrizione del progetto.',
  tech: ['Python', 'TensorFlow'],
  links: [{ label: '→ GitHub', href: 'https://github.com/...' }],
}
```

### Aggiungere un appunto/risorsa
```js
// In DATA.resources:
{
  icon: '📝',
  type: 'notes',       // notes | code | research
  typelabel: 'Appunti',
  title: 'Titolo appunti',
  meta: 'Corso • Anno',
  href: 'https://link-al-pdf-su-drive.com',
  tags: 'parole chiave per la ricerca',
}
```

## Attivare il form di contatto

1. Vai su [formspree.io](https://formspree.io) e crea un account gratuito
2. Crea un nuovo form e copia il tuo ID
3. In `index.html`, sostituisci `YOUR_ID` in:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

## SEO

I meta tag sono già configurati in `index.html`:
- Open Graph per LinkedIn/Facebook
- Twitter Card
- JSON-LD structured data (Google)
- Canonical URL

**Ricorda di aggiornare:**
- L'URL canonico con il tuo dominio definitivo
- L'immagine `assets/og-image.png` (1200×630px, crea uno screenshot del sito)
- Il link LinkedIn nel JSON-LD e nei contatti

## Deploy su GitHub Pages

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Il sito sarà disponibile su `https://valens98.github.io/valens-site/`
