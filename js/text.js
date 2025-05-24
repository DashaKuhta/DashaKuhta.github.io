document.addEventListener('DOMContentLoaded', function() {
  // Находим элемент с текстом "Все площадки Краснодара"
  const headerText = document.querySelector('.header__column:first-child');
  
  if (!headerText) return;

  function animateHeaderText() {
    const originalText = headerText.textContent;
    headerText.textContent = '';
    headerText.style.opacity = '0';

    const letters = originalText.split('');
    let delay = 0;

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `all 0.3s ease ${delay}s`;
      
      headerText.appendChild(span);
      
      // Анимируем появление каждой буквы с задержкой
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 50);
      
      delay += 0.05; // Увеличиваем задержку для каждой следующей буквы
    });
    
    setTimeout(() => {
      headerText.style.opacity = '1';
    }, 300);
  }

  // Добавляем эффект при наведении
  headerText.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
  });

  headerText.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });

  setTimeout(animateHeaderText, 500);
});