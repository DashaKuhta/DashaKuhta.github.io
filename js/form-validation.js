// form-validation.js
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы формы
    const eventTypeInput = document.getElementById('contactOne');
    const startDateInput = document.getElementById('contactTwo');
    const endDateInput = document.getElementById('contactThree');
    const guestsInput = document.getElementById('contactFour');
    const searchForm = document.querySelector('.search-main__form');
    
    // Создаем стили для сообщений об ошибках
    const errorStyles = document.createElement('style');
    errorStyles.textContent = `
        .error-message {
            color: red;
            font-size: 12px;
            margin-top: 5px;
        }
        .input-error {
            border-color: red !important;
        }
    `;
    document.head.appendChild(errorStyles);
    
    // Создаем элементы для отображения ошибок
    const createErrorElement = (input, message) => {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
        input.classList.add('input-error');
        return errorElement;
    };
    
    // Удаляем сообщение об ошибке
    const removeError = (input) => {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        input.classList.remove('input-error');
    };
    
    // Валидация типа события (макс 10 символов)
    const validateEventType = () => {
        if (eventTypeInput.value.length > 10) {
            createErrorElement(eventTypeInput, 'Максимум 10 символов');
            eventTypeInput.value = eventTypeInput.value.substring(0, 10);
        } else {
            removeError(eventTypeInput);
        }
    };
    
    // Валидация числовых полей
    const validateNumberField = (input) => {
        if (input.value && isNaN(input.value)) {
            createErrorElement(input, 'Введите число');
        } else {
            removeError(input);
        }
    };
    
    // Навешиваем обработчики событий
    eventTypeInput.addEventListener('input', validateEventType);
    
    [startDateInput, endDateInput, guestsInput].forEach(input => {
        input.addEventListener('input', () => validateNumberField(input));
    });
    
    // Для поля количества гостей - делаем его числовым
    guestsInput.type = 'number';
    guestsInput.min = '0';
    
    // Валидация при отправке формы
    searchForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Проверка типа события
        if (eventTypeInput.value.length > 10) {
            createErrorElement(eventTypeInput, 'Максимум 10 символов');
            isValid = false;
        }
        
        // Проверка числовых полей
        [startDateInput, endDateInput, guestsInput].forEach(input => {
            if (input.value && isNaN(input.value)) {
                createErrorElement(input, 'Введите число');
                isValid = false;
            }
        });
        
        if (!isValid) {
            e.preventDefault();
        }
    });
});