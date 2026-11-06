let track = document.getElementById('track');
let slides = document.querySelectorAll('.slide');
let carousel = document.getElementById('carousel');
let current = 0;

// показати слайд
function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;      // з першого назад: на останній
    }
    if (index >= slides.length) {
        index = 0;                      // з останнього вперед: на перший
    }
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
}

document.getElementById('prevBtn').addEventListener('click', function() {
    showSlide(current - 1);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    showSlide(current + 1);
});

