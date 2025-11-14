// ===================================
// Data Objects
// ===================================

const skills = [
    {
        icon: 'fa-shield-halved',
        title: 'Crittografia',
        description: 'AES, ChaCha20, HMAC, Analisi cifrari, OpenSSL, Benchmarking algoritmi crittografici'
    },
    {
        icon: 'fa-brain',
        title: 'Machine Learning',
        description: 'Regressione Lineare, SVM, Decision Theory, Ridge Regression, Statistical Learning'
    },
    {
        icon: 'fa-code',
        title: 'Programmazione',
        description: 'Java, Python, JavaScript, LaTeX, SQL, Git, Docker, HTML, CSS'
    },
    {
        icon: 'fa-user-shield',
        title: 'Cybersecurity',
        description: 'Network Security, Analisi vulnerabilità, Reverse Engineering, Anti-piracy systems'
    },
    {
        icon: 'fa-chart-line',
        title: 'Data Analysis',
        description: 'Statistical Analysis, Performance Benchmarking, Frequency Analysis, Visualization'
    },
    {
        icon: 'fa-tools',
        title: 'Tools & Framework',
        description: 'Bootstrap, AngularJS, JFreeChart, TikZ, Matplotlib, Pandas, NumPy'
    }
];

const projects = [
    {
        id: 'aphrodite',
        title: 'APHRODITE GUI System',
        description: 'Sviluppo di un\'interfaccia grafica Java per il controllo di biosensori lab-on-chip destinati alla Stazione Spaziale Internazionale. Sistema completo di gestione protocolli analitici, visualizzazione real-time e comunicazione USB.',
        tags: ['Java', 'GUI', 'Aerospace', 'ISS'],
        category: 'software',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Il progetto APHRODITE rappresenta un sistema innovativo sviluppato per la Scuola di Ingegneria Aerospaziale della Sapienza. 
            L'obiettivo principale è stato quello di creare un'interfaccia software professionale per il controllo e monitoraggio di biosensori 
            destinati alla Stazione Spaziale Internazionale.</p>
            
            <h5>Caratteristiche Principali:</h5>
            <ul>
                <li>Interfaccia grafica intuitiva sviluppata in Java Swing</li>
                <li>Gestione completa dei protocolli analitici</li>
                <li>Visualizzazione real-time dei dati sensoriali</li>
                <li>Comunicazione USB con i dispositivi hardware</li>
                <li>Sistema di logging e reportistica</li>
            </ul>
            
            <h5>Tecnologie Utilizzate:</h5>
            <ul>
                <li>Java (versione 11+)</li>
                <li>Swing per l'interfaccia grafica</li>
                <li>JFreeChart per la visualizzazione dati</li>
                <li>Protocolli di comunicazione USB</li>
            </ul>
            
            <p><em>Questo progetto è stato sviluppato come tesi di laurea triennale in Ingegneria Informatica presso Sapienza Università di Roma (2023-2024).</em></p>
        `,
        images: [],
        codeSnippets: []
    },
    {
        id: 'crypto-performance',
        title: 'Cryptographic Performance Analysis',
        description: 'Benchmark completo di algoritmi crittografici (AES-128-CTR, ChaCha20, AES-GCM, ChaCha20-Poly1305) con Encrypt-then-MAC. Analisi statistica delle prestazioni, derivazione chiavi con HKDF, visualizzazione dati.',
        tags: ['Python', 'OpenSSL', 'Cryptography', 'Benchmarking'],
        category: 'cybersecurity',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Progetto di analisi e benchmarking completo degli algoritmi crittografici più utilizzati, con focus sulle prestazioni 
            e sulla sicurezza delle implementazioni.</p>
            
            <h5>Algoritmi Analizzati:</h5>
            <ul>
                <li>AES-128-CTR (Advanced Encryption Standard in Counter mode)</li>
                <li>ChaCha20 (Stream cipher moderno)</li>
                <li>AES-GCM (Authenticated Encryption)</li>
                <li>ChaCha20-Poly1305 (AEAD cipher)</li>
            </ul>
            
            <h5>Metodologia:</h5>
            <ul>
                <li>Implementazione di test di performance con diversi payload</li>
                <li>Analisi statistica dei risultati</li>
                <li>Confronto tra Encrypt-then-MAC e AEAD</li>
                <li>Derivazione sicura delle chiavi con HKDF</li>
                <li>Visualizzazione grafica dei dati con Matplotlib</li>
            </ul>
            
            <h5>Tecnologie:</h5>
            <ul>
                <li>Python 3.x</li>
                <li>OpenSSL library</li>
                <li>Matplotlib per grafici</li>
                <li>NumPy per analisi statistica</li>
            </ul>
        `,
        images: [],
        codeSnippets: []
    },
    {
        id: 'cipher-cryptanalysis',
        title: 'Substitution Cipher Cryptanalysis',
        description: 'Analisi crittografica di cifrari a sostituzione monoalfabetica tramite frequency analysis. Implementazione di algoritmi per il conteggio delle frequenze, analisi dei pattern e decifrazione automatica.',
        tags: ['Cryptanalysis', 'Python', 'Frequency Analysis'],
        category: 'cybersecurity',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Progetto di cryptanalysis focalizzato sull'attacco ai cifrari a sostituzione monoalfabetica utilizzando 
            tecniche di frequency analysis e pattern matching.</p>
            
            <h5>Funzionalità Implementate:</h5>
            <ul>
                <li>Analisi delle frequenze di lettere e bigrammi</li>
                <li>Riconoscimento automatico dei pattern</li>
                <li>Algoritmo di decifrazione automatica</li>
                <li>Scoring basato sulla lingua italiana</li>
                <li>Visualizzazione delle statistiche</li>
            </ul>
            
            <h5>Tecniche Utilizzate:</h5>
            <ul>
                <li>Frequency Analysis classica</li>
                <li>N-gram analysis (bigrammi, trigrammi)</li>
                <li>Pattern matching</li>
                <li>Algoritmi di ottimizzazione</li>
            </ul>
        `,
        images: [],
        codeSnippets: []
    },
    {
        id: 'ml-notes',
        title: 'Machine Learning Lecture Notes',
        description: 'Conversione professionale di appunti manoscritti in documenti LaTeX con formule matematiche, diagrammi TikZ e grafici. Copertura completa di SVM, regressione lineare, statistical learning theory.',
        tags: ['LaTeX', 'TikZ', 'Machine Learning', 'Academic'],
        category: 'ml',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Progetto di documentazione accademica che coinvolge la conversione e l'organizzazione di appunti di Machine Learning 
            in documenti LaTeX professionali.</p>
            
            <h5>Argomenti Trattati:</h5>
            <ul>
                <li>Support Vector Machines (SVM)</li>
                <li>Regressione Lineare e Ridge Regression</li>
                <li>Statistical Learning Theory</li>
                <li>Decision Theory</li>
                <li>Overfitting e regolarizzazione</li>
            </ul>
            
            <h5>Caratteristiche del Documento:</h5>
            <ul>
                <li>Formule matematiche in LaTeX</li>
                <li>Diagrammi e grafici realizzati con TikZ</li>
                <li>Struttura organizzata e indicizzata</li>
                <li>Esempi pratici e dimostrazioni</li>
            </ul>
        `,
        images: [],
        codeSnippets: []
    },
    {
        id: 'denuvo-research',
        title: 'Denuvo Anti-Piracy Research',
        description: 'Ricerca accademica sull\'analisi delle tecnologie anti-piracy Denuvo da una prospettiva di security research. Studio del sistema di hardware fingerprinting e virtual machine protection.',
        tags: ['Cybersecurity', 'Reverse Engineering', 'Research'],
        category: 'cybersecurity',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Ricerca accademica focalizzata sull'analisi delle tecnologie anti-piracy Denuvo dal punto di vista della security research.</p>
            
            <h5>Aree di Studio:</h5>
            <ul>
                <li>Hardware fingerprinting techniques</li>
                <li>Virtual machine detection e protezione</li>
                <li>Anti-debugging mechanisms</li>
                <li>Code obfuscation</li>
                <li>Performance impact analysis</li>
            </ul>
            
            <h5>Metodologia:</h5>
            <ul>
                <li>Analisi statica del codice</li>
                <li>Studio dei brevetti pubblici</li>
                <li>Ricerca bibliografica</li>
                <li>Documentazione tecnica</li>
            </ul>
            
            <p><em>Nota: Questa ricerca è condotta esclusivamente a scopo accademico e di security research.</em></p>
        `,
        images: [],
        codeSnippets: []
    },
    {
        id: 'ai-trading',
        title: 'AI Trading Systems Integration',
        description: 'Studio sull\'integrazione di Large Language Models in sistemi di trading automatico. Analisi dell\'architettura per combinare analisi tecnica, fondamentale e sentiment analysis tramite AI.',
        tags: ['AI', 'Trading', 'LLM', 'Finance'],
        category: 'ml',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Progetto di ricerca sull'integrazione di Large Language Models nei sistemi di trading automatico, 
            combinando intelligenza artificiale con analisi finanziaria.</p>
            
            <h5>Componenti del Sistema:</h5>
            <ul>
                <li>Integrazione di LLM per analisi del sentiment</li>
                <li>Elaborazione di notizie finanziarie in real-time</li>
                <li>Combinazione con analisi tecnica tradizionale</li>
                <li>Valutazione fondamentale automatizzata</li>
                <li>Sistema di decisione basato su AI</li>
            </ul>
            
            <h5>Tecnologie Studiate:</h5>
            <ul>
                <li>Large Language Models (GPT, BERT)</li>
                <li>Natural Language Processing</li>
                <li>Time series analysis</li>
                <li>API di mercati finanziari</li>
                <li>Framework di machine learning</li>
            </ul>
        `,
        images: [],
        codeSnippets: []
    },
    {
        id: 'cv-portfolio',
        title: 'Professional CV & Portfolio',
        description: 'Creazione di CV professionali multipiattaforma in LaTeX e Canva con design personalizzati. Documentazione completa delle esperienze professionali e progetti di ricerca.',
        tags: ['LaTeX', 'Canva', 'Design', 'Web'],
        category: 'software',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Progetto di personal branding che include la creazione di materiali professionali in diversi formati.</p>
            
            <h5>Deliverables:</h5>
            <ul>
                <li>CV professionale in LaTeX</li>
                <li>Design personalizzati in Canva</li>
                <li>Portfolio web interattivo</li>
                <li>Documentazione progetti</li>
            </ul>
            
            <h5>Caratteristiche:</h5>
            <ul>
                <li>Design responsive e moderno</li>
                <li>Ottimizzazione per ATS (Applicant Tracking Systems)</li>
                <li>Multipiattaforma (web, PDF, stampa)</li>
                <li>Facilmente aggiornabile</li>
            </ul>
        `,
        images: [],
        codeSnippets: []
    },
    {
        id: 'network-config',
        title: 'Network Configuration & Analysis',
        description: 'Configurazione avanzata di router con QoS, analisi delle prestazioni di rete, troubleshooting di connettività Gigabit Ethernet e ottimizzazione delle performance.',
        tags: ['Networking', 'QoS', 'Troubleshooting'],
        category: 'cybersecurity',
        detailedDescription: `
            <h4>Descrizione Dettagliata</h4>
            <p>Progetto di network engineering focalizzato sulla configurazione avanzata e ottimizzazione delle reti.</p>
            
            <h5>Attività Svolte:</h5>
            <ul>
                <li>Configurazione avanzata di router e switch</li>
                <li>Implementazione di Quality of Service (QoS)</li>
                <li>Troubleshooting di problemi di connettività</li>
                <li>Ottimizzazione delle performance di rete</li>
                <li>Analisi del traffico di rete</li>
            </ul>
            
            <h5>Competenze Sviluppate:</h5>
            <ul>
                <li>Protocolli di routing</li>
                <li>VLAN e network segmentation</li>
                <li>QoS policies</li>
                <li>Network monitoring</li>
                <li>Performance tuning</li>
            </ul>
        `,
        images: [],
        codeSnippets: []
    }
];

const experiences = [
    {
        title: 'Collaboratore Esterno',
        organization: 'Scuola di Ingegneria Aerospaziale, Sapienza - Roma',
        period: 'Feb 2023 - Ott 2023',
        description: 'Interfaccia software per il sistema APHRODITE, biosensore per la Stazione Spaziale Internazionale. GUI in Java per il controllo del sistema, risoluzione problemi e debugging, lavoro con team di ricerca aerospaziale.'
    },
    {
        title: 'Tutor Privato',
        organization: 'Attività Freelance',
        period: '2020 - 2024',
        description: 'Lezioni in materie scientifiche e umanistiche: informatica, matematica, fisica, latino, filosofia ed inglese. Creazione di materiali didattici su misura, metodi di insegnamento efficaci, gestione autonoma di orari e clienti.'
    },
    {
        title: 'Stagista',
        organization: 'Eni',
        period: 'Mar 2020 - Lug 2020',
        description: 'Analisi del valore e fattibilità di applicazioni Blockchain. Metodologie Design Thinking, analisi tecnica e casi d\'uso, ricerca e documentazione.'
    },
    {
        title: 'Apprendista',
        organization: 'Cisco - Roma',
        period: 'Apr 2019 - Lug 2019',
        description: 'Progetto CyberSecurity BOT per automazione sicurezza. Fondamenti di sicurezza informatica, sviluppo di bot di automazione.'
    },
    {
        title: 'Operaio',
        organization: 'Varie aziende',
        period: '2023 - 2024',
        description: 'Lavoro stagionale part-time durante gli studi: gestione del tempo, adattabilità, impegno.'
    }
];

const education = [
    {
        degree: 'Laurea Magistrale in Computer Science & Artificial Intelligence',
        institution: 'Sapienza Università di Roma',
        period: 'In corso',
        description: 'Percorso magistrale focalizzato su intelligenza artificiale, machine learning e cybersecurity.'
    },
    {
        degree: 'Laurea Triennale in Ingegneria Informatica',
        institution: 'Sapienza Università di Roma',
        period: '2023 - 2024',
        description: 'Tesi: "Sistema APHRODITE: progettazione e sviluppo di un\'interfaccia software per il controllo e il monitoraggio di biosensori per applicazioni aerospaziali". Tecnologie utilizzate: Java, GUI development.'
    },
    {
        degree: 'Ingegneria Informatica',
        institution: 'Politecnico di Milano',
        period: '2018 - 2022',
        description: 'Percorso di studi in ingegneria informatica (non completato, trasferito a Sapienza).'
    },
    {
        degree: 'Digital Engineering Program',
        institution: 'ELIS COLLEGE',
        period: '2018 - 2020',
        description: 'Programma di formazione specialistica in ingegneria digitale.'
    },
    {
        degree: 'Diploma di Liceo Classico',
        institution: 'Liceo Classico Chris Cappell College',
        period: '2012 - 2018',
        description: 'Diploma di maturità classica con solida formazione umanistica.'
    }
];

// ===================================
// DOM Content Loaded
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sections
    renderSkills();
    renderProjects();
    renderExperiences();
    renderEducation();
    initializeScrollAnimations();
    initializeNavbar();
    initializeProjectFilters();
});

// ===================================
// Render Functions
// ===================================

function renderSkills() {
    const container = document.getElementById('skills-container');
    
    skills.forEach((skill, index) => {
        const skillCard = `
            <div class="col-lg-4 col-md-6 fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fas ${skill.icon}"></i>
                    </div>
                    <h3>${skill.title}</h3>
                    <p>${skill.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += skillCard;
    });
}

