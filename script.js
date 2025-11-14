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
        description: 'Java, Python, JavaScript, LaTeX, SQL, Git, Docker'
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
        description: 'Bootstrap, Angular, JFreeChart, TikZ, Matplotlib, Pandas, NumPy'
    }
];

const projects = [
    {
        title: 'APHRODITE GUI System',
        description: 'Sviluppo di un\'interfaccia grafica Java per il controllo di biosensori lab-on-chip destinati alla Stazione Spaziale Internazionale. Sistema completo di gestione protocolli analitici, visualizzazione real-time e comunicazione USB.',
        tags: ['Java', 'GUI', 'Aerospace', 'ISS'],
        category: 'software'
    },
    {
        title: 'Cryptographic Performance Analysis',
        description: 'Benchmark completo di algoritmi crittografici (AES-128-CTR, ChaCha20, AES-GCM, ChaCha20-Poly1305) con Encrypt-then-MAC. Analisi statistica delle prestazioni, derivazione chiavi con HKDF, visualizzazione dati.',
        tags: ['Python', 'OpenSSL', 'Cryptography', 'Benchmarking'],
        category: 'cybersecurity'
    },
    {
        title: 'Substitution Cipher Cryptanalysis',
        description: 'Analisi crittografica di cifrari a sostituzione monoalfabetica tramite frequency analysis. Implementazione di algoritmi per il conteggio delle frequenze, analisi dei pattern e decifrazione automatica.',
        tags: ['Cryptanalysis', 'Python', 'Frequency Analysis'],
        category: 'cybersecurity'
    },
    {
        title: 'Machine Learning Lecture Notes',
        description: 'Conversione professionale di appunti manoscritti in documenti LaTeX con formule matematiche, diagrammi TikZ e grafici. Copertura completa di SVM, regressione lineare, statistical learning theory.',
        tags: ['LaTeX', 'TikZ', 'Machine Learning', 'Academic'],
        category: 'ml'
    },
    {
        title: 'Denuvo Anti-Piracy Research',
        description: 'Ricerca accademica sull\'analisi delle tecnologie anti-piracy Denuvo da una prospettiva di security research. Studio del sistema di hardware fingerprinting e virtual machine protection.',
        tags: ['Cybersecurity', 'Reverse Engineering', 'Research'],
        category: 'cybersecurity'
    },
    {
        title: 'AI Trading Systems Integration',
        description: 'Studio sull\'integrazione di Large Language Models in sistemi di trading automatico. Analisi dell\'architettura per combinare analisi tecnica, fondamentale e sentiment analysis tramite AI.',
        tags: ['AI', 'Trading', 'LLM', 'Finance'],
        category: 'ml'
    },
    {
        title: 'Professional CV & Portfolio',
        description: 'Creazione di CV professionali multipiattaforma in LaTeX e Canva con design personalizzati. Documentazione completa delle esperienze professionali e progetti di ricerca.',
        tags: ['LaTeX', 'Canva', 'Design', 'Web'],
        category: 'software'
    },
    {
        title: 'Network Configuration & Analysis',
        description: 'Configurazione avanzata di router con QoS, analisi delle prestazioni di rete, troubleshooting di connettività Gigabit Ethernet e ottimizzazione delle performance.',
        tags: ['Networking', 'QoS', 'Troubleshooting'],
        category: 'cybersecurity'
    }
];

const experiences = [
    {
        title: 'External Collaborator - School of Aerospace Engineering',
        organization: 'Sapienza University',
        period: 'Sistema APHRODITE',
        description: 'Sviluppo di software per il controllo di biosensori lab-on-chip destinati alla Stazione Spaziale Internazionale. Progettazione GUI, gestione protocolli analitici e integrazione hardware.'
    },
    {
        title: 'Cybersecurity Intern',
        organization: 'Cisco Systems',
        period: 'CyberSecurity BOT Project',
        description: 'Sviluppo di sistemi automatizzati per la sicurezza informatica, implementazione di bot per il monitoraggio e risposta agli incidenti di sicurezza.'
    },
    {
        title: 'Blockchain Analyst Intern',
        organization: 'Eni',
        period: 'Blockchain Technology Analysis',
        description: 'Analisi e valutazione delle tecnologie blockchain per applicazioni enterprise. Studio di smart contracts e sistemi distribuiti per il settore energetico.'
    },
    {
        title: 'Private Tutor',
        organization: 'Freelance',
        period: '2020 - 2024',
        description: 'Insegnamento privato di informatica, matematica e filosofia. Creazione di materiali didattici personalizzati su argomenti complessi.'
    }
];

const education = [
    {
        degree: 'Master\'s Degree in Cybersecurity',
        institution: 'Politecnico di Milano',
        period: 'In corso',
        description: 'Specializzazione in sicurezza informatica, crittografia avanzata, network security, analisi delle vulnerabilità e tecniche di anti-piracy.'
    },
    {
        degree: 'Bachelor\'s Degree in Computer Engineering',
        institution: 'Sapienza University of Rome',
        period: '2023',
        description: 'Tesi: "Sviluppo di un\'interfaccia software per il sistema APHRODITE destinato alla Stazione Spaziale Internazionale".'
    },
    {
        degree: 'Liceo Classico',
        institution: 'Chris Cappell College',
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
                <div class="project-card" data-category="${project.category}">
                    <div class="project-card-body">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
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