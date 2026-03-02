// Restart text animation on slide change
const carousel = document.querySelector('#mainCarousel');

carousel.addEventListener('slide.bs.carousel', function () {
    const texts = document.querySelectorAll('.animate-text');
    texts.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
    });
});

