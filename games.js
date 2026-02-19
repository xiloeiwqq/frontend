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

// игра «Переверни текст»
function reversedText() {
    const userText = prompt("Введите текст, который нужно перевернуть:");

    if (userText !== null && userText.trim() !== "") {
        const reversedText = userText.split('').reverse().join('');
        alert(`Оригинальный текст: ${userText}\n\nПеревернутый текст: ${reversedText}`);

    } else if (userText === null) {
        alert("Вы отменили ввод текста.");

    } else {
        alert("Вы ввели пустую строку. Попробуйте снова.");
    }
}

// игра «Викторина»
function quizGame() {
    const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
    ];

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = currentQuestion.question + "\n\n";
        for (let j = 0; j < currentQuestion.options.length; j++) {
            questionText += currentQuestion.options[j] + "\n";
        }
        
        let userAnswer;
        while (true) {
            userAnswer = parseInt(prompt(questionText + "\nВведите номер правильного ответа (1, 2 или 3):"));
            
            if (userAnswer === 1 || userAnswer === 2 || userAnswer === 3) {
                break;
            } else {
                alert("Пожалуйста, введите число 1, 2 или 3!");
            }
        }
        
        if (userAnswer === currentQuestion.correctAnswer) {
            correctCount++;
        }
    }

    alert(`Викторина завершена!\n\nВы правильно ответили на ${correctCount} из ${quiz.length} вопросов.`);
}

// игра "Камень, ножницы, бумага"
function playRockPaperScissors() {
    const choices = ["камень", "ножницы", "бумага"];
    
    const userChoice = prompt("Введите ваш выбор (камень, ножницы или бумага):").toLowerCase();
    
    if (!choices.includes(userChoice)) {
        alert("Некорректный выбор. Пожалуйста, введите 'камень', 'ножницы' или 'бумага'");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    
    let result;
    
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }
    
    const message = `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n${result}`;
    
    alert(message);
}

// игра "Генератор случайных цветов"
function playColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgbColor;
}
