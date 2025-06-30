// Задание 4: Расчет по формуле с обработкой ошибок
function calculateFormula(x, a) {
    try {
        // Проверка деления на ноль
        if (x === 0) throw "Ошибка: деление на ноль (x не может быть 0)";
        
        // Проверка корня из отрицательного числа
        if (a < 0) throw "Ошибка: корень из отрицательного числа (a должно быть ≥ 0)";
        
        // Расчет по формуле: (2√a - x/4) / (0.3x)
        let numerator = 2 * Math.sqrt(a) - (x / 4);
        let denominator = 0.3 * x;
        
        return numerator / denominator;
    } 
    catch(err) {
        alert(err); // Вывод ошибки в диалоговое окно
        return err; // Возврат сообщения об ошибке
    }
}

function BEL(){
    let s1 = "Я люблю Беларусь";
let s2 = "Я учусь в Политехническом колледже";

// Определение длины строки и вывод в элемент <p>
document.getElementById("lengthS1").innerHTML = `Длина строки s1: ${s1.length}`;
document.getElementById("lengthS2").innerHTML = `Длина строки s2: ${s2.length}`;


}