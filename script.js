// script.js

$(document).ready(function() {
    // Ваш существующий код
    $('.social-links').hover(function() {
        $(this).toggleClass('glow');
    });

    // Функция для обработки появления элементов
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Инициализация
    handleScrollAnimation();
});
