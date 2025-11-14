# ESEMPIO COMPLETO - Progetto APHRODITE con Immagini e Codice

Questo file mostra come apparirà il progetto APHRODITE una volta che avrai aggiunto immagini e codice.

## 📋 Come è Fatto Ora (script.js)

```javascript
{
    id: 'aphrodite',
    title: 'APHRODITE GUI System',
    description: 'Sviluppo di un\'interfaccia grafica Java...',
    tags: ['Java', 'GUI', 'Aerospace', 'ISS'],
    category: 'software',
    detailedDescription: `
        <h4>Descrizione Dettagliata</h4>
        <p>Il progetto APHRODITE rappresenta...</p>
        // ... contenuto attuale ...
    `,
    images: [],              // ← VUOTO
    codeSnippets: []         // ← VUOTO
}
```

## 🎯 Come Dovrebbe Essere (con i tuoi contenuti)

### Passo 1: Prepara le Immagini

Crea questa struttura di cartelle:
```
portfolio/
└── images/
    └── aphrodite/
        ├── 01-interfaccia-principale.png
        ├── 02-dashboard-monitoraggio.png
        ├── 03-pannello-protocolli.png
        ├── 04-visualizzazione-dati.png
        └── 05-connessione-usb.jpg
```

### Passo 2: Modifica script.js

Sostituisci la sezione del progetto APHRODITE con questo:

