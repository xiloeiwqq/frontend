// игра "Угадай число"
function playGuessNumber() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    alert('Я загадал число от 1 до 100. Попробуй угадать!');
    
    while (true) {
        const input = prompt('Введите число от 1 до 100:');
        
        if (input === null) {
            alert('Игра прервана. Загаданное число было: ' + secretNumber);
            break;
        }
        
        const guess = parseInt(input);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert('Пожалуйста, введите число от 1 до 100!');
            continue;
        }
        
        attempts++;
        
        if (guess === secretNumber) {
            alert('Поздравляю! Вы угадали число ' + secretNumber + ' за ' + attempts + ' попыток!');
            break;
        } else if (guess < secretNumber) {
            alert('Загаданное число БОЛЬШЕ');
        } else {
            alert('Загаданное число МЕНЬШЕ');
        }
    }
}

// игра "Простая арифметика"
function playArithmetic() {
    let correct = 0;
    let total = 0;
    
    alert('Решайте примеры! Нажмите "Отмена" для выхода.');
    
    while (true) {
        const operators = ['+', '-', '*', '/'];
        const operator = operators[Math.floor(Math.random() * 4)];
        
        let num1, num2, correctAnswer;
        
        if (operator === '/') {
            num2 = Math.floor(Math.random() * 9) + 1;
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * correctAnswer;
        } else if (operator === '*') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            correctAnswer = num1 * num2;
        } else {
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            
            if (operator === '+') {
                correctAnswer = num1 + num2;
            } else {
                correctAnswer = num1 - num2;
            }
        }
        
        const task = num1 + ' ' + operator + ' ' + num2;
        const userAnswer = prompt('Решите пример: ' + task + ' = ?');
        
        if (userAnswer === null) {
            alert('Игра окончена! Правильных ответов: ' + correct + ' из ' + total);
            break;
        }
        
        total++;
        
        if (parseInt(userAnswer) === correctAnswer) {
            correct++;
            alert('Правильно!');
        } else {
            alert('Ошибка! Правильный ответ: ' + correctAnswer);
        }
    }
}
