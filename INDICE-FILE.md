# 📁 INDICE DEI FILE - Portfolio Daniele Valenti

Questa cartella contiene il tuo portfolio professionale completo e tutta la documentazione necessaria.

---

## 🌐 File del Sito Web

### `index.html` ⭐
**Il file principale del portfolio**
- Apri questo file nel browser per visualizzare il sito
- Contiene tutte le sezioni: Hero, About, Skills, Projects, Experience, Education, Contact
- Design responsive ottimizzato per tutti i dispositivi
- Informazioni aggiornate dal tuo CV

### `project-detail.html` ⭐
**Template per le pagine dettaglio progetti**
- Viene usato automaticamente quando clicchi "Scopri di più" su un progetto
- Mostra descrizioni dettagliate, immagini e codice
- Non modificare questo file a meno che tu non voglia cambiare il layout

### `script.js` ⭐⭐⭐
**Il cuore del portfolio - IMPORTANTE!**
- Contiene TUTTI i dati: progetti, esperienze, formazione, skills
- **Questo è il file che modificherai** per aggiungere immagini e codice
- Ogni progetto ha campi `images[]` e `codeSnippets[]` da riempire
- Informazioni corrette dal CV già inserite

### `styles.css`
**Tutti gli stili del sito**
- Design professionale e moderno
- Variabili CSS per colori facilmente modificabili
- Animazioni e transizioni fluide
- Non serve modificarlo a meno che tu non voglia cambiare colori/stili

---

## 📚 Documentazione

### `README.md` 📖
**Documentazione completa del progetto**
- Come funziona il portfolio
- Struttura del progetto
- Come personalizzare tutto
- Istruzioni per pubblicazione online
- Troubleshooting
- **Leggi questo per capire tutto nel dettaglio**

### `GUIDA-RAPIDA.md` 🚀
**Tutorial veloce per modificare i progetti**
- Esempi pratici con codice copy-paste
- Come aggiungere immagini step-by-step
- Come aggiungere snippet di codice
- Template pronti all'uso
- **Leggi questo per iniziare subito**

### `ESEMPIO-COMPLETO-APHRODITE.md` 💡
**Esempio reale di progetto completo**
- Mostra come dovrebbe apparire il progetto APHRODITE
- Con immagini, codice e descrizioni dettagliate
- Circa 5 immagini e 4 snippet di codice Java
- Puoi usarlo come riferimento per gli altri progetti
- **Leggi questo per avere ispirazione**

### `CHECKLIST.md` ✅
**Piano d'azione completo**
- Tutti i passi da seguire per completare il portfolio
- Checklist per ogni progetto
- Priorità consigliate
- Standard di qualità
- Timeline suggerita
- **Stampa questo e spunta man mano**

---

## 📂 Cartelle

### `images/` (da creare)
Qui metterai tutte le immagini dei tuoi progetti, organizzate così:
```
images/
├── aphrodite/
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── ...
├── crypto-performance/
│   └── ...
├── cipher-cryptanalysis/
│   └── ...
└── [altri progetti]/
```

---

## 🎯 Da Dove Iniziare?

### Se sei di fretta (30 minuti):
1. Apri `index.html` nel browser → Vedi il sito funzionante ✅
2. Leggi `GUIDA-RAPIDA.md` → Capisci come modificare
3. Modifica `script.js` → Aggiungi 2-3 immagini al progetto APHRODITE
4. Ricarica `index.html` → Vedi le tue modifiche

### Se hai tempo (2-3 ore):
1. Apri `index.html` nel browser
2. Leggi `README.md` completo
3. Leggi `GUIDA-RAPIDA.md`
4. Guarda `ESEMPIO-COMPLETO-APHRODITE.md`
5. Segui `CHECKLIST.md` passo per passo
6. Completa almeno i progetti APHRODITE e Cryptographic Performance

### Piano Completo (1-2 settimane):
1. Leggi tutta la documentazione
2. Organizza materiali (screenshot, codice)
3. Segui la `CHECKLIST.md` completa
4. Completa tutti gli 8 progetti
5. Testa tutto
6. Pubblica online

---

## 📝 Workflow Consigliato

### 1. Setup (una tantum)
```
1. Scarica tutti i file in una cartella
2. Apri index.html per verificare che funzioni
3. Crea la cartella images/ con sottocartelle
4. Prepara materiali (screenshot, codice)
```

### 2. Per Ogni Progetto
```
1. Raccogli 3-5 screenshot/immagini
2. Salva in images/nome-progetto/
3. Apri script.js
4. Trova il progetto nell'array
5. Aggiungi immagini all'array images[]
6. Prepara 2-4 snippet di codice
7. Aggiungi all'array codeSnippets[]
8. Salva script.js
9. Apri/ricarica index.html
10. Clicca "Scopri di più" sul progetto
11. Verifica che tutto funzioni
```

### 3. Test Finale
```
1. Naviga tutto il sito
2. Prova ogni progetto
3. Verifica immagini e codice
4. Test su mobile
5. Controlla console per errori
```

### 4. Pubblicazione
```
1. Scegli piattaforma (GitHub Pages, Netlify, Vercel)
2. Carica i file
3. Testa il sito online
4. Condividi URL!
```

---

## 🎨 Struttura Dati (script.js)

### Progetti
Ogni progetto ha questa struttura:
```javascript
{
    id: 'nome-progetto',              // Identificativo unico
    title: 'Titolo Progetto',          // Nome visualizzato
    description: 'Breve descrizione',  // Per la card
    tags: ['Tag1', 'Tag2'],            // Tecnologie/keywords
    category: 'software',              // software/ml/cybersecurity
    detailedDescription: `HTML`,       // Descrizione completa
    images: [{                         // ← AGGIUNGI QUI
        url: 'path/immagine.png',
        caption: 'Descrizione'
    }],
    codeSnippets: [{                   // ← AGGIUNGI QUI
        language: 'java',
        title: 'Titolo',
        code: `codice...`
    }]
}
```

