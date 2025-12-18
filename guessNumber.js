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