function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    filteredProjects.forEach((project, index) => {
        const projectCard = `
            <div class="col-lg-6 fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="project-card" data-category="${project.category}" data-project-id="${project.id}">
                    <div class="project-card-body">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <div class="mt-3">
                            <a href="project-detail.html?id=${project.id}" class="btn btn-sm btn-primary">
                                <i class="fas fa-arrow-right me-2"></i>Scopri di più
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projectCard;
    });
    
    // Re-initialize scroll animations for new elements
    initializeScrollAnimations();
}

function renderExperiences() {
    const container = document.getElementById('experience-timeline');
    
    experiences.forEach((exp, index) => {
        const timelineItem = `
            <div class="timeline-item fade-in" style="animation-delay: ${index * 0.1}s">
                <h3>${exp.title}</h3>
                <span class="timeline-date">${exp.organization} | ${exp.period}</span>
                <p>${exp.description}</p>
            </div>
        `;
        container.innerHTML += timelineItem;
    });
}

function renderEducation() {
    const container = document.getElementById('education-timeline');
    
    education.forEach((edu, index) => {
        const timelineItem = `
            <div class="timeline-item fade-in" style="animation-delay: ${index * 0.1}s">
                <h3>${edu.degree}</h3>
                <span class="timeline-date">${edu.institution} | ${edu.period}</span>
                <p>${edu.description}</p>
            </div>
        `;
        container.innerHTML += timelineItem;
    });
}

// ===================================
// Interactive Features
// ===================================

function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value and render projects
            const filter = this.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

function initializeNavbar() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(44, 62, 80, 1)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
    
    // Highlight active section in navbar
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Additional Utility Functions
// ===================================

// Add scroll-to-top button functionality
window.addEventListener('scroll', function() {
    const scrollTop = document.getElementById('scroll-top');
    if (scrollTop) {
        if (window.scrollY > 300) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Console welcome message
console.log('%c👋 Ciao! Benvenuto nel mio portfolio', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%cSe sei interessato al codice sorgente, visita il mio GitHub!', 'color: #2c3e50; font-size: 14px;');

// Export projects data for detail page
if (typeof window !== 'undefined') {
    window.projectsData = projects;
}
