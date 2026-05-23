/* ============================================
   AZZAM KHALIFATULHAQ — PORTFOLIO JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Mark body as JS-loaded so CSS animations activate safely
  document.body.classList.add('js-loaded');

  /* ── DONUT CHART SKILL INTERACTION ── */
  const CIRCUMFERENCE = 2 * Math.PI * 80; // r=80 → ~502.65

  const donutRing = document.getElementById('donutRing');
  const donutPct = document.getElementById('donutPct');
  const donutLabel = document.getElementById('donutLabel');
  const donutDisplay = document.querySelector('.donut-display');

  function updateDonut(pct, label, color) {
    const filled = (pct / 100) * CIRCUMFERENCE;
    const gap = CIRCUMFERENCE - filled;
    donutRing.style.stroke = color;
    donutRing.setAttribute('stroke-dasharray', `${filled} ${gap}`);
    donutPct.textContent = pct + '%';
    donutLabel.textContent = label;
    if (donutDisplay) {
      donutDisplay.style.filter = `drop-shadow(0 0 40px ${color}55)`;
    }
  }

  const skCards = document.querySelectorAll('.sk-card');
  skCards.forEach(card => {
    card.addEventListener('click', () => {
      skCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      updateDonut(
        parseInt(card.dataset.pct),
        card.dataset.label,
        card.dataset.color
      );
    });
  });

  // Init donut on load
  const firstActive = document.querySelector('.sk-card.active');
  if (firstActive && donutRing) {
    setTimeout(() => {
      updateDonut(
        parseInt(firstActive.dataset.pct),
        firstActive.dataset.label,
        firstActive.dataset.color
      );
    }, 450);
  }

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ── Scroll fade-in observer ── */
  const fadeEls = document.querySelectorAll(
    '.about-grid, .section-header, .software-skills, ' +
    '.portfolio-layout, .logos-section, .freelance-grid, ' +
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

  /* ── Portfolio category filter ── */
  const catItems = document.querySelectorAll('.cat-item');
  const portCards = document.querySelectorAll('.port-card');
  let currentIdx = Array.from(catItems).findIndex(c => c.classList.contains('active'));

  const filterPortfolio = (category) => {
    portCards.forEach(card => {
      if (card.getAttribute('data-category') === category) {
        card.style.display = ''; // Show
      } else {
        card.style.display = 'none'; // Hide
      }
    });
  };

  catItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const category = item.getAttribute('data-category');
      catItems.forEach(c => c.classList.remove('active'));
      item.classList.add('active');
      currentIdx = index; // Update sync
      filterPortfolio(category);
    });
  });

  /* ── Prev / Next category arrows ── */
  const prevBtn = document.getElementById('prevCat');
  const nextBtn = document.getElementById('nextCat');

  if (prevBtn && nextBtn) {
    const setActive = (idx) => {
      catItems.forEach(c => c.classList.remove('active'));
      catItems[idx].classList.add('active');
      const category = catItems[idx].getAttribute('data-category');
      filterPortfolio(category);
    };

    prevBtn.addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + catItems.length) % catItems.length;
      setActive(currentIdx);
    });

    nextBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % catItems.length;
      setActive(currentIdx);
    });
  }

  /* ── Smooth hover tilt on portfolio cards ── */

  portCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(800px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
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

  /* ── Sticky Nav Toggle ── */
  const navLinksContainer = document.querySelector('.nav-links');
  const stickyThreshold = 80;

  window.addEventListener('scroll', () => {
    if (window.scrollY > stickyThreshold) {
      navLinksContainer.classList.add('stuck');
    } else {
      navLinksContainer.classList.remove('stuck');
    }
  }, { passive: true });

  /* ── Typing Animation ── */
  const typingText = document.getElementById('typing-text');
  const phrases = ['Portofolio', 'Designs', 'Creativity', 'Branding', 'Artwork'];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 150;

  const type = () => {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 100;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 200;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeSpeed = 500; // Pause before next
    }

    setTimeout(type, typeSpeed);
  };

  if (typingText) type();

});
