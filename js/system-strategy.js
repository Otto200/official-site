
document.addEventListener("DOMContentLoaded", function() {
    // 1. Gather all interactive carousel elements inside Section 4
    const carouselContainer = document.querySelector("#system-strategy");
    
    if (carouselContainer) {
        const slides = carouselContainer.querySelectorAll(".strategy-slide");
        const dots = carouselContainer.querySelectorAll(".carousel-indicators .dot");
        const nextBtn = carouselContainer.querySelector(".next-arrow");
        const prevBtn = carouselContainer.querySelector(".prev-arrow");
        let currentIdx = 0;

        // 2. Core structural safety check: ensure slides and navigation components exist
        if (slides.length === 0) return;

        // 3. Main switching function engine
        function updateCarousel(newIdx) {
            // Remove the active view classes from the current visible items
            if (slides[currentIdx]) slides[currentIdx].classList.remove("active");
            if (dots[currentIdx]) dots[currentIdx].classList.remove("active");
            
            // Loop adjustment math handles any arbitrary number of total slides cleanly
            currentIdx = (newIdx + slides.length) % slides.length;
            
            // Apply the active view state to the newly selected nodes
            if (slides[currentIdx]) slides[currentIdx].classList.add("active");
            if (dots[currentIdx]) dots[currentIdx].classList.add("active");
        }

        // 4. Connect Click Actions to Next and Previous Chevron overlays
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", function(e) {
                e.preventDefault(); // Prevents jumpy scrolling behavior on screen anchors
                updateCarousel(currentIdx + 1);
            });
            
            prevBtn.addEventListener("click", function(e) {
                e.preventDefault();
                updateCarousel(currentIdx - 1);
            });
        }
        
        // 5. Connect Click Actions directly onto the individual indicator tracking dots
        dots.forEach((dot, index) => {
            dot.addEventListener("click", function() {
                updateCarousel(index);
            });
        });
    }
});