```javascript
{
    id: 'aphrodite',
    title: 'APHRODITE GUI System',
    description: 'Sviluppo di un\'interfaccia grafica Java per il controllo di biosensori lab-on-chip destinati alla Stazione Spaziale Internazionale. Sistema completo di gestione protocolli analitici, visualizzazione real-time e comunicazione USB.',
    tags: ['Java', 'GUI', 'Aerospace', 'ISS'],
    category: 'software',
    detailedDescription: `
        <h4>Descrizione Dettagliata</h4>
        <p>Il progetto APHRODITE (Advanced Platform for Human Research on the International Space Station using 
        Opto-electronic Device for Integrated Testing and Experiments) rappresenta un sistema innovativo sviluppato 
        per la Scuola di Ingegneria Aerospaziale della Sapienza. L'obiettivo principale è stato quello di creare 
        un'interfaccia software professionale per il controllo e monitoraggio di biosensori destinati alla Stazione 
        Spaziale Internazionale.</p>
        
        <h5>Contesto del Progetto</h5>
        <p>Questo lavoro è stato sviluppato come tesi di laurea triennale in collaborazione con il team di ricerca 
        aerospaziale della Sapienza. Il sistema APHRODITE è progettato per operare in ambiente spaziale, quindi 
        particolare attenzione è stata data all'affidabilità, robustezza e facilità d'uso dell'interfaccia.</p>
        
        <h5>Caratteristiche Principali</h5>
        <ul>
            <li><strong>Interfaccia Grafica Intuitiva:</strong> Sviluppata in Java Swing con design user-friendly 
            per operatori scientifici</li>
            <li><strong>Gestione Protocolli Analitici:</strong> Sistema completo per caricare, modificare ed 
            eseguire protocolli di analisi biochimica</li>
            <li><strong>Visualizzazione Real-time:</strong> Grafici dinamici per il monitoraggio dei dati dei 
            biosensori con aggiornamento in tempo reale</li>
            <li><strong>Comunicazione USB:</strong> Implementazione robusta del protocollo di comunicazione con 
            i dispositivi hardware</li>
            <li><strong>Sistema di Logging:</strong> Registrazione completa di tutti gli eventi per analisi 
            post-esperimento</li>
            <li><strong>Export Dati:</strong> Funzionalità per esportare i dati raccolti in formati standard 
            (CSV, Excel)</li>
        </ul>
        
        <h5>Architettura del Sistema</h5>
        <p>L'applicazione segue un'architettura Model-View-Controller (MVC) per garantire separazione delle 
        responsabilità e manutenibilità del codice:</p>
        <ul>
            <li><strong>Model:</strong> Gestione dei dati dei sensori e dei protocolli</li>
            <li><strong>View:</strong> Interfaccia grafica in Swing</li>
            <li><strong>Controller:</strong> Logica di controllo e comunicazione hardware</li>
        </ul>
        
        <h5>Tecnologie Utilizzate</h5>
        <ul>
            <li><strong>Java SE 11:</strong> Linguaggio principale</li>
            <li><strong>Java Swing:</strong> Framework per l'interfaccia grafica</li>
            <li><strong>JFreeChart:</strong> Libreria per la visualizzazione dei grafici</li>
            <li><strong>RXTX/jSerialComm:</strong> Comunicazione seriale USB</li>
            <li><strong>Apache POI:</strong> Export dati in Excel</li>
            <li><strong>Log4j:</strong> Sistema di logging</li>
            <li><strong>JUnit:</strong> Testing</li>
        </ul>
        
        <h5>Sfide Tecniche Affrontate</h5>
        <ul>
            <li><strong>Sincronizzazione Dati:</strong> Gestione del flusso di dati in tempo reale dal biosensore 
            senza bloccare l'interfaccia utente</li>
            <li><strong>Robustezza Comunicazione:</strong> Implementazione di retry logic e gestione errori per 
            connessioni USB instabili</li>
            <li><strong>Performance:</strong> Ottimizzazione per gestire alti volumi di dati senza lag 
            nell'interfaccia</li>
            <li><strong>Testing:</strong> Sviluppo senza accesso continuo all'hardware fisico richiedeva 
            simulazioni accurate</li>
        </ul>
        
        <h5>Risultati e Impatto</h5>
        <p>Il sistema è stato validato dal team di ricerca e ha dimostrato:</p>
        <ul>
            <li>Interfaccia user-friendly che riduce i tempi di training degli operatori</li>
            <li>Stabilità nella comunicazione con i dispositivi hardware (>99% uptime nei test)</li>
            <li>Gestione efficiente di sessioni di acquisizione dati di lunga durata (>24 ore)</li>
            <li>Export dati affidabile per l'analisi scientifica successiva</li>
        </ul>
        
        <div class="alert alert-info mt-4">
            <strong>📚 Tesi di Laurea:</strong> Questo progetto è stato presentato come tesi di laurea 
            triennale in Ingegneria Informatica presso Sapienza Università di Roma (2023-2024). 
            Titolo completo: "Sistema APHRODITE: progettazione e sviluppo di un'interfaccia software per 
            il controllo e il monitoraggio di biosensori per applicazioni aerospaziali"
        </div>
        
        <h5>Sviluppi Futuri</h5>
        <p>Il sistema è in continua evoluzione. Possibili sviluppi futuri includono:</p>
        <ul>
            <li>Integrazione con sistemi di machine learning per analisi predittiva</li>
            <li>Interfaccia web per monitoraggio remoto</li>
            <li>Support per protocolli di comunicazione wireless</li>
            <li>Dashboard analytics con visualizzazioni avanzate</li>
        </ul>
    `,
    
    // ✅ SEZIONE IMMAGINI
    images: [
        {
            url: 'images/aphrodite/01-interfaccia-principale.png',
            caption: 'Interfaccia principale del sistema APHRODITE con pannelli di controllo e monitoraggio'
        },
        {
            url: 'images/aphrodite/02-dashboard-monitoraggio.png',
            caption: 'Dashboard di monitoraggio real-time con grafici dinamici dei dati dei biosensori'
        },
        {
            url: 'images/aphrodite/03-pannello-protocolli.png',
            caption: 'Pannello di gestione protocolli analitici con editor integrato'
        },
        {
            url: 'images/aphrodite/04-visualizzazione-dati.png',
            caption: 'Visualizzazione multi-canale dei dati acquisiti con zoom e pan'
        },
        {
            url: 'images/aphrodite/05-connessione-usb.jpg',
            caption: 'Pannello di configurazione connessione USB e diagnostica hardware'
        }
    ],
    
    // ✅ SEZIONE CODICE
    codeSnippets: [
        {
            language: 'java',
            title: 'Classe Principale - APHRODITEMainWindow',
            description: 'Inizializzazione della finestra principale e setup dei componenti',
            code: `
public class APHRODITEMainWindow extends JFrame {
    private JPanel mainPanel;
    private USBManager usbManager;
    private DataVisualizationPanel dataPanel;
    private ProtocolManager protocolManager;
    private Logger logger;
    
