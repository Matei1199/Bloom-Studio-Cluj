/**
 * Bloom Studio - Main Application Logic & UI Interactions
 * Gallery Overhaul & Hero Heart Centering
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  renderPricingTabs();
  renderPriceLockBanner();
  renderMassageCatalog();
  renderInstructors();
  renderGallery();
  renderFAQs();
  renderTestimonials();
  renderFirstVisitInfo();
  initContactForm();
  initNewsletterForm();
  initGalleryLightbox();
  initModals();
  initGlobalButtonListeners();
  initScrollAnimations();
});

/* Sticky Glassmorphism Navbar */
function initNavbar() {
  const navbar = document.getElementById("main-navbar");
  if (!navbar) return;
  const handleScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
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

  const openMenu = () => { menuDrawer.classList.add("open"); document.body.style.overflow = "hidden"; };
  const closeMenu = () => { menuDrawer.classList.remove("open"); document.body.style.overflow = ""; };

  toggleBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  menuDrawer.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
}

/* Owner-Verified Pricing with Category Tabs */
function renderPricingTabs() {
  const container = document.getElementById("pricing-dynamic-container");
  if (!container || !window.BLOOM_CONFIG || !window.BLOOM_CONFIG.pricing) return;

  const p = window.BLOOM_CONFIG.pricing;
  const categories = [
    { id: "mat", label: "Pilates Mat", items: [{ data: p.matGrup, sub: "Grup" }, { data: p.matIndividual, sub: "Individual" }] },
    { id: "reformer", label: "Pilates Reformer", items: [{ data: p.reformerGrup, sub: "Grup (max 3)" }, { data: p.reformerDuo, sub: "Duo" }, { data: p.reformerIndividual, sub: "Individual" }] }
  ];

  const tabsHtml = categories.map((cat, idx) => 
    `<button class="pricing-tab ${idx === 0 ? 'active' : ''}" data-pricing-tab="${cat.id}">${cat.label}</button>`
  ).join('');

  const panelsHtml = categories.map((cat, idx) => {
    const subsections = cat.items.map(sub => {
      const cardsHtml = sub.data.sessions.map((s, si) => `
        <div class="pricing-table-card ${si === 2 ? 'highlighted' : ''}">
          <div class="sessions">${s.count}</div>
          <div class="price">${s.price.replace(' lei', '')}</div>
          <div class="price-unit">lei</div>
          <button class="btn btn-secondary btn-sm" data-book-plan="${cat.id}-${sub.sub}" style="margin-top: auto;">Alege</button>
        </div>
      `).join('');

      return `
        <div class="pricing-category-label">${sub.data.label}${sub.data.subtitle ? ' — ' + sub.data.subtitle : ''}</div>
        <div class="pricing-table">${cardsHtml}</div>
      `;
    }).join('<div style="margin-top: 2.5rem;"></div>');

    return `<div class="pricing-category ${idx === 0 ? 'active' : ''}" id="pricing-cat-${cat.id}">${subsections}</div>`;
  }).join('');

  container.innerHTML = `<div class="pricing-tabs">${tabsHtml}</div>${panelsHtml}`;

  container.querySelectorAll(".pricing-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      container.querySelectorAll(".pricing-tab").forEach(t => t.classList.remove("active"));
      container.querySelectorAll(".pricing-category").forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-pricing-tab");
      const targetPanel = document.getElementById(`pricing-cat-${targetId}`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

/* Render 6-Month Price Retention Banner */
function renderPriceLockBanner() {
  const container = document.getElementById("price-lock-container");
  if (!container || !window.BLOOM_CONFIG || !window.BLOOM_CONFIG.priceLockRule) return;
  const rule = window.BLOOM_CONFIG.priceLockRule;
  if (!rule.enabled) return;
  container.innerHTML = `
    <div class="price-lock-banner">
      <div class="price-lock-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <div class="price-lock-text">
        <strong>${rule.title}</strong>
        <p>${rule.description}</p>
      </div>
    </div>
  `;
}

/* Render Official Massage Treatments & Packages */
function renderMassageCatalog() {
  const containerInd = document.getElementById("massage-individual-grid");
  const containerPackages = document.getElementById("massage-packages-grid");
  if (!window.BLOOM_CONFIG || !window.BLOOM_CONFIG.massageCatalog) return;
  const catalog = window.BLOOM_CONFIG.massageCatalog;

  if (containerInd) {
    containerInd.innerHTML = catalog.individualServices.map(item => `
      <div class="massage-treatment-card">
        <div class="massage-card-header">
          <h4>${item.name}</h4>
          <span class="massage-price-tag">${item.price}</span>
        </div>
        <div class="massage-card-meta"><span>⏱ ${item.duration}</span></div>
        <p class="massage-card-desc">${item.desc}</p>
        <button class="btn btn-secondary btn-sm" data-discover-massage="${item.name}">Descoperă serviciul</button>
      </div>
    `).join('');
  }

  if (containerPackages) {
    containerPackages.innerHTML = catalog.promoPackages.map(pkg => `
      <div class="massage-package-card">
        <div class="package-badge">${pkg.saving}</div>
        <h4 class="package-title">${pkg.name}</h4>
        <div class="package-price">${pkg.price}</div>
        <p class="package-desc">${pkg.desc}</p>
        <button class="btn btn-terracotta btn-sm" data-book-massage="${pkg.name}">Rezervă Pachetul</button>
      </div>
    `).join('');
  }
}

/* Render Dynamic Studio Gallery (16 Photos) */
let currentLightboxIndex = 0;
let activeGalleryItems = [];

function renderGallery() {
  const container = document.getElementById("gallery-dynamic-container");
  if (!container || !window.BLOOM_CONFIG || !window.BLOOM_CONFIG.gallery) return;

  const items = window.BLOOM_CONFIG.gallery;
  activeGalleryItems = items;

  const gridCardsHtml = items.map((item, index) => `
    <div class="gallery-card-item" data-lightbox-index="${index}">
      <img src="${item.src}" alt="Bloom Studio Cluj" loading="lazy" />
      <div class="gallery-card-overlay">
        <span class="gallery-zoom-icon">🔍</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `<div class="gallery-grid-dynamic">${gridCardsHtml}</div>`;

  container.querySelectorAll(".gallery-card-item").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-lightbox-index"), 10);
      openLightbox(idx);
    });
  });
}

function openLightbox(index) {
  if (!activeGalleryItems || !activeGalleryItems.length) return;
  currentLightboxIndex = (index + activeGalleryItems.length) % activeGalleryItems.length;
  const item = activeGalleryItems[currentLightboxIndex];
  
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("gallery-lightbox-img");
  const captionEl = document.getElementById("gallery-lightbox-caption");

  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = item.src;
  lightboxImg.alt = "Bloom Studio Cluj";
  if (captionEl) {
    captionEl.textContent = `${currentLightboxIndex + 1} din ${activeGalleryItems.length}`;
  }

  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function initGalleryLightbox() {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;

  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const closeBtn = document.getElementById("lightbox-close");

  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); openLightbox(currentLightboxIndex - 1); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); openLightbox(currentLightboxIndex + 1); });

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(currentLightboxIndex - 1);
    if (e.key === "ArrowRight") openLightbox(currentLightboxIndex + 1);
  });
}

/* Global Button Interactivity Handler */
function initGlobalButtonListeners() {
  document.addEventListener("click", (e) => {
    const discoverBtn = e.target.closest("[data-discover-massage]");
    if (discoverBtn) {
      const bookingSection = document.getElementById("booking-section");
      if (bookingSection) bookingSection.scrollIntoView({ behavior: "smooth" });
    }

    const massagePkgBtn = e.target.closest("[data-book-massage]");
    if (massagePkgBtn) {
      const packageName = massagePkgBtn.getAttribute("data-book-massage");
      const encodedMsg = encodeURIComponent(`Bună Eva! Doresc să mă programez la: ${packageName} la Bloom Studio.`);
      window.open(`https://wa.me/40744229230?text=${encodedMsg}`, "_blank");
    }

    const planBtn = e.target.closest("[data-book-plan]");
    if (planBtn) {
      const bookingWidget = document.getElementById("booking-section");
      if (bookingWidget) bookingWidget.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* Dynamic Instructors Rendering */
function renderInstructors() {
  const container = document.getElementById("instructors-grid");
  if (!container || !window.BLOOM_CONFIG) return;
  container.innerHTML = window.BLOOM_CONFIG.instructors.map(inst => `
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
        <div style="margin-top: 1.25rem;">
          <a href="tel:${inst.phoneDirect.replace(/\s+/g, '')}" class="btn btn-secondary btn-sm">Contact: ${inst.phoneDirect}</a>
        </div>
      </div>
    </div>
  `).join('');
}

/* FAQ Accordion */
function renderFAQs() {
  const container = document.getElementById("faq-accordion");
  if (!container || !window.BLOOM_CONFIG) return;
  container.innerHTML = window.BLOOM_CONFIG.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${faq.question}</span>
        <span class="faq-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></span>
      </button>
      <div class="faq-answer"><p>${faq.answer}</p></div>
    </div>
  `).join('');

  container.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains("open");
      container.querySelectorAll(".faq-item").forEach(i => { i.classList.remove("open"); i.querySelector(".faq-question").setAttribute("aria-expanded", "false"); });
      if (!isOpen) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    });
  });
}

/* Testimonial Cards */
function renderTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container || !window.BLOOM_CONFIG) return;
  container.innerHTML = window.BLOOM_CONFIG.testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-rating"><span class="stars">★★★★★</span><span class="verified-badge">Client Bloom Studio</span></div>
      <div class="testimonial-highlight">"${t.highlight}"</div>
      <p class="testimonial-quote">${t.quote}</p>
      <div class="testimonial-author"><strong>${t.clientName}</strong><span>${t.membership}</span></div>
    </div>
  `).join('');
}

/* First Visit Info Cards */
function renderFirstVisitInfo() {
  const container = document.getElementById("first-visit-grid");
  if (!container || !window.BLOOM_CONFIG) return;
  container.innerHTML = window.BLOOM_CONFIG.firstVisitInfo.map((info, idx) => `
    <div class="info-card"><div class="info-num">0${idx + 1}</div><h4>${info.title}</h4><p>${info.text}</p></div>
  `).join('');
}

/* Contact Form Handler */
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
      if (responseBox) { responseBox.className = "form-response error"; responseBox.textContent = "Vă rugăm să completați toate câmpurile obligatorii."; }
      return;
    }
    const whatsappMsg = encodeURIComponent(`Mesaj de pe site de la ${name} (${email}): ${message}`);
    const whatsappUrl = `https://wa.me/40724486216?text=${whatsappMsg}`;
    if (responseBox) {
      responseBox.className = "form-response success";
      responseBox.innerHTML = `Vă mulțumim, ${name}! Puteți trimite mesajul direct pe WhatsApp:<br /><a href="${whatsappUrl}" target="_blank" class="btn btn-primary btn-sm" style="margin-top: 0.5rem; display: inline-flex;">Deschide WhatsApp (0724 486 216)</a>`;
    }
    form.reset();
  });
}

