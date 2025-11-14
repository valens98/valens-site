# GUIDA RAPIDA - Come Modificare i Tuoi Progetti

## 🚀 Quick Start

Apri il file `script.js` e cerca il progetto che vuoi modificare. Ogni progetto inizia con `{` e finisce con `}`.

## 📝 Esempio Completo: Modificare il Progetto APHRODITE

### PRIMA (vuoto):
```javascript
{
    id: 'aphrodite',
    title: 'APHRODITE GUI System',
    // ... altri campi ...
    images: [],
    codeSnippets: []
}
```

### DOPO (con contenuti):
```javascript
{
    id: 'aphrodite',
    title: 'APHRODITE GUI System',
    description: '...',
    tags: ['Java', 'GUI', 'Aerospace', 'ISS'],
    category: 'software',
    detailedDescription: `... (resta come è) ...`,
    
    // ✅ AGGIUNGI LE TUE IMMAGINI QUI
    images: [
        {
            url: 'images/aphrodite/interfaccia-principale.png',
            caption: 'Interfaccia principale del sistema di controllo'
        },
        {
            url: 'images/aphrodite/grafico-dati.png',
            caption: 'Visualizzazione real-time dei dati dei biosensori'
        },
        {
            url: 'images/aphrodite/pannello-controllo.jpg',
            caption: 'Pannello di controllo protocolli analitici'
        }
    ],
    
    // ✅ AGGIUNGI I TUOI SNIPPET DI CODICE QUI
    codeSnippets: [
        {
            language: 'java',
            title: 'Classe principale dell\'interfaccia',
            description: 'Inizializzazione della GUI e setup della comunicazione USB',
            code: `
public class APHRODITEMainWindow extends JFrame {
    private JPanel mainPanel;
    private USBManager usbManager;
    
    public APHRODITEMainWindow() {
        setTitle("APHRODITE - ISS Biosensor Control");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1200, 800);
        
        initComponents();
        setupUSBConnection();
    }
}
            `
        },
        {
            language: 'java',
            title: 'Gestione protocolli analitici',
            description: 'Caricamento e esecuzione dei protocolli',
            code: `
public class ProtocolManager {
    private List<AnalyticalProtocol> protocols;
    
    public void loadProtocol(File protocolFile) {
        // Parsing del file di protocollo
        AnalyticalProtocol protocol = ProtocolParser.parse(protocolFile);
        protocols.add(protocol);
    }
    
    public void executeProtocol(AnalyticalProtocol protocol) {
        // Invio comandi al biosensore
        protocol.getSteps().forEach(step -> {
            usbManager.sendCommand(step.getCommand());
        });
    }
}
            `
        }
    ]
}
```

## 📸 Dove Mettere le Immagini

### Passo 1: Crea le cartelle
```
portfolio/
├── index.html
├── script.js
└── images/                    ← Crea questa cartella
    ├── aphrodite/             ← Una sottocartella per ogni progetto
    │   ├── screenshot1.png
    │   └── screenshot2.png
    ├── crypto-performance/
    │   └── grafici-performance.png
    └── denuvo-research/
        └── diagramma-architettura.png
```

### Passo 2: Aggiungi le immagini in script.js
```javascript
images: [
    {
        url: 'images/aphrodite/screenshot1.png',      // ← Il percorso
        caption: 'Descrizione dell\'immagine'         // ← La didascalia
    }
]
```

## 💻 Come Aggiungere Codice

### Template da copiare:
```javascript
codeSnippets: [
    {
        language: 'java',           // python, javascript, java, html, css
        title: 'Titolo dello snippet',
        description: 'Breve descrizione (opzionale)',
        code: `
// Il tuo codice qui
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
        `
    }
]
```

### Linguaggi supportati:
- `java` - Per codice Java
- `python` - Per codice Python
- `javascript` - Per codice JavaScript
- `html` - Per codice HTML
- `css` - Per codice CSS

## 🎯 Esempi Per Ogni Tipo di Progetto

### Progetto Software (APHRODITE)
```javascript
images: [
    { url: 'images/aphrodite/gui.png', caption: 'Interfaccia grafica' },
    { url: 'images/aphrodite/dashboard.png', caption: 'Dashboard monitoraggio' }
],
codeSnippets: [
    { language: 'java', title: 'Main Class', code: '...' }
]
```

