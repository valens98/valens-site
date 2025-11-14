# Portfolio Professionale - Daniele Valenti

## Descrizione
Portfolio web professionale sviluppato con HTML5, CSS3, JavaScript e Bootstrap 5. Il sito presenta competenze, progetti con pagine dettagliate, esperienze e formazione in modo elegante e responsivo.

## 🆕 Nuove Funzionalità

### Pagine Dettaglio Progetti
Ogni progetto ora ha una pagina dedicata dove puoi aggiungere:
- **Descrizioni dettagliate** con formattazione HTML
- **Galleria immagini** con caption
- **Snippet di codice** con syntax highlighting
- **Risorse aggiuntive** (link, documentazione, demo)

## Struttura del Progetto

```
portfolio/
│
├── index.html              # Pagina principale
├── project-detail.html     # Template per dettagli progetto
├── styles.css              # Fogli di stile personalizzati
├── script.js               # JavaScript per contenuti dinamici
└── README.md               # Documentazione
```

## Caratteristiche

### Design
- ✅ Design moderno e professionale
- ✅ Completamente responsive (mobile, tablet, desktop)
- ✅ Animazioni fluide e transizioni
- ✅ Pagine dettaglio per ogni progetto
- ✅ Syntax highlighting per codice
- ✅ Nessuna emoticon (design pulito e corporate)

### Tecnologie Utilizzate
- **HTML5**: Struttura semantica
- **CSS3**: Styling avanzato con variabili CSS e animazioni
- **JavaScript (ES6+)**: Contenuti dinamici e interattività
- **Bootstrap 5**: Grid system e componenti responsive
- **Font Awesome 6**: Icone professionali
- **Prism.js**: Syntax highlighting per codice

### Sezioni
1. **Hero Section**: Introduzione con call-to-action
2. **Chi Sono**: Presentazione professionale
3. **Competenze**: 6 aree di competenza con icone
4. **Progetti**: 8 progetti con pagine dettagliate
5. **Esperienza**: Timeline delle esperienze lavorative
6. **Formazione**: Timeline del percorso accademico
7. **Contatti**: Informazioni di contatto e social links

## Come Utilizzare

### Apertura Locale
1. Scarica tutti i file nella stessa cartella
2. Apri `index.html` con un browser web moderno
3. Clicca su "Scopri di più" per vedere i dettagli di ogni progetto

### Hosting Online

**GitHub Pages** (Gratuito):
1. Crea un repository su GitHub
2. Carica tutti i file
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

## 📝 Come Aggiungere Contenuti ai Progetti

### 1. Aggiungere Immagini

Nel file `script.js`, trova il progetto desiderato e aggiungi immagini all'array `images`:

```javascript
{
    id: 'aphrodite',
    title: 'APHRODITE GUI System',
    // ... altri campi ...
    images: [
        {
            url: 'percorso/immagine1.jpg',
            caption: 'Interfaccia principale del sistema'
        },
        {
            url: 'percorso/immagine2.jpg',
            caption: 'Dashboard di monitoraggio'
        }
    ]
}
```

**Dove mettere le immagini:**
- Crea una cartella `images/` nella root del progetto
- Organizza le immagini per progetto: `images/aphrodite/screenshot1.jpg`
- Usa path relativi: `url: 'images/aphrodite/screenshot1.jpg'`

### 2. Aggiungere Snippet di Codice

Nel file `script.js`, aggiungi codice all'array `codeSnippets`:

```javascript
{
    id: 'crypto-performance',
    title: 'Cryptographic Performance Analysis',
    // ... altri campi ...
    codeSnippets: [
        {
            language: 'python',  // Può essere: python, java, javascript, html, css
            title: 'Esempio di benchmarking',
            description: 'Codice per misurare le performance di AES-128',
            code: `
import time
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

def benchmark_aes():
    key = os.urandom(16)
    iv = os.urandom(16)
    cipher = Cipher(algorithms.AES(key), modes.CTR(iv))
    
    start = time.time()
    # ... codice di benchmarking
    end = time.time()
    
    return end - start
            `
        }
    ]
}
```

**Linguaggi supportati:**
- `python`
- `java`
- `javascript`
- `html`
- `css`
- Aggiungibili altri tramite Prism.js

### 3. Modificare la Descrizione Dettagliata

Nel campo `detailedDescription` puoi usare HTML completo:

```javascript
{
    id: 'aphrodite',
    detailedDescription: `
        <h4>Descrizione Dettagliata</h4>
        <p>Introduzione al progetto...</p>
        
        <h5>Caratteristiche Principali:</h5>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
        </ul>
        
        <h5>Tecnologie:</h5>
        <ul>
            <li>Java 11+</li>
            <li>Swing GUI</li>
        </ul>
        
        <div class="alert alert-info">
            <strong>Nota:</strong> Informazioni importanti
        </div>
    `
}
```

### 4. Aggiungere un Nuovo Progetto

Nel file `script.js`, aggiungi un nuovo oggetto all'array `projects`:

```javascript
{
    id: 'nuovo-progetto',  // ID univoco, lowercase con trattini
    title: 'Titolo del Nuovo Progetto',
    description: 'Breve descrizione per la card (1-2 frasi)',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    category: 'cybersecurity',  // cybersecurity, ml, o software
    detailedDescription: `
        <h4>Descrizione Completa</h4>
        <p>Testo dettagliato...</p>
    `,
    images: [],
    codeSnippets: []
}
```

