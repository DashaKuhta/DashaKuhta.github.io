document.addEventListener('DOMContentLoaded', () => {
    // Проверка на Internet Explorer и добавление класса для IE
    function isIE() {
        const ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie;
    }
    if (isIE()) {
        document.querySelector('html').classList.add('ie');
    }

    // Функция для замены img на background-image (для IE)
    function ibg() {
        if (isIE()) {
            let ibg = document.querySelectorAll("._ibg");
            for (var i = 0; i < ibg.length; i++) {
                if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
                    ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
                }
            }
        }
    }
    ibg();

    // ========== БУРГЕР-МЕНЮ ==========
    const iconMenu = document.querySelector('.burger-menu'); // Кнопка бургера
    const menuBody = document.querySelector('.menubox'); // Мобильное меню
    const menuHeader = document.querySelector('.menu-header'); // Шапка меню

    // Обработчик кликов по пунктам меню
    function handlerMenu(e) {
        const target = e.target;
        if (target.matches('.menu-item')) {
            toggleMenu();
        }
    }

    // Переключение состояния меню (открыто/закрыто)
    function toggleMenu() {
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');

        if (menuBody.classList.contains('_active')) {
            document.body.addEventListener('click', handlerMenu);
        } else {
            document.body.removeEventListener('click', handlerMenu);
        }
    };

    // Клик по иконке бургера
    iconMenu.addEventListener('click', toggleMenu);

    // ========== ФОРМА ПОИСКА ==========
    const inputElems = document.querySelectorAll('.input');
    const menuElems = document.querySelectorAll('.menu');
    const guestList = document.querySelector('.guest__list');
    const buttonApply = document.querySelector('.apply');

    // Функция для изменения количества гостей (плюс/минус)
    function chooseAmount() {
        const searchForm = document.querySelector('.search-main__form');
        if (searchForm) {
            searchForm.addEventListener('click', e => {
                const target = e.target;
                if (target.closest('.button__plus')) {
                    e.preventDefault();
                    target.closest('td').querySelector('.counter').textContent++;
                } else if(target.closest('.button__minus')) {
                    e.preventDefault();
                    target.closest('td').querySelector('.counter').textContent--;
                }
            });
        };
    };

    // Обработка фокуса на полях ввода
    inputElems.forEach(item => {
        item.onfocus = function(e) {
            if(e.target) {
                const list = e.target.closest('.field').querySelector('.menu');
                list.style.display = 'block';
            } 
        };
    });

    // Закрытие выпадающих списков при клике вне их области
    window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.field') && !target.closest('.guest__list') && !target.closest('.input') || target.closest('.apply')) {
            guestList.style.display = 'none';
        }
    });
    
    chooseAmount();

    // ========== МЕНЮ ТИПОВ СОБЫТИЙ ==========
    const eventLink = document.querySelector('.event__type-menu');
    const subMenuLinks = document.querySelectorAll('.event__type-submenu');

    // Переключение подменю типов событий
    eventLink.addEventListener('click', e => {
        const target = e.target;
        console.log(target.closest('.event__type-link'));
        const list = target.closest('.event__type-link').querySelector('.event__type-submenu');
        list.classList.toggle('_active');
    });

    // Закрытие меню типов событий при клике вне его области
    window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.event__type-menu') && !target.closest('.event__type-submenu') && !target.closest('.input')) {
            eventLink.style.display = 'none';
        }
    });

    // ========== ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Закрываем меню, если оно открыто (для мобильной версии)
            if (menuBody.classList.contains('_active')) {
                toggleMenu();
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Учитываем высоту шапки при прокрутке
                const headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Плавная прокрутка (современные браузеры)
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Полифилл для IE (если не поддерживается smooth-прокрутка)
                if (!('scrollBehavior' in document.documentElement.style)) {
                    const scrollToPolyfill = function(position) {
                        const diff = position - window.pageYOffset;
                        const duration = 500;
                        const start = Date.now();
                        
                        function step() {
                            const time = Date.now() - start;
                            const percent = Math.min(time / duration, 1);
                            window.scrollTo(0, window.pageYOffset + diff * percent);
                            if (time < duration) {
                                requestAnimationFrame(step);
                            }
                        }
                        step();
                    };
                    scrollToPolyfill(targetPosition);
                }
            }
        });
    });
});




// для текста
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".choice__title");

    title.addEventListener("mouseover", () => {
        title.style.transform = "rotate(360deg)";
        title.style.color = "rgb(153, 203, 56)";
    });

    title.addEventListener("mouseleave", () => {
        title.style.transform = "rotate(0deg)"; // Возвращаем в обычное состояние
        title.style.color = ""; // Возвращаем цвет по умолчанию из CSS
    });
});







