document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burgerBtn');
    const headerNav = document.querySelector('.header-nav');
    
    // Проверяем, существуют ли элементы на странице
    if (!burgerBtn || !headerNav) {
        console.error('Не найдены необходимые элементы для бургер-меню!');
        return;
    }
    
    burgerBtn.addEventListener('click', function() {
        // Переключаем классы
        this.classList.toggle('active');
        headerNav.classList.toggle('active');
        
        // Блокировка скролла при открытом меню
        document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие меню при клике на пункт (для мобильных)
    const navItems = document.querySelectorAll('.header-nav li');
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    burgerBtn.classList.remove('active');
                    headerNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
    
    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            burgerBtn.classList.remove('active');
            headerNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

