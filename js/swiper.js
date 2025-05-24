
if(document.querySelector('.slider-main__body')) {
    // Инициализируем Swiper для основного слайдера
    const swiper = new Swiper('.slider-main__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 24,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        loopAditionalSliders: 5,
        preloadImages: false,
        // Настройки пагинации (точек навигации)
        pagination: {
            // Элемент для размещения точек
            el: '.controls-slider-main__dotts',
            clickable: true,
        }
    });
}

// Проверяем наличие элемента с классом 'slider-event__body' на странице
if(document.querySelector('.slider-event__body')) {
    // Инициализируем Swiper для слайдера событий
    const swiper = new Swiper('.slider-event__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 24,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        loopAditionalSliders: 3,
        preloadImages: false,
        // Настройки пагинации (точек навигации)
        pagination: {
            el: '.controls-slider-event__dotts',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-arrow_next',
            prevEl: '.slider-arrow_prev',
        }
    });
}
