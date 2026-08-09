<script>
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".strategy-slide");
    const dots = document.querySelectorAll(".carousel-indicators .dot");
    const nextBtn = document.querySelector(".next-arrow");
    const prevBtn = document.querySelector(".prev-arrow");
    let currentIdx = 0;

    function updateCarousel(newIdx) {
        slides[currentIdx].classList.remove("active");
        dots[currentIdx].classList.remove("active");
        
        currentIdx = (newIdx + slides.length) % slides.length;
        
        slides[currentIdx].classList.add("active");
        dots[currentIdx].classList.add("active");
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => updateCarousel(currentIdx + 1));
        prevBtn.addEventListener("click", () => updateCarousel(currentIdx - 1));
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => updateCarousel(index));
    });
});
</script>