    public APHRODITEMainWindow() {
        super("APHRODITE - ISS Biosensor Control System");
        
        // Configurazione finestra
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1200, 800);
        setLocationRelativeTo(null);
        
        // Inizializza componenti
        initializeComponents();
        setupLayout();
        setupUSBConnection();
        
        // Setup logging
        logger = LogManager.getLogger(APHRODITEMainWindow.class);
        logger.info("APHRODITE System Started");
    }
    
    private void initializeComponents() {
        mainPanel = new JPanel(new BorderLayout(10, 10));
        dataPanel = new DataVisualizationPanel();
        protocolManager = new ProtocolManager();
        usbManager = new USBManager();
        
        // Setup event listeners
        setupEventListeners();
    }
    
    private void setupLayout() {
        // Top toolbar
        JToolBar toolBar = createToolBar();
        mainPanel.add(toolBar, BorderLayout.NORTH);
        
        // Center - data visualization
        mainPanel.add(dataPanel, BorderLayout.CENTER);
        
        // Right - controls
        JPanel controlPanel = createControlPanel();
        mainPanel.add(controlPanel, BorderLayout.EAST);
        
        // Bottom - status bar
        JPanel statusBar = createStatusBar();
        mainPanel.add(statusBar, BorderLayout.SOUTH);
        
        add(mainPanel);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            APHRODITEMainWindow window = new APHRODITEMainWindow();
            window.setVisible(true);
        });
    }
}
            `
        },
        {
            language: 'java',
            title: 'USBManager - Comunicazione Hardware',
            description: 'Gestione della comunicazione USB con i biosensori, con retry logic e error handling',
            code: `
public class USBManager {
    private SerialPort serialPort;
    private boolean isConnected;
    private final int MAX_RETRIES = 3;
    private final int TIMEOUT_MS = 5000;
    
    public boolean connect(String portName) {
        int retries = 0;
        
        while (retries < MAX_RETRIES) {
            try {
                serialPort = SerialPort.getCommPort(portName);
                serialPort.setComPortParameters(
                    9600,                    // Baud rate
                    8,                       // Data bits
                    SerialPort.ONE_STOP_BIT,
                    SerialPort.NO_PARITY
                );
                
                if (serialPort.openPort()) {
                    serialPort.setComPortTimeouts(
                        SerialPort.TIMEOUT_READ_BLOCKING,
                        TIMEOUT_MS,
                        0
                    );
                    
                    isConnected = true;
                    logger.info("Connected to port: " + portName);
                    return true;
                }
            } catch (Exception e) {
                logger.error("Connection attempt " + (retries + 1) + 
                           " failed: " + e.getMessage());
                retries++;
                
                // Wait before retry
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                }
            }
        }
        
        return false;
    }
    
    public void sendCommand(String command) {
        if (!isConnected) {
            throw new IllegalStateException("Not connected to USB device");
        }
        
        try {
            byte[] commandBytes = command.getBytes(StandardCharsets.UTF_8);
            serialPort.writeBytes(commandBytes, commandBytes.length);
            logger.debug("Command sent: " + command);
        } catch (Exception e) {
            logger.error("Error sending command: " + e.getMessage());
            throw new RuntimeException("Failed to send command", e);
        }
    }
    
    public String readData() {
        if (!isConnected) {
            return null;
        }
        
        try {
            byte[] buffer = new byte[1024];
            int bytesRead = serialPort.readBytes(buffer, buffer.length);
            
            if (bytesRead > 0) {
                String data = new String(buffer, 0, bytesRead, 
                                       StandardCharsets.UTF_8);
                logger.debug("Data received: " + data);
                return data;
            }
        } catch (Exception e) {
            logger.error("Error reading data: " + e.getMessage());
        }
        
        return null;
    }
    
    public void disconnect() {
        if (serialPort != null && serialPort.isOpen()) {
            serialPort.closePort();
            isConnected = false;
            logger.info("Disconnected from USB device");
        }
    }
}
            `
        },
        {
            language: 'java',
            title: 'ProtocolManager - Gestione Protocolli Analitici',
            description: 'Caricamento, validazione ed esecuzione dei protocolli di analisi',
            code: `
