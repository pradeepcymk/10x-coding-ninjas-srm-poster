// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    initSmoothScrolling();
    initFloatingButton();
    initScrollAnimations();
    initRegisterButtons();
    initParallaxEffects();
    
    // Smooth scrolling for internal links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Floating register button visibility
    function initFloatingButton() {
        const floatingBtn = document.querySelector('.floating-register');
        const heroSection = document.querySelector('.hero');
        
        if (!floatingBtn || !heroSection) return;
        
        window.addEventListener('scroll', function() {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition > heroBottom) {
                floatingBtn.classList.add('visible');
            } else {
                floatingBtn.classList.remove('visible');
            }
        });
    }
    
    // Simple scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Animate elements with data-aos attribute
        const animateElements = document.querySelectorAll('[data-aos]');
        animateElements.forEach((element, index) => {
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            observer.observe(element);
        });
        
        // Animate cards on scroll
        const cards = document.querySelectorAll('.highlight-card, .prize-card, .requirement-item');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            observer.observe(card);
        });
    }
    
    // Register button functionality
    function initRegisterButtons() {
        const registerBtns = document.querySelectorAll('.register-btn');
        
        registerBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Simulate registration process
                handleRegistration();
            });
        });
    }
    
    // Handle registration (simulate)
    function handleRegistration() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(10px);
        `;
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: linear-gradient(135deg, #0B1426, #1A2332);
            padding: 40px;
            border-radius: 12px;
            text-align: center;
            max-width: 400px;
            width: 90%;
            border: 1px solid rgba(0, 191, 255, 0.3);
            box-shadow: 0 20px 40px rgba(0, 191, 255, 0.2);
            transform: scale(0.9);
            transition: transform 0.3s ease;
        `;
        
        modalContent.innerHTML = `
            <h3 style="color: #00BFFF; margin-bottom: 20px; font-size: 24px;">Registration Coming Soon!</h3>
            <p style="color: #f5f5f5; margin-bottom: 30px; line-height: 1.6;">
                Registration portal will be available soon. Stay tuned for updates!
            </p>
            <button id="closeModal" style="
                background: linear-gradient(135deg, #00BFFF, #00A3E0);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                transition: all 0.3s ease;
            ">Got It!</button>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Animate modal in
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('#closeModal');
        const closeModal = () => {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.9)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.body.contains(modal)) {
                closeModal();
            }
        });
    }
    
    // Parallax effects for geometric shapes
    function initParallaxEffects() {
        const shapes = document.querySelectorAll('.geometric-shape');
        
        if (shapes.length === 0) return;
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            shapes.forEach((shape, index) => {
                const speed = 0.2 + (index * 0.1);
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }
    
    // Add hover effects to interactive elements
    function initHoverEffects() {
        const interactiveElements = document.querySelectorAll('.btn-primary, .highlight-card, .prize-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });
    }
    
    // Initialize hover effects
    initHoverEffects();
    
    // Add loading animation
    function initLoadingAnimation() {
        const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .event-meta, .hero-cta');
        
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // Initialize loading animation
    initLoadingAnimation();
    
    // Add scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #00BFFF, #00A3E0);
            z-index: 10000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Initialize scroll progress
    initScrollProgress();
    
    // Add typewriter effect to hero title (optional enhancement)
    function initTypewriterEffect() {
        const titleElement = document.querySelector('.hero-title');
        if (!titleElement) return;
        
        // This is optional and can be enabled for extra effect
        // Commenting out for now to keep the immediate visual impact
        /*
        const originalText = titleElement.innerHTML;
        titleElement.innerHTML = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                titleElement.innerHTML = originalText.slice(0, i);
                i++;
                if (i > originalText.length) {
                    clearInterval(typeInterval);
                }
            }, 100);
        }, 1000);
        */
    }
    
    // Social media link tracking (analytics placeholder)
    function initAnalytics() {
        const socialLinks = document.querySelectorAll('.social-link');
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Analytics tracking would go here
                console.log('Social link clicked:', this.href);
            });
        });
        
        externalLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Analytics tracking would go here
                console.log('External link clicked:', this.href);
            });
        });
    }
    
    // Initialize analytics
    initAnalytics();
    
    // Performance optimization: Lazy load non-critical animations
    function initLazyAnimations() {
        const lazyElements = document.querySelectorAll('.timeline-item, .footer');
        
        const lazyObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    lazyObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        lazyElements.forEach(element => {
            lazyObserver.observe(element);
        });
    }
    
    // Initialize lazy animations
    initLazyAnimations();
    
    console.log('🚀 10x Coding Ninjas X SRM event page loaded successfully!');
});