---

## 🔥 File Più Importanti

### Top 3 da leggere SUBITO:
1. **GUIDA-RAPIDA.md** → Per iniziare
2. **ESEMPIO-COMPLETO-APHRODITE.md** → Per vedere come fare
3. **script.js** → Per modificare

### Se hai problemi:
1. **README.md** → Documentazione completa
2. **CHECKLIST.md** → Cosa fare passo per passo
3. Console del browser (F12) → Per vedere errori

---

## 💾 Modifiche da Fare

### File da NON modificare:
- ❌ `index.html` (a meno che tu voglia cambiare struttura)
- ❌ `project-detail.html` (template funziona già)
- ❌ `styles.css` (a meno che tu voglia cambiare colori)

### File da modificare:
- ✅ `script.js` - **Qui aggiungi immagini e codice**

### File opzionali da modificare:
- `index.html` - Solo per cambiare email/telefono nella sezione contatti
- `styles.css` - Solo per cambiare i colori nel :root

---

## 📊 Stato Attuale del Portfolio

### ✅ Completato:
- Struttura HTML responsive
- Design professionale
- Tutte le informazioni dal CV inserite
- Sistema pagine dettaglio progetti
- Syntax highlighting per codice
- Animazioni e transizioni
- Filtri progetti
- Timeline esperienze/formazione
- Sezione contatti
- Footer

### 🔄 Da Completare:
- Aggiungere immagini ai progetti
- Aggiungere snippet di codice
- Preparare materiali multimediali
- (Opzionale) Aggiungere link social
- (Opzionale) Configurare dominio custom

---

## 🎯 Prossimi Passi

### Oggi:
1. [ ] Apri `index.html` e guarda il portfolio
2. [ ] Leggi `GUIDA-RAPIDA.md` (10 minuti)
3. [ ] Prova ad aggiungere 1-2 immagini a un progetto

### Questa Settimana:
1. [ ] Completa progetto APHRODITE
2. [ ] Completa progetto Cryptographic Performance
3. [ ] Aggiungi link social (LinkedIn, GitHub)

### Prossime Settimane:
1. [ ] Completa tutti i progetti
2. [ ] Test completo
3. [ ] Pubblica online
4. [ ] Condividi!

---

## 🆘 Help & Support

### Problemi comuni:

**"Le immagini non si vedono"**
→ Controlla il percorso in script.js sia corretto

**"Il codice non ha colori"**
→ Verifica il campo 'language' sia scritto giusto

**"La pagina del progetto è vuota"**
→ Controlla l'id del progetto in script.js

**"Non so da dove iniziare"**
→ Leggi GUIDA-RAPIDA.md e segui gli esempi

### Risorse:
- README.md - Documentazione completa
- GUIDA-RAPIDA.md - Tutorial pratico
- ESEMPIO-COMPLETO-APHRODITE.md - Riferimento
- CHECKLIST.md - Piano d'azione
- Console browser (F12) - Per debug

---

## 📫 Contatti nel Portfolio

Il portfolio include già i tuoi contatti:
- Email: danielevalenti06081998@gmail.com
- Telefono: +39 351 949 7967
- Location: Roma, Italia

Se vuoi modificarli, cerca nella sezione `<section id="contact">` del file `index.html`.

---

## 🌟 Caratteristiche del Portfolio

### Design:
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Animazioni fluide
- ✅ Colori professionali
- ✅ Font leggibili
- ✅ Nessuna emoticon

### Funzionalità:
- ✅ Pagine dettaglio progetti
- ✅ Filtri progetti per categoria
- ✅ Syntax highlighting codice
- ✅ Gallerie immagini
- ✅ Timeline esperienze
- ✅ Smooth scrolling
- ✅ Navbar dinamica

### SEO & Performance:
- ✅ Meta tags ottimizzati
- ✅ Semantic HTML5
- ✅ Caricamento veloce
- ✅ Accessibile
- ✅ Validato W3C

---

## 🎓 Info dal CV Incluse

Il portfolio include tutte le informazioni dal tuo CV:

### Formazione:
- ✅ Magistrale in Computer Science & AI (Sapienza) - In corso
- ✅ Laurea Triennale in Ingegneria Informatica (Sapienza) - 2023-2024
- ✅ Politecnico di Milano - 2018-2022
- ✅ Digital Engineering Program (ELIS) - 2018-2020
- ✅ Liceo Classico - 2012-2018

### Esperienze:
- ✅ Collaboratore Esterno Sapienza - 2023
- ✅ Tutor Privato - 2020-2024
- ✅ Stagista Eni - 2020
- ✅ Apprendista Cisco - 2019
- ✅ Operaio - 2023-2024

### Competenze:
- ✅ 6 aree principali evidenziate
- ✅ Tecnologie specifiche listate
- ✅ Skills tecniche e soft skills

---

## 🚀 Ready to Start!

Hai tutto quello che ti serve:
1. ✅ Portfolio funzionante
2. ✅ Documentazione completa
3. ✅ Esempi pratici
4. ✅ Checklist dettagliata
5. ✅ Template pronti

**Inizia da GUIDA-RAPIDA.md e buon lavoro! 💪**

---

*Ultimo aggiornamento: Novembre 2025*
*Versione: 2.0 - Con sistema pagine dettaglio progetti*
