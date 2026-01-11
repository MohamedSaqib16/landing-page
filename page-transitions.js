// Page Transition Handler
(function() {
    'use strict';

    // Add fade-in animation on page load
    document.addEventListener('DOMContentLoaded', function() {
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        
        requestAnimationFrame(function() {
            document.body.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        });
    });

    // Handle internal links for page transitions
    function handleLinkClick(e) {
        const link = e.currentTarget;
        const href = link.getAttribute('href');
        
        // Only handle internal links (same domain)
        if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            // Check if it's a different page (not just an anchor)
            if (href.includes('.html') || (!href.includes('#') && href !== window.location.pathname)) {
                e.preventDefault();
                
                // Create transition overlay
                const overlay = document.createElement('div');
                overlay.className = 'page-transition-overlay';
                document.body.appendChild(overlay);
                
                // Trigger fade-out
                requestAnimationFrame(function() {
                    overlay.classList.add('active');
                    document.body.style.opacity = '0';
                    document.body.style.transform = 'translateY(-20px)';
                    
                    // Navigate after animation
                    setTimeout(function() {
                        window.location.href = href;
                    }, 300);
                });
            }
        }
    }

    // Handle anchor links with smooth scroll (500ms duration)
    function handleAnchorLink(e) {
        const link = e.currentTarget;
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Smooth scroll with 500ms duration
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 300; // 300 milliseconds
                let start = null;
                
                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 0.5);
                    
                    // Easing function (ease-in-out)
                    const ease = percentage < 0.3 
                        ? 2 * percentage * percentage 
                        : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (progress < duration) {
                        requestAnimationFrame(step);
                    }
                }
                
                requestAnimationFrame(step);
            }
        }
    }

    // Attach event listeners to all links
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a[href]');
        
        links.forEach(function(link) {
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                // Anchor link - smooth scroll
                link.addEventListener('click', handleAnchorLink);
            } else if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                // Internal page link - page transition
                link.addEventListener('click', handleLinkClick);
            }
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            // Page was loaded from cache
            document.body.style.opacity = '0';
            document.body.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(function() {
                document.body.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
                document.body.style.opacity = '1';
                document.body.style.transform = 'translateY(0)';
            });
        }
    });
})();
