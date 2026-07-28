/**
 * Bloom Studio - Local SEO Blog Hub & Article Viewer
 * Manages category filters, post rendering, and full article reader modal.
 */

class BloomBlogHub {
  constructor() {
    this.activeCategory = "All";
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.renderFilterTags();
      this.renderPosts();
      this.bindModalEvents();
    });
  }

  renderFilterTags() {
    const container = document.getElementById("blog-filter-tags");
    if (!container || !window.BLOOM_CONFIG) return;

    const posts = window.BLOOM_CONFIG.blogPosts;
    const categories = ["All", ...new Set(posts.map(p => p.category))];

    container.innerHTML = categories.map(cat => `
      <button class="blog-filter-btn ${cat === this.activeCategory ? 'active' : ''}" data-category="${cat}">
        ${cat === "All" ? "Toate Articolele" : cat}
      </button>
    `).join('');

    container.querySelectorAll(".blog-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".blog-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeCategory = btn.getAttribute("data-category");
        this.renderPosts();
      });
    });
  }

  renderPosts() {
    const grid = document.getElementById("blog-posts-grid");
    if (!grid || !window.BLOOM_CONFIG) return;

    let posts = window.BLOOM_CONFIG.blogPosts;
    if (this.activeCategory !== "All") {
      posts = posts.filter(p => p.category === this.activeCategory);
    }

    if (posts.length === 0) {
      grid.innerHTML = `<p class="no-posts-msg">Nu există articole în această categorie.</p>`;
      return;
    }

    grid.innerHTML = posts.map(post => `
      <article class="blog-card" data-post-id="${post.id}">
        <div class="blog-card-img-wrap">
          <img src="${post.image}" alt="${post.title}" loading="lazy" />
          <span class="blog-category-badge">${post.category}</span>
        </div>
        <div class="blog-card-body">
          <div class="blog-meta">
            <span class="blog-date">${post.date}</span>
            <span class="blog-dot">•</span>
            <span class="blog-read-time">${post.readTime}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <button class="blog-read-more-btn" aria-label="Citește articolul ${post.title}">
            Citește Articolul 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </article>
    `).join('');

    // Attach click listeners to open post modal
    grid.querySelectorAll(".blog-card").forEach(card => {
      card.addEventListener("click", () => {
        const postId = card.getAttribute("data-post-id");
        this.openArticleModal(postId);
      });
    });
  }

  openArticleModal(postId) {
    const post = window.BLOOM_CONFIG.blogPosts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.getElementById("article-reader-modal");
    if (!modal) return;

    const contentArea = document.getElementById("article-reader-content");
    if (contentArea) {
      contentArea.innerHTML = `
        <div class="article-header">
          <span class="blog-category-badge">${post.category}</span>
          <h1 class="article-title">${post.title}</h1>
          <div class="article-meta-info">
            <span>${post.date}</span> • <span>${post.readTime}</span> • <span>Autor: Bloom Studio Cluj</span>
          </div>
        </div>
        <div class="article-hero-img">
          <img src="${post.image}" alt="${post.title}" />
        </div>
        <div class="article-body-text">
          ${post.content}
        </div>
        <div class="article-cta-box">
          <h4>Vrei să încerci antrenamentul Reformer Pilates în Cluj-Napoca?</h4>
          <p>Rezervă o ședință de încercare în studioul nostru din centrul orașului și simte diferența.</p>
          <button class="btn btn-primary" onclick="window.bloomBlogHub.closeModalAndBook()">Programare Ședință Încercare</button>
        </div>
      `;
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  closeModalAndBook() {
    this.closeModal();
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  closeModal() {
    const modal = document.getElementById("article-reader-modal");
    if (modal) {
      modal.classList.remove("open");
    }
    document.body.style.overflow = "";
  }

  bindModalEvents() {
    const closeBtn = document.getElementById("close-article-modal");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
    }

    const modal = document.getElementById("article-reader-modal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          this.closeModal();
        }
      });
    }
  }
}

window.bloomBlogHub = new BloomBlogHub();