/* Newsletter Form Handler */
function initNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector("[name='newsletter-email']");
    const responseBox = document.getElementById("newsletter-response");
    if (!emailInput || !emailInput.value.includes("@")) {
      if (responseBox) { responseBox.className = "form-response error"; responseBox.textContent = "Vă rugăm să introduceți o adresă de email validă."; }
      return;
    }
    const event = new CustomEvent("bloomNewsletterSubscribed", { detail: { email: emailInput.value.trim() } });
    window.dispatchEvent(event);
    console.log("Newsletter subscription:", emailInput.value.trim());
    if (responseBox) { responseBox.className = "form-response success"; responseBox.textContent = "Mulțumim! Te-ai abonat cu succes la newsletter-ul Bloom Studio."; }
    form.reset();
  });
}

/* Modals */
function initModals() {
  document.querySelectorAll("[data-open-privacy]").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); const m = document.getElementById("privacy-modal"); if (m) m.classList.add("open"); }));
  document.querySelectorAll("[data-open-terms]").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); const m = document.getElementById("terms-modal"); if (m) m.classList.add("open"); }));
  document.querySelectorAll(".modal-close-btn, .modal-backdrop").forEach(el => {
    el.addEventListener("click", () => { document.querySelectorAll(".modal").forEach(m => m.classList.remove("open")); document.body.style.overflow = ""; });
  });
}

/* IntersectionObserver Scroll Animations */
function initScrollAnimations() {
  const els = document.querySelectorAll(".reveal-on-scroll");
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}
