/**
 * Bloom Studio - Main Application Logic & UI Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  renderMassageCatalog();
  renderPricingCards();
  renderInstructors();
  renderFAQs();
  renderTestimonials();
  renderFirstVisitInfo();
  initContactForm();
  initModals();
  initScrollAnimations();
});

/* Sticky Glassmorphism Navbar */
function initNavbar() {
  const navbar = document.getElementById("main-navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* Mobile Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menuDrawer = document.getElementById("mobile-menu-drawer");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (!toggleBtn || !menuDrawer) return;

  const openMenu = () => {
    menuDrawer.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menuDrawer.classList.remove("open");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  menuDrawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

/* Render Official Massage Treatments & Packages (Eva) */
function renderMassageCatalog() {
  const containerInd = document.getElementById("massage-individual-grid");
  const containerPackages = document.getElementById("massage-packages-grid");

  if (!window.BLOOM_CONFIG || !window.BLOOM_CONFIG.massageCatalog) return;

  const catalog = window.BLOOM_CONFIG.massageCatalog;

  // Individual Treatments
  if (containerInd) {
    containerInd.innerHTML = catalog.individualServices.map(item => `
      <div class="massage-treatment-card">
        <div class="massage-card-header">
          <h4>${item.name}</h4>
          <span class="massage-price-tag">${item.price}</span>
        </div>
        <div class="massage-card-meta">
          <span class="massage-duration">⏱ ${item.duration}</span>
          <span class="massage-therapist">Colega noastră: Eva (${catalog.phone})</span>
        </div>
        <p class="massage-card-desc">${item.desc}</p>
        <button class="btn btn-outline btn-sm" data-book-massage="${item.name}">
          Programează la Eva
        </button>
      </div>
    `).join('');
  }

  // Promotional Packages
  if (containerPackages) {
    containerPackages.innerHTML = catalog.promoPackages.map(pkg => `
      <div class="massage-package-card">
        <div class="package-badge">${pkg.saving}</div>
        <h4 class="package-title">${pkg.name}</h4>
        <div class="package-price">${pkg.price}</div>
        <p class="package-desc">${pkg.desc}</p>
        <button class="btn btn-terracotta" data-book-massage="${pkg.name}">
          Programează Pachetul
        </button>
      </div>
    `).join('');
  }
}

/* Dynamic Pricing Cards Rendering */
function renderPricingCards() {
  const container = document.getElementById("pricing-cards-container");
  if (!container || !window.BLOOM_CONFIG) return;

  const plans = window.BLOOM_CONFIG.pricing;

  container.innerHTML = plans.map(plan => `
    <div class="pricing-card ${plan.featured ? 'featured' : ''}">
      ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
      <div class="pricing-header">
        <h3 class="pricing-title">${plan.name}</h3>
        <p class="pricing-subtitle">${plan.subtitle}</p>
        <div class="pricing-price-wrap">
          <span class="pricing-price">${plan.price}</span>
          <span class="pricing-period">/ ${plan.period}</span>
        </div>
      </div>
      <ul class="pricing-features">
        ${plan.features.map(f => `
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
      <div class="pricing-footer">
        <button class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'}" data-book-plan="${plan.id}">
          ${plan.buttonText}
        </button>
      </div>
    </div>
  `).join('');
}

/* Dynamic Instructors Rendering */
function renderInstructors() {
  const container = document.getElementById("instructors-grid");
  if (!container || !window.BLOOM_CONFIG) return;

  const instructors = window.BLOOM_CONFIG.instructors;

  container.innerHTML = instructors.map(inst => `
    <div class="instructor-card">
      <div class="instructor-img-wrap">
        <img src="${inst.image}" alt="${inst.name} - ${inst.role}" loading="lazy" />
        <span class="instructor-social">${inst.social}</span>
      </div>
      <div class="instructor-info">
        <span class="instructor-cert">${inst.certification}</span>
        <h3 class="instructor-name">${inst.name}</h3>
        <p class="instructor-role">${inst.role}</p>
        <p class="instructor-bio">${inst.bio}</p>
        <div style="margin-top: 1rem;">
          <a href="https://wa.me/40744229230" target="_blank" class="btn btn-outline" style="font-size: 0.8125rem; padding: 0.5rem 1rem;">
            WhatsApp: ${inst.phoneDirect}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* FAQ Accordion */
function renderFAQs() {
  const container = document.getElementById("faq-accordion");
  if (!container || !window.BLOOM_CONFIG) return;

  const faqs = window.BLOOM_CONFIG.faqs;

  container.innerHTML = faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${faq.question}</span>
        <span class="faq-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains("open");

      container.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* Testimonial Cards */
function renderTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container || !window.BLOOM_CONFIG) return;

  const testimonials = window.BLOOM_CONFIG.testimonials;

  container.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-rating">
        <span class="stars">★★★★★</span>
        <span class="verified-badge">[Client Verificat Mărăști]</span>
      </div>
      <div class="testimonial-highlight">"${t.highlight}"</div>
      <p class="testimonial-quote">${t.quote}</p>
      <div class="testimonial-author">
        <strong>${t.clientName}</strong>
        <span>${t.membership}</span>
      </div>
    </div>
  `).join('');
}

/* First Visit Info Cards */
function renderFirstVisitInfo() {
  const container = document.getElementById("first-visit-grid");
  if (!container || !window.BLOOM_CONFIG) return;

  const infoList = window.BLOOM_CONFIG.firstVisitInfo;

  container.innerHTML = infoList.map((info, idx) => `
    <div class="info-card">
      <div class="info-num">0${idx + 1}</div>
      <h4>${info.title}</h4>
      <p>${info.text}</p>
    </div>
  `).join('');
}

/* Contact Form Validation */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();
    const responseBox = document.getElementById("contact-form-response");

    if (!name || !email || !message) {
      if (responseBox) {
        responseBox.className = "form-response error";
        responseBox.textContent = "Vă rugăm să completați toate câmpurile obligatorii.";
      }
      return;
    }

    if (responseBox) {
      responseBox.className = "form-response success";
      responseBox.textContent = "Mesajul dumneavoastră a fost trimis! Eva / echipa Bloom vă va contacta în curând.";
    }

    form.reset();
  });
}

/* Modals */
function initModals() {
  const privacyTrigger = document.querySelectorAll("[data-open-privacy]");
  const termsTrigger = document.querySelectorAll("[data-open-terms]");
  const privacyModal = document.getElementById("privacy-modal");
  const termsModal = document.getElementById("terms-modal");

  privacyTrigger.forEach(el => el.addEventListener("click", (e) => {
    e.preventDefault();
    if (privacyModal) privacyModal.classList.add("open");
  }));

  termsTrigger.forEach(el => el.addEventListener("click", (e) => {
    e.preventDefault();
    if (termsModal) termsModal.classList.add("open");
  }));

  document.querySelectorAll(".modal-close-btn, .modal-backdrop").forEach(el => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".modal").forEach(m => m.classList.remove("open"));
      document.body.style.overflow = "";
    });
  });
}

/* IntersectionObserver Scroll Micro-animations */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));
}