public class ProtocolManager {
    private List<AnalyticalProtocol> loadedProtocols;
    private AnalyticalProtocol currentProtocol;
    private ExecutorService executor;
    
    public ProtocolManager() {
        this.loadedProtocols = new ArrayList<>();
        this.executor = Executors.newSingleThreadExecutor();
    }
    
    public void loadProtocol(File protocolFile) throws IOException {
        // Parse XML protocol file
        DocumentBuilder builder = DocumentBuilderFactory
            .newInstance()
            .newDocumentBuilder();
        Document doc = builder.parse(protocolFile);
        
        // Extract protocol information
        String name = doc.getElementsByTagName("name")
            .item(0)
            .getTextContent();
        String description = doc.getElementsByTagName("description")
            .item(0)
            .getTextContent();
        
        // Parse steps
        NodeList stepNodes = doc.getElementsByTagName("step");
        List<ProtocolStep> steps = new ArrayList<>();
        
        for (int i = 0; i < stepNodes.getLength(); i++) {
            Element stepElement = (Element) stepNodes.item(i);
            
            String stepName = stepElement.getAttribute("name");
            String command = stepElement
                .getElementsByTagName("command")
                .item(0)
                .getTextContent();
            int duration = Integer.parseInt(
                stepElement.getElementsByTagName("duration")
                .item(0)
                .getTextContent()
            );
            
            steps.add(new ProtocolStep(stepName, command, duration));
        }
        
        // Create protocol object
        AnalyticalProtocol protocol = new AnalyticalProtocol(
            name, 
            description, 
            steps
        );
        
        // Validate protocol
        if (validateProtocol(protocol)) {
            loadedProtocols.add(protocol);
            logger.info("Protocol loaded: " + name);
        } else {
            throw new IllegalArgumentException(
                "Invalid protocol: " + name
            );
        }
    }
    
    public void executeProtocol(AnalyticalProtocol protocol, 
                               USBManager usbManager) {
        currentProtocol = protocol;
        
        executor.submit(() -> {
            try {
                logger.info("Starting protocol: " + protocol.getName());
                
                for (ProtocolStep step : protocol.getSteps()) {
                    logger.info("Executing step: " + step.getName());
                    
                    // Send command to device
                    usbManager.sendCommand(step.getCommand());
                    
                    // Wait for step duration
                    Thread.sleep(step.getDuration() * 1000);
                    
                    // Read data
                    String data = usbManager.readData();
                    if (data != null) {
                        processStepData(step, data);
                    }
                }
                
                logger.info("Protocol completed: " + protocol.getName());
                notifyProtocolComplete(protocol);
                
            } catch (Exception e) {
                logger.error("Protocol execution failed: " + 
                           e.getMessage());
                notifyProtocolError(protocol, e);
            }
        });
    }
    
    private boolean validateProtocol(AnalyticalProtocol protocol) {
        // Validation logic
        if (protocol.getSteps().isEmpty()) {
            return false;
        }
        
        for (ProtocolStep step : protocol.getSteps()) {
            if (step.getCommand() == null || 
                step.getCommand().trim().isEmpty()) {
                return false;
            }
        }
        
        return true;
    }
}
            `
        },
        {
            language: 'java',
            title: 'DataVisualizationPanel - Grafici Real-time',
            description: 'Pannello per la visualizzazione dei dati in tempo reale usando JFreeChart',
            code: `
public class DataVisualizationPanel extends JPanel {
    private XYSeriesCollection dataset;
    private JFreeChart chart;
    private ChartPanel chartPanel;
    private Map<String, XYSeries> dataSeries;
    
    public DataVisualizationPanel() {
        setLayout(new BorderLayout());
        dataSeries = new HashMap<>();
        
        // Create dataset
        dataset = new XYSeriesCollection();
        
        // Create chart
        chart = ChartFactory.createXYLineChart(
            "Biosensor Data - Real Time",
            "Time (seconds)",
            "Signal Intensity",
            dataset,
            PlotOrientation.VERTICAL,
            true,  // legend
            true,  // tooltips
            false  // urls
        );
        
        // Customize chart
        customizeChart();
        
        // Create chart panel
        chartPanel = new ChartPanel(chart);
        chartPanel.setPreferredSize(new Dimension(800, 600));
        add(chartPanel, BorderLayout.CENTER);
        
        // Add control panel
        JPanel controls = createControlsPanel();
        add(controls, BorderLayout.SOUTH);
    }
    