### Progetto Cybersecurity (Cryptographic Analysis)
```javascript
images: [
    { url: 'images/crypto/benchmark-chart.png', caption: 'Grafico prestazioni' },
    { url: 'images/crypto/comparison.png', caption: 'Confronto algoritmi' }
],
codeSnippets: [
    { language: 'python', title: 'AES Benchmark', code: '...' },
    { language: 'python', title: 'ChaCha20 Test', code: '...' }
]
```

### Progetto ML (Machine Learning Notes)
```javascript
images: [
    { url: 'images/ml-notes/svm-diagram.png', caption: 'Diagramma SVM' },
    { url: 'images/ml-notes/regression.png', caption: 'Esempio regressione' }
],
codeSnippets: [
    { language: 'python', title: 'SVM Implementation', code: '...' }
]
```

## ✏️ Modificare la Descrizione Dettagliata

Nel campo `detailedDescription` puoi scrivere HTML:

```javascript
detailedDescription: `
    <h4>Il Mio Progetto</h4>
    <p>Descrizione introduttiva del progetto...</p>
    
    <h5>Obiettivi Principali</h5>
    <ul>
        <li>Obiettivo 1</li>
        <li>Obiettivo 2</li>
        <li>Obiettivo 3</li>
    </ul>
    
    <h5>Tecnologie Utilizzate</h5>
    <ul>
        <li><strong>Frontend:</strong> React, Bootstrap</li>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Database:</strong> MongoDB</li>
    </ul>
    
    <h5>Risultati</h5>
    <p>Descrizione dei risultati ottenuti...</p>
    
    <div class="alert alert-info">
        <strong>💡 Nota:</strong> Puoi aggiungere note importanti così
    </div>
`
```

## 🆕 Aggiungere un Nuovo Progetto

### 1. Copia questo template:
```javascript
{
    id: 'nome-progetto',                    // tutto minuscolo, trattini
    title: 'Nome del Progetto',             // Il titolo bello
    description: 'Breve descrizione di 1-2 righe per la card',
    tags: ['Tag1', 'Tag2', 'Tag3'],        // Max 4-5 tag
    category: 'software',                   // software, cybersecurity, o ml
    detailedDescription: `
        <h4>Descrizione Dettagliata</h4>
        <p>Scrivi qui la descrizione completa...</p>
    `,
    images: [],
    codeSnippets: []
}
```

### 2. Incollalo nell'array `projects` in script.js:
```javascript
const projects = [
    // ... progetti esistenti ...
    
    // ✅ INCOLLA IL TUO NUOVO PROGETTO QUI
    {
        id: 'mio-nuovo-progetto',
        title: 'Il Mio Nuovo Progetto',
        // ... resto del codice ...
    }
];
```

### 3. Salva e ricarica la pagina!

## 🎨 Tips per Belle Immagini

1. **Dimensioni consigliate:** 1920x1080 o 1280x720
2. **Formato:** PNG per screenshot, JPG per foto
3. **Peso:** Cerca di stare sotto i 500KB per immagine
4. **Nomi file:** Usa nomi descrittivi come `dashboard-overview.png` non `img1.png`

## ⚡ Checklist Veloce

Prima di caricare online, controlla:

- [ ] Tutte le immagini sono nella cartella `images/`
- [ ] I percorsi delle immagini in `script.js` sono corretti
- [ ] Ogni progetto ha almeno 1-2 immagini
- [ ] Gli snippet di codice hanno il `language` corretto
- [ ] Il codice è ben indentato e leggibile
- [ ] Hai testato il sito aprendo `index.html` nel browser

## 🚨 Errori Comuni

### "L'immagine non si vede"
➡️ Controlla che il percorso sia giusto: `images/nome-progetto/file.png`

### "Il codice non ha i colori"
➡️ Controlla il campo `language`: deve essere `'python'`, `'java'`, etc.

### "La pagina del progetto è vuota"
➡️ Controlla che l'`id` del progetto sia corretto e senza spazi

---

## 📞 Bisogno di Aiuto?

Se hai dubbi, guarda il README.md per la documentazione completa!

**Buon lavoro! 🎉**
