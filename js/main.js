// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = heroSection ? heroSection.offsetHeight : 0;
            
            // Cambiar clase scrolled
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Cambiar colores según la sección
            if (scrollY < heroHeight - 100) {
                // Estamos en la sección hero (fondo oscuro)
                header.classList.remove('on-light-bg');
            } else {
                // Estamos en otras secciones (fondos claros)
                header.classList.add('on-light-bg');
            }
        });
    }

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all fade-in-up elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && mobileMenu && !navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Features Carousel
    const carousel = document.querySelector('.features-carousel');
    const slides = document.querySelectorAll('.features-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (carousel && slides.length > 0) {
        let currentSlide = 0;
        let totalSlides = 2; // Default for desktop (3-3 layout)

        function getSlideWidth() {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 768) {
                totalSlides = 6; // Mobile: 1 card per slide
                return 100 / 6; // 16.67% per slide
            } else if (windowWidth <= 1024) {
                totalSlides = 3; // Tablet: 2 cards per slide
                return 33.333; // 33.33% per slide
            } else {
                totalSlides = 2; // Desktop: 3 cards per slide
                return 50; // 50% per slide
            }
        }

        function updateCarousel() {
            const slideWidth = getSlideWidth();
            const translateX = -currentSlide * slideWidth;
            carousel.style.transform = `translateX(${translateX}%)`;
            
            // Update button states
            if (prevBtn && nextBtn) {
                prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
                nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
            }
        }

        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateCarousel();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }

        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Initialize carousel
        updateCarousel();

        // Handle window resize
        window.addEventListener('resize', () => {
            currentSlide = 0; // Reset to first slide on resize
            updateCarousel();
        });

        // Auto-play (optional - uncomment if desired)
        // setInterval(() => {
        //     if (currentSlide < totalSlides - 1) {
        //         nextSlide();
        //     } else {
        //         currentSlide = 0;
        //         updateCarousel();
        //     }
        // }, 5000);
    }

    // Demo Video Controls
    const demoVideo = document.getElementById('demo-video');
    const demoPlayBtn = document.getElementById('demo-play-btn');
    const demoPauseBtn = document.getElementById('demo-pause-btn');
    const demoProgressBar = document.getElementById('demo-progress-bar');
    const demoProgressFill = document.getElementById('demo-progress-fill');
    const demoControls = document.getElementById('demo-controls');
    
    if (demoVideo && demoPlayBtn && demoPauseBtn && demoProgressBar) {
        // Initial play button
        demoPlayBtn.addEventListener('click', () => {
            if (demoVideo.paused) {
                demoVideo.play();
                demoPlayBtn.style.display = 'none';
                demoControls.style.opacity = '1';
            }
        });
        
        // Pause/Play button
        demoPauseBtn.addEventListener('click', () => {
            if (demoVideo.paused) {
                demoVideo.play();
                demoPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                demoVideo.pause();
                demoPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
        
        // Progress bar click
        demoProgressBar.addEventListener('click', (e) => {
            const rect = demoProgressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            const newTime = percentage * demoVideo.duration;
            demoVideo.currentTime = newTime;
        });
        
        // Update progress bar
        demoVideo.addEventListener('timeupdate', () => {
            if (demoVideo.duration) {
                const percentage = (demoVideo.currentTime / demoVideo.duration) * 100;
                demoProgressFill.style.width = percentage + '%';
            }
        });
        
        // Show play button when video ends
        demoVideo.addEventListener('ended', () => {
            demoPlayBtn.style.display = 'flex';
            demoControls.style.opacity = '0';
            demoPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
        
        // Show controls on video hover
        const demoVisual = document.querySelector('.demo-visual');
        demoVisual.addEventListener('mouseenter', () => {
            if (!demoVideo.paused) {
                demoControls.style.opacity = '1';
            }
        });
        
        demoVisual.addEventListener('mouseleave', () => {
            if (!demoVideo.paused) {
                demoControls.style.opacity = '0';
            }
        });
    }
});