## Personalizzazione

### Modifica Colori
Nel file `styles.css`, modifica le variabili CSS:
```css
:root {
    --primary-color: #2c3e50;      /* Colore principale */
    --secondary-color: #3498db;    /* Colore secondario */
    --accent-color: #e74c3c;       /* Colore accento */
}
```

### Modifica Informazioni Contatto
Nel file `index.html`, sezione Contact:
```html
<p><i class="fas fa-envelope me-2"></i>tua.email@example.com</p>
<p><i class="fas fa-phone me-2"></i>+39 XXX XXX XXXX</p>
```

### Aggiungi Social Links
Nel file `index.html`, modifica gli href:
```html
<a href="https://linkedin.com/in/tuo-profilo" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```

## 🎯 Esempi Pratici

### Esempio 1: Aggiungere Screenshot al Progetto APHRODITE

1. Salva le tue immagini in `images/aphrodite/`
2. Modifica `script.js`:

```javascript
{
    id: 'aphrodite',
    // ... altri campi ...
    images: [
        {
            url: 'images/aphrodite/gui-main.png',
            caption: 'Interfaccia principale del sistema APHRODITE'
        },
        {
            url: 'images/aphrodite/protocol-view.png',
            caption: 'Vista gestione protocolli analitici'
        },
        {
            url: 'images/aphrodite/realtime-data.png',
            caption: 'Visualizzazione dati in tempo reale'
        }
    ]
}
```

### Esempio 2: Aggiungere Codice Java al Progetto APHRODITE

```javascript
{
    id: 'aphrodite',
    // ... altri campi ...
    codeSnippets: [
        {
            language: 'java',
            title: 'Inizializzazione GUI',
            description: 'Codice per creare e configurare la finestra principale',
            code: `
public class APHRODITEMainWindow extends JFrame {
    private JPanel mainPanel;
    private ProtocolManager protocolManager;
    
    public APHRODITEMainWindow() {
        setTitle("APHRODITE Control System");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1200, 800);
        
        initComponents();
        setupUSBConnection();
    }
    
    private void initComponents() {
        mainPanel = new JPanel(new BorderLayout());
        protocolManager = new ProtocolManager();
        // ... resto del codice
    }
}
            `
        }
    ]
}
```

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

## Struttura Dati Progetti

Ogni progetto nel file `script.js` ha questa struttura:

```javascript
{
    id: string,                    // ID univoco
    title: string,                 // Titolo del progetto
    description: string,           // Breve descrizione
    tags: string[],                // Array di tag
    category: string,              // cybersecurity | ml | software
    detailedDescription: string,   // HTML completo per descrizione dettagliata
    images: Array<{                // Galleria immagini
        url: string,
        caption?: string
    }>,
    codeSnippets: Array<{          // Snippet di codice
        language: string,
        title: string,
        description?: string,
        code: string
    }>
}
```

## Tips e Best Practices

### Per le Immagini:
- Usa immagini ottimizzate (< 500KB per screenshot)
- Formato consigliato: PNG per screenshot, JPG per foto
- Risoluzione consigliata: 1920x1080 o inferiore
- Usa nomi file descrittivi: `aphrodite-dashboard.png` non `img001.png`

### Per il Codice:
- Mantieni gli snippet brevi e focalizzati (< 50 righe)
- Aggiungi commenti esplicativi nel codice
- Usa indentazione corretta
- Mostra solo le parti più interessanti

### Per le Descrizioni:
- Usa heading (h4, h5) per organizzare il contenuto
- Aggiungi liste puntate per chiarezza
- Sii conciso ma completo
- Usa grassetto per concetti chiave

## Troubleshooting

### Le immagini non si caricano
- Verifica che il percorso sia corretto e relativo
- Controlla che i file esistano nella cartella specificata
- Assicurati che i nomi file non contengano spazi o caratteri speciali

### Il codice non ha syntax highlighting
- Verifica che il campo `language` sia scritto correttamente
- Controlla che Prism.js sia caricato correttamente
- Ricarica la pagina con Ctrl+F5

### La pagina dettaglio è vuota
- Controlla che l'ID del progetto in `script.js` corrisponda all'URL
- Verifica che il campo `detailedDescription` sia compilato
- Apri la console del browser per vedere eventuali errori

## Aggiornamenti Futuri

### Possibili Aggiunte:
- [ ] Lightbox per ingrandire le immagini
- [ ] Download dei progetti in PDF
- [ ] Sezione blog per articoli tecnici
- [ ] Filtro di ricerca nei progetti
- [ ] Dark mode
- [ ] Traduzioni multilingua

## License
MIT License - Libero di usare e modificare per i tuoi progetti personali

## Contatti

Per domande, suggerimenti o collaborazioni:
- 📧 Email: danielevalenti06081998@gmail.com
- 📱 Tel: +39 351 949 7967
- 📍 Location: Roma, Italia

---

**Ultimo aggiornamento:** Novembre 2025  
**Versione:** 2.0 - Con sistema pagine dettaglio progetti
