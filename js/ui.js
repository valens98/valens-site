/**
 * ui.js — Tutte le interazioni UI:
 *   cursor, typing effect, radar, skills,
 *   projects filter, resources tabs/search,
 *   counter animations, scroll reveal, mobile nav.
 */

/* ── CUSTOM CURSOR ────────────────────────────────── */
(function () {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let cx = 0, cy = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });

  (function animCursor() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    dot.style.left  = cx + 'px';
    dot.style.top   = cy + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  })();

  const interactable = 'a, button, input, textarea, .filter-btn, .tab-btn, .suggestion-chip, .resource-card';
  document.querySelectorAll(interactable).forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform   = 'translate(-50%,-50%) scale(2)';
      ring.style.width      = '60px';
      ring.style.height     = '60px';
      ring.style.borderColor = 'rgba(0,212,255,0.5)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform   = 'translate(-50%,-50%) scale(1)';
      ring.style.width      = '36px';
      ring.style.height     = '36px';
      ring.style.borderColor = 'rgba(0,255,136,0.4)';
    });
  });
})();

/* ── MOBILE NAV ───────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── TYPING EFFECT ────────────────────────────────── */
(function () {
  const el = document.getElementById('typing-text');
  if (!el) return;

  // Usa DATA.typingPhrases se disponibile, altrimenti fallback inline
  const phrases = (window.DATA && DATA.typingPhrases) ? DATA.typingPhrases : [
    'Cybersecurity Engineer',
    'AI Researcher',
    'Cryptography Enthusiast',
    'Machine Learning Developer',
    'CTF Player',
    'Space Software Engineer',
  ];

  let pi = 0, ci = 0, deleting = false;

  function loop() {
    const phrase = phrases[pi];
    el.textContent = deleting ? phrase.slice(0, ci - 1) : phrase.slice(0, ci + 1);
    deleting ? ci-- : ci++;

    if (!deleting && ci === phrase.length) {
      deleting = true;
      setTimeout(loop, 1800);
    } else if (deleting && ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(loop, 300);
    } else {
      setTimeout(loop, deleting ? 35 : 60);
    }
  }
  loop();
})();

/* ── SKILLS BARS ──────────────────────────────────── */
(function () {
  const listEl = document.getElementById('skills-bars');
  const tagsEl = document.getElementById('skills-tags');
  if (!listEl || !tagsEl || !window.DATA) return;

  DATA.skills.bars.forEach(s => {
    const item = document.createElement('div');
    item.className = 'skill-item';
    item.setAttribute('role', 'listitem');
    item.innerHTML = `
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.pct}%</span>
      </div>
      <div class="skill-bar-bg" role="progressbar" aria-valuenow="${s.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.name}">
        <div class="skill-bar-fill" data-pct="${s.pct}"></div>
      </div>`;
    listEl.appendChild(item);
  });

  DATA.skills.tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'skill-tag';
    span.textContent = t;
    tagsEl.appendChild(span);
  });
})();

