/* ============================================
   AZZAM KHALIFATULHAQ — PORTFOLIO JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Mark body as JS-loaded so CSS animations activate safely
  document.body.classList.add('js-loaded');

  /* ── Nav highlight & sticky nav handled in inline script ── */

  /* ── Scroll fade-in observer ── */
  const fadeEls = document.querySelectorAll(
    '.about-grid, .section-header, .software-skills, ' +
    '.logos-section, .freelance-grid, ' +
    '.contact-layout, .stats-row, .about-skills-grid'
  );

  fadeEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children
        entry.target.style.transitionDelay = `${i * 60}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));

  /* ── Portfolio: data-driven cards, filters, modal ── */
  const featuredEl = document.getElementById('featuredProject');
  const gridEl = document.getElementById('projectGrid');
  const emptyEl = document.getElementById('portfolioEmpty');
  const liveEl = document.getElementById('portfolioLive');
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const ACCENTS = {
    gold: '#C9A96E',
    'gold-deep': '#A8834A',
    terracotta: '#C4735A',
    navy: '#1C2B4A'
  };

  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));

  const GITHUB_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';

  const PREVIEWS = {
    dashboard: `
      <svg viewBox="0 0 400 250" role="img" aria-label="Dashboard interface schematic">
        <rect class="pv-bg" width="400" height="250"/>
        <rect class="pv-card" x="16" y="16" width="72" height="218" rx="12"/>
        <rect class="pv-gold" x="28" y="30" width="20" height="20" rx="6"/>
        <rect class="pv-line-fill" x="56" y="37" width="18" height="5" rx="2.5"/>
        <rect class="pv-line-fill" x="28" y="72" width="48" height="6" rx="3"/>
        <rect class="pv-line-fill" x="28" y="90" width="38" height="6" rx="3"/>
        <rect class="pv-line-fill" x="28" y="108" width="44" height="6" rx="3"/>
        <rect class="pv-line-fill" x="28" y="202" width="48" height="6" rx="3"/>
        <rect class="pv-surface" x="104" y="16" width="280" height="36" rx="10"/>
        <circle class="pv-gold" cx="122" cy="34" r="6"/>
        <rect class="pv-line-fill" x="136" y="31" width="76" height="6" rx="3"/>
        <rect class="pv-gold" x="328" y="26" width="40" height="16" rx="8" opacity="0.9"/>
        <rect class="pv-card" x="104" y="64" width="84" height="54" rx="9"/>
        <rect class="pv-line-fill" x="116" y="76" width="28" height="5" rx="2.5"/>
        <rect class="pv-line-fill" x="116" y="92" width="52" height="8" rx="4"/>
        <rect class="pv-gold" x="116" y="106" width="26" height="5" rx="2.5"/>
        <rect class="pv-card" x="198" y="64" width="84" height="54" rx="9"/>
        <rect class="pv-line-fill" x="210" y="76" width="34" height="5" rx="2.5"/>
        <rect class="pv-line-fill" x="210" y="92" width="46" height="8" rx="4"/>
        <rect class="pv-gold" x="210" y="106" width="30" height="5" rx="2.5"/>
        <rect class="pv-card" x="292" y="64" width="84" height="54" rx="9"/>
        <rect class="pv-line-fill" x="304" y="76" width="24" height="5" rx="2.5"/>
        <rect class="pv-line-fill" x="304" y="92" width="48" height="8" rx="4"/>
        <rect class="pv-gold" x="304" y="106" width="22" height="5" rx="2.5"/>
        <rect class="pv-card" x="104" y="130" width="178" height="104" rx="10"/>
        <polyline class="pv-connector" points="118,206 144,186 168,194 192,168 216,178 240,150 264,160"/>
        <circle class="pv-gold" cx="264" cy="160" r="3.5"/>
        <rect class="pv-card" x="292" y="130" width="84" height="104" rx="10"/>
        <rect class="pv-line-fill" x="304" y="144" width="52" height="6" rx="3"/>
        <rect class="pv-line-fill" x="304" y="160" width="40" height="6" rx="3"/>
        <rect class="pv-line-fill" x="304" y="176" width="56" height="6" rx="3"/>
        <rect class="pv-gold" x="304" y="196" width="48" height="16" rx="8"/>
      </svg>`,
    ai: `
      <svg viewBox="0 0 400 250" role="img" aria-label="Conversational interface schematic">
        <rect class="pv-bg" width="400" height="250"/>
        <rect class="pv-card" x="16" y="16" width="368" height="218" rx="16"/>
        <circle class="pv-gold" cx="42" cy="42" r="10"/>
        <rect class="pv-line-fill" x="60" y="34" width="70" height="6" rx="3"/>
        <rect class="pv-line-fill" x="60" y="46" width="44" height="5" rx="2.5"/>
        <rect class="pv-surface" x="32" y="70" width="190" height="44" rx="12"/>
        <rect class="pv-line-fill" x="46" y="84" width="120" height="5" rx="2.5"/>
        <rect class="pv-line-fill" x="46" y="96" width="90" height="5" rx="2.5"/>
        <rect class="pv-surface" x="32" y="128" width="140" height="42" rx="12"/>
        <rect class="pv-line-fill" x="46" y="142" width="90" height="5" rx="2.5"/>
        <rect class="pv-line-fill" x="46" y="154" width="60" height="5" rx="2.5"/>
        <rect class="pv-gold" x="196" y="126" width="172" height="48" rx="12" opacity="0.85"/>
        <rect fill="#FFFFFF" opacity="0.8" x="210" y="140" width="120" height="5" rx="2.5"/>
        <rect fill="#FFFFFF" opacity="0.8" x="210" y="152" width="90" height="5" rx="2.5"/>
        <rect class="pv-surface" x="32" y="186" width="336" height="34" rx="12"/>
        <rect class="pv-line-fill" x="46" y="200" width="150" height="6" rx="3"/>
        <circle class="pv-gold" cx="348" cy="203" r="10"/>
        <path class="pv-connector" d="M343 203 l4 4 8-9"/>
      </svg>`,
    architecture: `
      <svg viewBox="0 0 400 250" role="img" aria-label="System architecture diagram">
        <rect class="pv-bg" width="400" height="250"/>
        <polyline class="pv-connector" points="78,72 78,114 150,114"/>
        <polyline class="pv-connector" points="74,196 74,130 150,130"/>
        <polyline class="pv-connector" points="250,114 262,114 262,50 272,50"/>
        <line class="pv-connector" x1="250" y1="114" x2="272" y2="108"/>
        <polyline class="pv-connector" points="250,114 262,114 262,168 272,168"/>
        <rect class="pv-card" x="28" y="28" width="100" height="44" rx="9"/>
        <text class="pv-text-navy" x="78" y="54" text-anchor="middle">Dashboard</text>
        <rect class="pv-navy" x="150" y="88" width="100" height="52" rx="11"/>
        <text class="pv-text-light" x="200" y="118" text-anchor="middle">API</text>
        <rect class="pv-card" x="272" y="28" width="100" height="44" rx="9"/>
        <text class="pv-text-navy" x="322" y="54" text-anchor="middle">PostgreSQL</text>
        <rect class="pv-card" x="272" y="88" width="100" height="40" rx="9"/>
        <text class="pv-text-navy" x="322" y="112" text-anchor="middle">Redis</text>
        <rect class="pv-card" x="272" y="148" width="100" height="40" rx="9"/>
        <text class="pv-text-navy" x="322" y="172" text-anchor="middle">Storage</text>
        <rect class="pv-card" x="28" y="196" width="92" height="40" rx="9"/>
        <text class="pv-text-navy" x="74" y="220" text-anchor="middle">Client</text>
      </svg>`,
    workflow: `
      <svg viewBox="0 0 400 250" role="img" aria-label="Four-step workflow diagram">
        <rect class="pv-bg" width="400" height="250"/>
        <rect class="pv-card" x="16" y="70" width="86" height="110" rx="12"/>
        <circle class="pv-gold" cx="59" cy="98" r="13" opacity="0.9"/>
        <rect fill="#FFFFFF" opacity="0.85" x="38" y="130" width="42" height="5" rx="2.5"/>
        <rect fill="#FFFFFF" opacity="0.85" x="44" y="140" width="30" height="5" rx="2.5"/>
        <text class="pv-text-navy" x="59" y="168" text-anchor="middle">Card UID</text>
        <rect class="pv-card" x="110" y="70" width="86" height="110" rx="12"/>
        <circle class="pv-gold" cx="153" cy="98" r="13" opacity="0.9"/>
        <rect fill="#FFFFFF" opacity="0.85" x="132" y="130" width="42" height="5" rx="2.5"/>
        <rect fill="#FFFFFF" opacity="0.85" x="138" y="140" width="30" height="5" rx="2.5"/>
        <text class="pv-text-navy" x="153" y="168" text-anchor="middle">NIK Parse</text>
        <rect class="pv-card" x="204" y="70" width="86" height="110" rx="12"/>
        <circle class="pv-gold" cx="247" cy="98" r="13" opacity="0.9"/>
        <rect fill="#FFFFFF" opacity="0.85" x="226" y="130" width="42" height="5" rx="2.5"/>
        <rect fill="#FFFFFF" opacity="0.85" x="232" y="140" width="30" height="5" rx="2.5"/>
        <text class="pv-text-navy" x="247" y="168" text-anchor="middle">Local Map</text>
        <rect class="pv-card" x="298" y="70" width="86" height="110" rx="12"/>
        <circle class="pv-gold" cx="341" cy="98" r="13" opacity="0.9"/>
        <rect fill="#FFFFFF" opacity="0.85" x="320" y="130" width="42" height="5" rx="2.5"/>
        <rect fill="#FFFFFF" opacity="0.85" x="326" y="140" width="30" height="5" rx="2.5"/>
        <text class="pv-text-navy" x="341" y="168" text-anchor="middle">Profile</text>
        <polygon class="pv-gold" points="104,121 112,125 104,129"/>
        <polygon class="pv-gold" points="198,121 206,125 198,129"/>
        <polygon class="pv-gold" points="292,121 300,125 292,129"/>
        <line class="pv-connector" x1="94" y1="125" x2="106" y2="125"/>
        <line class="pv-connector" x1="188" y1="125" x2="200" y2="125"/>
        <line class="pv-connector" x1="282" y1="125" x2="294" y2="125"/>
      </svg>`
  };

  const previewMarkup = (project) => `
    <div class="project-preview" style="--preview-accent: ${ACCENTS[project.accent] || ACCENTS.gold}">
      ${PREVIEWS[project.preview] || PREVIEWS.dashboard}
      <span class="project-preview-note">${escapeHtml(project.previewNote || 'Interface schematic')}</span>
    </div>`;

  const techMarkup = (techStack = []) => `
    <ul class="project-tech">
      ${techStack.map((tech) => `<li>${escapeHtml(tech)}</li>`).join('')}
    </ul>`;

  const externalLinksMarkup = (project) => {
    const links = [];
    if (project.githubUrl) {
      links.push(`
        <a class="project-btn project-btn--ghost" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">
          ${GITHUB_ICON} GitHub
        </a>`);
    }
    if (project.demoUrl) {
      links.push(`
        <a class="project-btn project-btn--primary" href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer">
          Live Demo <span aria-hidden="true">↗</span>
        </a>`);
    }
    return links.join('');
  };

  const cardActionsMarkup = (project) => `
    <div class="project-actions">
      <button class="project-btn project-btn--primary" type="button" data-project-id="${escapeHtml(project.id)}" aria-haspopup="dialog" aria-controls="projectModal">
        View Details <span aria-hidden="true">→</span>
      </button>
      ${externalLinksMarkup(project)}
    </div>`;

  const cardMarkup = (project, index) => `
    <article class="project-card" style="--enter-i: ${index}">
      <div class="project-media">${previewMarkup(project)}</div>
      <div class="project-card-body">
        <div class="project-kicker">
          <span class="project-category">${escapeHtml(project.categoryLabel)}</span>
          ${project.status ? `<span class="project-status">${escapeHtml(project.status)}</span>` : ''}
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-card-description">${escapeHtml(project.description)}</p>
        ${techMarkup(project.techStack)}
        ${cardActionsMarkup(project)}
      </div>
    </article>`;

  const featuredMarkup = (project) => `
    <article class="featured-project" style="--enter-i: 0">
      <div class="featured-media">${previewMarkup(project)}</div>
      <div class="featured-content">
        <div class="project-kicker">
          <span class="project-featured-tag">Featured Project</span>
          <span class="project-category">${escapeHtml(project.categoryLabel)}</span>
          ${project.status ? `<span class="project-status">${escapeHtml(project.status)}</span>` : ''}
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="featured-subtitle">${escapeHtml(project.subtitle)}</p>
        <p class="featured-description">${escapeHtml(project.description)}</p>
        ${techMarkup(project.techStack)}
        ${cardActionsMarkup(project)}
      </div>
    </article>`;

  const modalMarkup = (project) => `
    <div class="project-modal-hero" style="--preview-accent: ${ACCENTS[project.accent] || ACCENTS.gold}">
      ${previewMarkup(project)}
    </div>
    <div class="project-modal-body">
      <p class="project-modal-eyebrow">${escapeHtml(project.categoryLabel)}${project.status ? ` · ${escapeHtml(project.status)}` : ''}</p>
      <h2 id="projectModalTitle">${escapeHtml(project.title)}</h2>
      <p class="project-modal-subtitle">${escapeHtml(project.subtitle)}</p>
      <p class="project-modal-lede">${escapeHtml(project.description)}</p>
      <div class="project-modal-links">${externalLinksMarkup(project)}</div>
      <div class="project-modal-two">
        <section class="project-modal-section">
          <h3>Problem</h3>
          <p>${escapeHtml(project.problem)}</p>
        </section>
        <section class="project-modal-section">
          <h3>Solution</h3>
          <p>${escapeHtml(project.solution)}</p>
        </section>
      </div>
      <section class="project-modal-section project-modal-section--features">
        <h3>Key Features</h3>
        <ul>${(project.features || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
      <section class="project-modal-section">
        <h3>Architecture</h3>
        <p>${escapeHtml(project.architecture)}</p>
        ${techMarkup(project.techStack)}
      </section>
      <section class="project-modal-section">
        <h3>Technical Challenges</h3>
        <ul>${(project.challenges || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </section>
      ${(project.screenshots || []).length ? `
        <section class="project-modal-section">
          <h3>Screenshots</h3>
          <div class="project-modal-shots">
            ${project.screenshots.map((shot) => `<img src="${escapeHtml(shot)}" alt="${escapeHtml(project.title)} screenshot" loading="lazy" />`).join('')}
          </div>
        </section>` : ''}
    </div>`;

  const render = (filter) => {
    if (!featuredEl || !gridEl) return;

    const showFeatured = filter === 'all' || filter === 'fullstack';
    const featured = showFeatured ? projects.find((project) => project.featured) : null;
    const list = projects.filter((project) => {
      if (project.featured && showFeatured) return false;
      return filter === 'all' ? true : project.category === filter;
    });

    featuredEl.innerHTML = featured ? featuredMarkup(featured) : '';
    featuredEl.hidden = !featured;
    gridEl.innerHTML = list.map(cardMarkup).join('');
    gridEl.classList.toggle('is-filtered', filter !== 'all' && filter !== 'fullstack');
    emptyEl.hidden = list.length > 0 || Boolean(featured);

    const total = list.length + (featured ? 1 : 0);
    liveEl.textContent = `${total} project${total === 1 ? '' : 's'} shown.`;
  };

  if (featuredEl && gridEl && projects.length) {
    filterBtns.forEach((btn) => {
      const filter = btn.dataset.filter;
      if (filter !== 'all') {
        btn.hidden = !projects.some((project) => project.category === filter);
      }

      btn.addEventListener('click', () => {
        filterBtns.forEach((other) => {
          const isActive = other === btn;
          other.classList.toggle('active', isActive);
          other.setAttribute('aria-pressed', String(isActive));
        });
        render(filter);
      });
    });

    render('all');
  }

  /* Modal */
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('projectModalContent');
  let lastFocused = null;

  const openModal = (projectId) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project || !modal || !modalContent) return;

    lastFocused = document.activeElement;
    modalContent.innerHTML = modalMarkup(project);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('portfolio-modal-open');
    window.lenis?.stop();

    modal.querySelector('.project-modal-dialog')?.focus();
  };

  const closeModal = () => {
    if (!modal || !modal.classList.contains('is-open')) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('portfolio-modal-open');
    window.lenis?.start();
    modalContent.innerHTML = '';

    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
    lastFocused = null;
  };

  document.addEventListener('click', (event) => {
    const detailsBtn = event.target.closest('[data-project-id]');
    if (detailsBtn) {
      openModal(detailsBtn.dataset.projectId);
      return;
    }
    if (event.target.closest('[data-close-modal]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!modal || !modal.classList.contains('is-open')) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key !== 'Tab') return;

    const dialog = modal.querySelector('.project-modal-dialog');
    const focusable = Array.from(
      modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ── Follow button toggle ── */
  const followBtn = document.querySelector('.btn-follow');
  if (followBtn) {
    followBtn.addEventListener('click', () => {
      if (followBtn.textContent === 'Follow') {
        followBtn.textContent = 'Following';
        followBtn.style.background = '#333';
        followBtn.style.border = '1px solid #555';
      } else {
        followBtn.textContent = 'Follow';
        followBtn.style.background = '';
        followBtn.style.border = '';
      }
    });
  }

  /* ── Subtle cursor glow effect ── */
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: opacity 0.3s ease;
    will-change: left, top;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });


});