    private void customizeChart() {
        XYPlot plot = chart.getXYPlot();
        
        // Set background
        plot.setBackgroundPaint(Color.WHITE);
        plot.setDomainGridlinePaint(Color.LIGHT_GRAY);
        plot.setRangeGridlinePaint(Color.LIGHT_GRAY);
        
        // Configure renderer
        XYLineAndShapeRenderer renderer = 
            new XYLineAndShapeRenderer();
        renderer.setDefaultShapesVisible(false);
        renderer.setDefaultLinesVisible(true);
        plot.setRenderer(renderer);
        
        // Set axis ranges
        ValueAxis domainAxis = plot.getDomainAxis();
        domainAxis.setAutoRange(true);
        
        ValueAxis rangeAxis = plot.getRangeAxis();
        rangeAxis.setAutoRange(true);
    }
    
    public void addDataSeries(String channelName) {
        XYSeries series = new XYSeries(channelName);
        dataSeries.put(channelName, series);
        dataset.addSeries(series);
    }
    
    public void addDataPoint(String channelName, 
                           double time, 
                           double value) {
        XYSeries series = dataSeries.get(channelName);
        if (series != null) {
            series.add(time, value);
            
            // Keep only last 1000 points for performance
            if (series.getItemCount() > 1000) {
                series.remove(0);
            }
        }
    }
    
    public void clearData() {
        for (XYSeries series : dataSeries.values()) {
            series.clear();
        }
    }
    
    public void exportToImage(File outputFile) throws IOException {
        ChartUtils.saveChartAsPNG(
            outputFile, 
            chart, 
            1920, 
            1080
        );
    }
}
            `
        }
    ]
}
```

## 📸 Screenshot Consigliati

Ecco che tipo di immagini dovresti aggiungere:

1. **Interfaccia Principale** (01-interfaccia-principale.png)
   - Screenshot della finestra completa
   - Mostra tutti i pannelli principali
   - Esempio con dati reali se possibile

2. **Dashboard Monitoraggio** (02-dashboard-monitoraggio.png)
   - Focus sui grafici real-time
   - Con dati in acquisizione
   - Mostra le curve dei sensori

3. **Pannello Protocolli** (03-pannello-protocolli.png)
   - Lista dei protocolli caricati
   - Editor del protocollo aperto
   - Esempio di configurazione

4. **Visualizzazione Dati** (04-visualizzazione-dati.png)
   - Grafici multi-canale
   - Con zoom attivato
   - Legenda ben visibile

5. **Connessione USB** (05-connessione-usb.jpg)
   - Foto del setup hardware
   - O screenshot del pannello di configurazione
   - Con indicatore di connessione attiva

## 🎯 Risultato Finale

Quando aprirai la pagina dettaglio del progetto APHRODITE, vedrai:

1. **Header** con titolo e tag
2. **Descrizione breve** dall'array `description`
3. **Descrizione dettagliata** con tutti i paragrafi formattati
4. **Galleria di 5 immagini** organizzate in griglia
5. **4 snippet di codice Java** con syntax highlighting
6. **Sezione risorse** per link futuri

---

## 💡 Suggerimenti Finali

### Per le Immagini:
- Fai screenshot ad alta risoluzione (1920x1080)
- Cattura momenti "interessanti" (con dati, non vuoti)
- Usa uno sfondo ordinato
- Evidenzia le parti importanti con frecce o cerchi (opzionale)

### Per il Codice:
- Scegli le parti più significative/interessanti
- Aggiungi commenti esplicativi
- Mantieni una buona indentazione
- Non superare le 80 colonne di larghezza

### Per le Descrizioni:
- Spiega il PERCHÉ oltre al COME
- Aggiungi contesto sul progetto
- Menciona le sfide affrontate
- Includi i risultati/impatto

---

Copia questo esempio e adatta alle tue esigenze! 🚀
