/**
 * BANKBUGS|FX Ecosystem Interactive Component Logic Engine
 * Tracks spatial pointer variables, initializes linear gradients, and binds mobile behaviors.
 */
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('section-ecosystem');
    const sliderViewport = document.getElementById('ecosystem-slider');
    const scrollThumb = document.getElementById('custom-thumb');
    const cardsGrid = section ? section.querySelector('.ecosystem-cards-grid') : null;
    const cards = section ? section.querySelectorAll('.ecosystem-card') : [];

    if (!section || !sliderViewport || !scrollThumb || !cardsGrid) return;

    // 1. High-Performance Hardware-Accelerated Section Background Spotlight (Desktop Only)
    if (window.innerWidth > 768) {
        section.addEventListener('mousemove', (e) => {
            const bounds = section.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;
            
            section.style.setProperty('--pointer-x', `${x}px`);
            section.style.setProperty('--pointer-y', `${y}px`);
        });

        // 2. Localized Card Spotlights (Cursor Tracking Grid Mask Effect)
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const cardBounds = card.getBoundingClientRect();
                const cardX = e.clientX - cardBounds.left;
                const cardY = e.clientY - cardBounds.top;
                
                card.style.setProperty('--card-x', `${cardX}px`);
                card.style.setProperty('--card-y', `${cardY}px`);
            });
        });
    }

    // 3. Hardware-Accelerated Click-and-Drag Velocity Engine for Desktop Sliding Track
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderViewport.addEventListener('mousedown', (e) => {
        isDown = true;
        sliderViewport.style.cursor = 'grabbing';
        startX = e.pageX - sliderViewport.offsetLeft;
        scrollLeft = sliderViewport.scrollLeft;
    });

    sliderViewport.addEventListener('mouseleave', () => {
        isDown = false;
        sliderViewport.style.cursor = 'grab';
    });

    sliderViewport.addEventListener('mouseup', () => {
        isDown = false;
        sliderViewport.style.cursor = 'grab';
    });

    sliderViewport.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderViewport.offsetLeft;
        const walk = (x - startX) * 1.5; // Controls slider drift sensitivity ratios
        sliderViewport.scrollLeft = scrollLeft - walk;
    });

    // 4. Dynamic Terminal Scrollbar Metric Sync Tracking HUD Indicators
    const updateScrollIndicator = () => {
        const maxScroll = sliderViewport.scrollWidth - sliderViewport.clientWidth;
        if (maxScroll <= 0) return;
        
        const currentPercentage = sliderViewport.scrollLeft / maxScroll;
        const thumbWidthPercentage = (sliderViewport.clientWidth / sliderViewport.scrollWidth) * 100;
        
        // Binds bounds thresholds to prevent thumb clipping
        const boundedThumbWidth = Math.max(15, Math.min(thumbWidthPercentage, 40));
        scrollThumb.style.width = `${boundedThumbWidth}%`;
        
        const availableTrackWidth = 100 - boundedThumbWidth;
        const leftOffset = currentPercentage * availableTrackWidth;
        scrollThumb.style.left = `${leftOffset}%`;
    };

    sliderViewport.addEventListener('scroll', updateScrollIndicator);
    window.addEventListener('resize', updateScrollIndicator);
    updateScrollIndicator(); // Initialization trigger line

    // 5. Accessible Focus Matrix Focus State Handler
    cards.forEach(card => {
        card.addEventListener('focus', () => {
            if (window.innerWidth > 768) {
                cardsGrid.classList.add('grid-has-focus');
            }
        });

        card.addEventListener('blur', () => {
            cardsGrid.classList.remove('grid-has-focus');
        });
    });

    // 6. Inject Dynamic SVG Linear Gradient Mappings to Prevent Def Loss across Vercel Routers
    const svgFrame = section.querySelector('.architecture-path-svg');
    if (svgFrame && !svgFrame.querySelector('defs')) {
        const definitionsSpace = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        definitionsSpace.innerHTML = `
            <linearGradient id="line-gradient-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgba(26,33,42,0.05)" />
                <stop offset="50%" stop-color="var(--fx-accent)" />
                <stop offset="100%" stop-color="rgba(26,33,42,0.05)" />
            </linearGradient>
        `;
        svgFrame.insertBefore(definitionsSpace, svgFrame.firstChild);
    }
});
