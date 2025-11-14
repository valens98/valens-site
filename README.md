# Portfolio Professionale - Daniele Valenti

## Descrizione
Portfolio web professionale sviluppato con HTML5, CSS3, JavaScript e Bootstrap 5. Il sito presenta competenze, progetti, esperienze e formazione in modo elegante e responsivo.

## Struttura del Progetto

```
portfolio/
│
├── index.html       # Pagina principale HTML
├── styles.css       # Fogli di stile CSS personalizzati
├── script.js        # JavaScript per interattività e contenuti dinamici
└── README.md        # Questo file
```

## Caratteristiche

### Design
- ✅ Design moderno e professionale
- ✅ Completamente responsive (mobile, tablet, desktop)
- ✅ Animazioni fluide e transizioni
- ✅ Nessuna emoticon (design pulito e corporate)

### Tecnologie Utilizzate
- **HTML5**: Struttura semantica
- **CSS3**: Styling avanzato con variabili CSS e animazioni
- **JavaScript (ES6+)**: Contenuti dinamici e interattività
- **Bootstrap 5**: Grid system e componenti responsive
- **Font Awesome 6**: Icone professionali

### Sezioni
1. **Hero Section**: Introduzione con call-to-action
2. **Chi Sono**: Presentazione professionale
3. **Competenze**: 6 aree di competenza con icone
4. **Progetti**: 8 progetti principali con filtri interattivi
5. **Esperienza**: Timeline delle esperienze lavorative
6. **Formazione**: Timeline del percorso accademico
7. **Contatti**: Informazioni di contatto e social links

### Funzionalità JavaScript
- Caricamento dinamico di tutti i contenuti
- Filtri interattivi per i progetti (Tutti, Cybersecurity, ML, Software)
- Scroll animations con Intersection Observer
- Smooth scrolling per la navigazione
- Navbar che si evidenzia in base alla sezione attiva
- Effetti hover e transizioni fluide

## Come Utilizzare

### Apertura Locale
1. Scarica tutti e tre i file (`index.html`, `styles.css`, `script.js`)
2. Mantienili nella stessa cartella
3. Apri `index.html` con un browser web

### Hosting Online
Per pubblicare il portfolio online:

**GitHub Pages** (Gratuito):
1. Crea un repository su GitHub
2. Carica i tre file
3. Vai su Settings → Pages
4. Seleziona la branch main come source
5. Il sito sarà disponibile su `username.github.io/repository-name`

**Netlify** (Gratuito):
1. Crea un account su Netlify.com
2. Trascina la cartella con i file sul sito
3. Il sito sarà online in pochi secondi

**Vercel** (Gratuito):
1. Crea un account su Vercel.com
2. Importa il progetto o carica i file
3. Deploy automatico

## Personalizzazione

### Modifica Colori
Nel file `styles.css`, modifica le variabili CSS all'inizio:
```css
:root {
    --primary-color: #2c3e50;      /* Colore principale */
    --secondary-color: #3498db;    /* Colore secondario */
    --accent-color: #e74c3c;       /* Colore accento */
}
```

### Modifica Contenuti
Nel file `script.js`, modifica gli array di dati:
- `skills`: Competenze tecniche
- `projects`: Progetti principali
- `experiences`: Esperienze lavorative
- `education`: Formazione accademica

Esempio per aggiungere un nuovo progetto:
```javascript
{
    title: 'Nome Progetto',
    description: 'Descrizione dettagliata del progetto',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    category: 'cybersecurity' // o 'ml' o 'software'
}
```

### Modifica Informazioni Contatto
Nel file `index.html`, sezione Contact:
```html
<p><i class="fas fa-envelope me-2"></i> Email: tua.email@example.com</p>
<p><i class="fas fa-map-marker-alt me-2"></i> Tua Città, Italia</p>
```

### Aggiungi Social Links
Nel file `index.html`, modifica gli href dei link social:
```html
<a href="https://linkedin.com/in/tuo-profilo" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```

## Dipendenze Esterne

Il portfolio utilizza CDN per le librerie esterne:
- Bootstrap 5.3.0
- Font Awesome 6.4.0

Nessuna installazione richiesta - tutto funziona direttamente nel browser!

## Browser Supportati
- Chrome (consigliato)
- Firefox
- Safari
- Edge
- Opera

## Performance
- Tempo di caricamento: < 2 secondi
- Ottimizzato per SEO
- Accessibile (ARIA labels)
- Validato HTML5 e CSS3

## License
MIT License - Libero di usare e modificare per i tuoi progetti personali

## Supporto
Per domande o problemi, apri una issue o contattami direttamente.

---

**Sviluppato con** ❤️ **per Daniele Valenti**
