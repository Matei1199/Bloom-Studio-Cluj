/**
 * Bloom Studio - Interactive Lead Generation & Booking Engine
 * Manages multi-step trial class booking, pass inquiries, and API dispatcher hooks.
 */

class BloomBookingEngine {
  constructor() {
    this.currentStep = 1;
    this.bookingData = {
      service: "reformer",
      serviceTitle: "Pilates Reformer Cluj",
      preferredTime: "Morning (08:00 - 12:00)",
      instructor: "Any Available Certified Instructor",
      clientName: "",
      clientPhone: "",
      clientEmail: "",
      clientNotes: ""
    };

    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.bindDOMEvents();
      this.renderServiceOptions();
    });
  }

  bindDOMEvents() {
    // Step indicators & Next/Prev navigation
    const nextBtn = document.getElementById("booking-next-btn");
    const prevBtn = document.getElementById("booking-prev-btn");
    const submitBtn = document.getElementById("booking-submit-btn");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.nextStep());
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.prevStep());
    }
    if (submitBtn) {
      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleFormSubmission();
      });
    }

    // Direct Package Select from Pricing cards
    document.addEventListener("click", (e) => {
      const packageBtn = e.target.closest("[data-book-plan]");
      if (packageBtn) {
        const planId = packageBtn.getAttribute("data-book-plan");
        this.selectPlanFromPricing(planId);
      }

      const serviceBtn = e.target.closest("[data-book-service]");
      if (serviceBtn) {
        const serviceId = serviceBtn.getAttribute("data-book-service");
        this.selectServiceById(serviceId);
      }
    });
  }

  renderServiceOptions() {
    const container = document.getElementById("booking-services-grid");
    if (!container || !window.BLOOM_CONFIG) return;

    const services = window.BLOOM_CONFIG.services;
    container.innerHTML = services.map(s => `
      <div class="booking-service-card ${s.id === this.bookingData.service ? 'active' : ''}" data-service-id="${s.id}">
        <div class="service-card-header">
          <span class="service-tag">${s.tag}</span>
          <span class="service-duration">${s.duration}</span>
        </div>
        <h4>${s.title}</h4>
        <p>${s.shortDesc}</p>
      </div>
    `).join('');

    // Service selection handler
    container.querySelectorAll(".booking-service-card").forEach(card => {
      card.addEventListener("click", () => {
        container.querySelectorAll(".booking-service-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        const sId = card.getAttribute("data-service-id");
        const selected = window.BLOOM_CONFIG.services.find(item => item.id === sId);
        if (selected) {
          this.bookingData.service = selected.id;
          this.bookingData.serviceTitle = selected.title;
        }
      });
    });
  }

  selectPlanFromPricing(planId) {
    const plan = window.BLOOM_CONFIG.pricing.find(p => p.id === planId);
    if (plan) {
      this.bookingData.service = plan.id;
      this.bookingData.serviceTitle = `${plan.name} (${plan.price})`;
      this.currentStep = 1;
      this.updateStepUI();
      this.scrollToBookingWidget();
    }
  }

  selectServiceById(serviceId) {
    const service = window.BLOOM_CONFIG.services.find(s => s.id === serviceId);
    if (service) {
      this.bookingData.service = service.id;
      this.bookingData.serviceTitle = service.title;
      this.currentStep = 1;
      this.updateStepUI();
      this.scrollToBookingWidget();
    }
  }

  scrollToBookingWidget() {
    const widget = document.getElementById("booking-section");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  nextStep() {
    if (this.currentStep === 1) {
      // Validate Step 1 selection
      if (!this.bookingData.service) {
        this.showToast("Please select a service or pass option to continue.", "warning");
        return;
      }
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      // Collect Step 2 inputs
      const timeSelect = document.getElementById("booking-time-select");
      const instructorSelect = document.getElementById("booking-instructor-select");
      if (timeSelect) this.bookingData.preferredTime = timeSelect.value;
      if (instructorSelect) this.bookingData.instructor = instructorSelect.value;
      this.currentStep = 3;
    }
    this.updateStepUI();
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateStepUI();
    }
  }

  updateStepUI() {
    // Hide all step panels
    document.querySelectorAll(".booking-step-panel").forEach(panel => {
      panel.classList.remove("active");
    });

    // Show active step panel
    const activePanel = document.getElementById(`booking-step-${this.currentStep}`);
    if (activePanel) {
      activePanel.classList.add("active");
    }

    // Update step wizard indicators
    document.querySelectorAll(".step-indicator").forEach((ind, idx) => {
      const stepNum = idx + 1;
      if (stepNum === this.currentStep) {
        ind.className = "step-indicator active";
      } else if (stepNum < this.currentStep) {
        ind.className = "step-indicator completed";
      } else {
        ind.className = "step-indicator";
      }
    });

    // Update Button Visibility
    const prevBtn = document.getElementById("booking-prev-btn");
    const nextBtn = document.getElementById("booking-next-btn");
    const submitBtn = document.getElementById("booking-submit-btn");

    if (prevBtn) prevBtn.style.display = this.currentStep > 1 ? "inline-flex" : "none";
    if (nextBtn) nextBtn.style.display = this.currentStep < 3 ? "inline-flex" : "none";
    if (submitBtn) submitBtn.style.display = this.currentStep === 3 ? "inline-flex" : "none";
  }

  validateContactForm() {
    const nameInput = document.getElementById("booking-client-name");
    const phoneInput = document.getElementById("booking-client-phone");
    const emailInput = document.getElementById("booking-client-email");
    const notesInput = document.getElementById("booking-client-notes");

    let isValid = true;

    if (!nameInput || !nameInput.value.trim()) {
      this.setFieldError(nameInput, "Please enter your name");
      isValid = false;
    } else {
      this.clearFieldError(nameInput);
    }

    if (!phoneInput || !phoneInput.value.trim() || phoneInput.value.trim().length < 6) {
      this.setFieldError(phoneInput, "Please enter a valid phone number");
      isValid = false;
    } else {
      this.clearFieldError(phoneInput);
    }

    if (!emailInput || !emailInput.value.includes("@")) {
      this.setFieldError(emailInput, "Please enter a valid email address");
      isValid = false;
    } else {
      this.clearFieldError(emailInput);
    }

    if (isValid) {
      this.bookingData.clientName = nameInput.value.trim();
      this.bookingData.clientPhone = phoneInput.value.trim();
      this.bookingData.clientEmail = emailInput.value.trim();
      if (notesInput) this.bookingData.clientNotes = notesInput.value.trim();
    }

    return isValid;
  }

  setFieldError(inputEl, message) {
    if (!inputEl) return;
    inputEl.classList.add("input-error");
    let errSpan = inputEl.nextElementSibling;
    if (!errSpan || !errSpan.classList.contains("field-error-msg")) {
      errSpan = document.createElement("span");
      errSpan.className = "field-error-msg";
      inputEl.parentNode.insertBefore(errSpan, inputEl.nextSibling);
    }
    errSpan.textContent = message;
  }

  clearFieldError(inputEl) {
    if (!inputEl) return;
    inputEl.classList.remove("input-error");
    const errSpan = inputEl.nextElementSibling;
    if (errSpan && errSpan.classList.contains("field-error-msg")) {
      errSpan.remove();
    }
  }

  async handleFormSubmission() {
    if (!this.validateContactForm()) {
      return;
    }

    const submitBtn = document.getElementById("booking-submit-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Processing Request...</span>`;
    }

    // Call API Dispatcher Hook
    try {
      const response = await this.submitBookingRequest(this.bookingData);
      if (response.success) {
        this.showSuccessModal();
      } else {
        this.showToast(response.message || "An error occurred. Please try again.", "error");
      }
    } catch (err) {
      console.error("Booking error:", err);
      this.showToast("Network error. Please call us directly.", "error");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Confirm & Request Booking</span>`;
      }
    }
  }

  /**
   * API Dispatcher Integration Hook
   * Prepared for Mindbody, Glofox, Fitsense or custom backend webhook.
   */
  async submitBookingRequest(formData) {
    console.log("=== BLOOM STUDIO BOOKING DISPATCHER ===");
    console.log("Payload:", JSON.stringify(formData, null, 2));

    // Dispatch Custom DOM Event for third-party analytics / integrations
    const event = new CustomEvent("bloomBookingSubmitted", { detail: formData });
    window.dispatchEvent(event);

    // Simulated API response delay (clean async mock)
    await new Promise(resolve => setTimeout(resolve, 600));

    return {
      success: true,
      bookingRef: "BLOOM-" + Math.floor(100000 + Math.random() * 900000),
      message: "Trial booking inquiry received successfully."
    };
  }

  showSuccessModal() {
    const modal = document.getElementById("booking-success-modal");
    if (!modal) return;

    const detailsEl = document.getElementById("modal-summary-details");
    if (detailsEl) {
      detailsEl.innerHTML = `
        <div class="summary-line"><strong>Service / Plan:</strong> ${this.bookingData.serviceTitle}</div>
        <div class="summary-line"><strong>Preferred Time:</strong> ${this.bookingData.preferredTime}</div>
        <div class="summary-line"><strong>Client Name:</strong> ${this.bookingData.clientName}</div>
        <div class="summary-line"><strong>Phone:</strong> ${this.bookingData.clientPhone}</div>
      `;
    }

    modal.classList.add("open");
  }

  showToast(message, type = "info") {
    let toast = document.getElementById("bloom-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "bloom-toast";
      document.body.appendChild(toast);
    }
    toast.className = `bloom-toast toast-${type} visible`;
    toast.textContent = message;

    setTimeout(() => {
      toast.classList.remove("visible");
    }, 4000);
  }
}

// Initialize Booking Engine globally
window.bloomBookingEngine = new BloomBookingEngine();
