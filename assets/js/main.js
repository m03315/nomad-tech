// Theme functionality
class NomadTheme {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupParticles();
    this.setupAccessibility();
    this.setupTouchGestures();
  }

  // Navigation
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    // Mobile menu toggle
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const isOpen = navLinksContainer.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });
    }

    // Navigation links - no SPA behavior, just mobile menu handling
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Close mobile menu on navigation
        navLinksContainer.classList.remove('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navLinksContainer.classList.remove('active');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section, .hero');
    
    sections.forEach(section => {
      section.classList.remove('active');
      section.style.display = 'none';
      section.setAttribute('aria-hidden', 'true');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      if (sectionId === 'home') {
        targetSection.style.display = 'flex';
      } else {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
      }
      targetSection.setAttribute('aria-hidden', 'false');
      
      // Focus management
      const firstFocusable = targetSection.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }

  updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      link.setAttribute('aria-current', 'false');
    });
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
  }

  // Lazy-loaded particles
  setupParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.createParticles();
          observer.disconnect();
        }
      });
    });

    observer.observe(document.querySelector('.hero'));
  }

  createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth < 768 ? 25 : 50; // Fewer on mobile
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  // Accessibility improvements
  setupAccessibility() {
    // Skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--primary-color);
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1001;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // ARIA labels for interactive elements
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-pressed', btn.classList.contains('active'));
    });

    // Live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    document.body.appendChild(liveRegion);
    this.liveRegion = liveRegion;
  }

  // Touch gestures for mobile
  setupTouchGestures() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
      if (!startX || !startY) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Horizontal swipe detection
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next section
          this.navigateSection('next');
        } else {
          // Swipe right - previous section
          this.navigateSection('prev');
        }
      }
      
      startX = 0;
      startY = 0;
    }, { passive: true });
  }

  navigateSection(direction) {
    const sections = ['home', 'social', 'blog', 'portfolio'];
    const currentSection = document.querySelector('.hero:not([style*="display: none"]), .content-section.active');
    const currentId = currentSection ? currentSection.id : 'home';
    const currentIndex = sections.indexOf(currentId);
    
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % sections.length;
    } else {
      nextIndex = (currentIndex - 1 + sections.length) % sections.length;
    }
    
    this.showSection(sections[nextIndex]);
    
    // Update live region
    if (this.liveRegion) {
      this.liveRegion.textContent = `Navigated to ${sections[nextIndex]} section`;
    }
  }

  // Blog post filtering
  filterPosts(category) {
    const posts = document.querySelectorAll('.blog-post');
    const buttons = document.querySelectorAll('.category-btn');
    
    buttons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    
    event.target.classList.add('active');
    event.target.setAttribute('aria-pressed', 'true');
    
    let visibleCount = 0;
    posts.forEach(post => {
      const categories = post.dataset.categories;
      if (category === 'all' || categories.includes(category)) {
        post.style.display = 'block';
        visibleCount++;
      } else {
        post.style.display = 'none';
      }
    });
    
    // Update live region
    if (this.liveRegion) {
      this.liveRegion.textContent = `Filtered to ${category} category, showing ${visibleCount} posts`;
    }
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.nomadTheme = new NomadTheme();
});

// Global function for template compatibility
function toggleMobileMenu() {
  window.nomadTheme?.setupNavigation();
}

function showSection(sectionId) {
  window.nomadTheme?.showSection(sectionId);
}

function filterPosts(category) {
  window.nomadTheme?.filterPosts(category);
}