/* ── RADAR CHART ──────────────────────────────────── */
(function () {
  const rc = document.getElementById('radar-canvas');
  if (!rc || !window.DATA) return;
  const rctx = rc.getContext('2d');
  const { labels, data } = DATA.skills.radar;
  const n = labels.length;

  function draw() {
    const W = rc.width, H = rc.height;
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.38;
    rctx.clearRect(0, 0, W, H);

    // Grid rings
    [0.25, 0.5, 0.75, 1].forEach(t => {
      rctx.beginPath();
      labels.forEach((_, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * R * t;
        const y = cy + Math.sin(a) * R * t;
        i === 0 ? rctx.moveTo(x, y) : rctx.lineTo(x, y);
      });
      rctx.closePath();
      rctx.strokeStyle = 'rgba(0,255,136,0.1)';
      rctx.lineWidth = 1; rctx.stroke();
    });

    // Axes
    labels.forEach((_, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      rctx.beginPath();
      rctx.moveTo(cx, cy);
      rctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      rctx.strokeStyle = 'rgba(0,255,136,0.15)';
      rctx.stroke();
    });

    // Data polygon
    rctx.beginPath();
    data.forEach((v, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      const r = R * (v / 100);
      i === 0 ? rctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
              : rctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    });
    rctx.closePath();
    rctx.fillStyle = 'rgba(0,255,136,0.1)'; rctx.fill();
    rctx.strokeStyle = '#00ff88'; rctx.lineWidth = 2;
    rctx.shadowColor = '#00ff88'; rctx.shadowBlur = 10;
    rctx.stroke(); rctx.shadowBlur = 0;

    // Data points
    data.forEach((v, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      const r = R * (v / 100);
      rctx.beginPath();
      rctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 4, 0, Math.PI * 2);
      rctx.fillStyle = '#00ff88';
      rctx.shadowColor = '#00ff88'; rctx.shadowBlur = 12;
      rctx.fill(); rctx.shadowBlur = 0;
    });

    // Labels
    rctx.font = '12px "Share Tech Mono"';
    rctx.fillStyle = 'rgba(200,214,229,0.8)';
    rctx.textAlign = 'center'; rctx.textBaseline = 'middle';
    labels.forEach((lbl, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      rctx.fillText(lbl, cx + Math.cos(a) * (R + 30), cy + Math.sin(a) * (R + 28));
    });
  }

  draw();
  window.addEventListener('resize', draw);
})();

/* ── PROJECTS ─────────────────────────────────────── */
(function () {
  const grid = document.getElementById('projects-grid');
  if (!grid || !window.DATA) return;

  DATA.projects.forEach(p => {
    const li = document.createElement('li');
    li.className = 'project-card';
    li.dataset.cat = p.cat;
    li.setAttribute('role', 'listitem');
    li.innerHTML = `
      <div class="project-card-top">
        <span class="project-icon" aria-hidden="true">${p.icon}</span>
        <span class="project-cat ${p.cat}">${p.catLabel}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <ul class="project-tech" aria-label="Tecnologie usate">
        ${p.tech.map(t => `<li class="tech-chip">${t}</li>`).join('')}
      </ul>
      <div class="project-links">
        ${p.links.map(l => `<a href="${l.href}" class="project-link" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>`;
    grid.appendChild(li);
  });

  // Filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const f = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.cat !== f);
      });
    });
  });
})();

/* ── RESOURCES ────────────────────────────────────── */
(function () {
  const grid = document.getElementById('resources-grid');
  const searchInput = document.getElementById('resource-search');
  if (!grid || !searchInput || !window.DATA) return;

  let activeTab = 'all';

  function render() {
    const query = searchInput.value.toLowerCase().trim();
    grid.innerHTML = '';

    const filtered = DATA.resources.filter(r => {
      const matchTab    = activeTab === 'all' || r.type === activeTab;
      const matchSearch = !query || r.title.toLowerCase().includes(query) || r.tags.includes(query);
      return matchTab && matchSearch;
    });

    if (!filtered.length) {
      grid.innerHTML = '<p style="font-family:var(--ff-mono);color:var(--text-dim);font-size:.8rem;grid-column:1/-1;">Nessun risultato trovato.</p>';
      return;
    }

    filtered.forEach(r => {
      const a = document.createElement('a');
      a.className = 'resource-card';
      a.href = r.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('role', 'listitem');
      a.innerHTML = `
        <div class="resource-top">
          <span class="resource-icon" aria-hidden="true">${r.icon}</span>
          <span class="resource-type">${r.typelabel}</span>
        </div>
        <div class="resource-title">${r.title}</div>
        <div class="resource-meta">${r.meta}</div>`;
      grid.appendChild(a);
    });
  }

  render();

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeTab = btn.dataset.tab;
      render();
    });
  });

  searchInput.addEventListener('input', render);
})();

/* ── SCROLL REVEAL + COUNTERS + SKILL BARS ─────────── */
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');

      // Animate skill bars
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });

      // Animate stat counters
      entry.target.querySelectorAll('.stat-num[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        let count = 0;
        const interval = setInterval(() => {
          count++;
          el.textContent = count;
          if (count >= target) clearInterval(interval);
        }, 80);
      });
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

