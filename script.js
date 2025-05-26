document.addEventListener('DOMContentLoaded', function() {
    // Loading screen animation
    let percentage = 0;
    const loadingInterval = setInterval(() => {
        percentage += 1;
        document.getElementById('loading-percentage').textContent = `${percentage}%`;
        
        if (percentage >= 100) {
            clearInterval(loadingInterval);
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        }
    }, 20);

    // Custom cursor
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Cursor effects
    document.querySelectorAll('button, a, .service-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderColor = 'var(--accent-gold)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
        });
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.gg-menu');
    const closeBtn = document.querySelector('.fa-close');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.style.right = '0';
    });

    closeBtn.addEventListener('click', () => {
        navLinks.style.right = '-200px';
    });

    // Scroll header effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });

    // Reveal team section
    const revealTeamBtn = document.getElementById('reveal-team');
    const teamContent = document.getElementById('team-content');

    if (revealTeamBtn && teamContent) {
        revealTeamBtn.addEventListener('click', () => {
            if (teamContent.style.display === 'block') {
                teamContent.style.display = 'none';
                revealTeamBtn.textContent = 'Meet Our Team';
            } else {
                teamContent.style.display = 'block';
                revealTeamBtn.textContent = 'Hide Team';
            }
        });
    }

    // Service example buttons
    const serviceExampleBtns = document.querySelectorAll('.service-example-btn');
    
    serviceExampleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            // In a real implementation, you would fetch/show examples for this service type
            alert(`Showing examples for ${serviceType}. In a full implementation, this would display a modal or gallery of ${serviceType} examples.`);
        });
    });

    // Gallery reveal
    const galleryRevealBtn = document.getElementById('reveal-gallery');
    const galleryContainer = document.querySelector('.gallery-container');
    
    if (galleryRevealBtn && galleryContainer) {
        galleryRevealBtn.addEventListener('click', () => {
            if (galleryContainer.style.display === 'grid') {
                galleryContainer.style.display = 'none';
                galleryRevealBtn.textContent = 'View Gallery';
            } else {
                galleryContainer.style.display = 'grid';
                galleryRevealBtn.textContent = 'Hide Gallery';
                
                // In a real implementation, you would load gallery items here
                // This is just a simulation
                const galleryGrid = document.querySelector('.gallery-grid');
                if (galleryGrid && galleryGrid.children.length === 0) {
                    const sampleImages = [
                        'welcome.jpeg',
                        'install.jpeg',
                        'finish.jpeg',
                        'refinish.jpeg',
                        'spindles.JPG',
                        'posts.JPG'
                    ];
                    
                    sampleImages.forEach(img => {
                        const galleryItem = document.createElement('div');
                        galleryItem.className = 'gallery-item';
                        galleryItem.innerHTML = `<img src="${img}" alt="Gallery image">`;
                        galleryGrid.appendChild(galleryItem);
                    });
                }
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.right = '-200px';
                }
            }
        });
    });
});