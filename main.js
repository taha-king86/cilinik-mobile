// Main JavaScript for کلینیک موبایل Website

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeCarousels();
    initializeModals();
    initializeForms();
    initializeScrollEffects();
    initializePhoneFilters();
});

// Animation System
function initializeAnimations() {
    // Stagger animation for service cards
    if (document.querySelectorAll('.service-card').length > 0) {
        anime({
            targets: '.service-card',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuart'
        });
    }

    // Phone cards animation
    if (document.querySelectorAll('.phone-card').length > 0) {
        anime({
            targets: '.phone-card',
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: anime.stagger(150),
            duration: 600,
            easing: 'easeOutBack'
        });
    }

    // Text animations
    if (document.querySelector('.hero-title')) {
        anime({
            targets: '.hero-title',
            translateX: [-100, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 300
        });
    }
}

// Navigation System
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Sticky navigation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }
}

// Carousel System
function initializeCarousels() {
    // Testimonials carousel
    if (document.querySelector('.testimonials-slider')) {
        new Splide('.testimonials-slider', {
            type: 'loop',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            direction: 'rtl'
        }).mount();
    }

    // Phone gallery carousel
    if (document.querySelector('.phone-carousel')) {
        new Splide('.phone-carousel', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 3000,
            breakpoints: {
                768: {
                    perPage: 2,
                },
                480: {
                    perPage: 1,
                }
            }
        }).mount();
    }
}

// Modal System
function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-trigger');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal on backdrop click
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// Form System
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success';
            successMessage.textContent = 'پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.';
            
            form.appendChild(successMessage);
            form.reset();
            
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    });

    // Form validation
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Phone Filter System
function initializePhoneFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const phoneCards = document.querySelectorAll('.phone-card');
    const searchInput = document.querySelector('.phone-search');

    // Brand filter
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter phones
            phoneCards.forEach(card => {
                const brand = card.getAttribute('data-brand');
                if (filter === 'all' || brand === filter) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        scale: [0.8, 1],
                        duration: 400,
                        easing: 'easeOutQuart'
                    });
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            phoneCards.forEach(card => {
                const model = card.querySelector('.phone-model').textContent.toLowerCase();
                if (model.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Phone contact function
function callForPurchase() {
    window.location.href = 'tel:09130976133';
}

// WhatsApp contact function
function contactWhatsApp() {
    const message = 'سلام، در مورد خدمات کلینیک موبایل سوال داشتم.';
    window.open(`https://wa.me/989130976133?text=${encodeURIComponent(message)}`);
}

// Instagram contact function
function contactInstagram() {
    window.open('https://www.instagram.com/clinic_mobiiile?igsh=MWxkaGI0bXV5dTJrYQ==');
}

// Loading animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        anime({
            targets: loader,
            opacity: [1, 0],
            duration: 500,
            complete: function() {
                loader.style.display = 'none';
            }
        });
    }
});

// Smooth page transitions
function navigateToPage(url) {
    anime({
        targets: 'main',
        opacity: [1, 0],
        duration: 300,
        complete: function() {
            window.location.href = url;
        }
    });
}