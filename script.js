//task1
function getMin(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

//task2
function checkEvenOdd(n) {
    if (n % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

//task3
function printSquare(n) {
    console.log(n * n);
}

function getSquare(n) {
    return n * n;
}

//task4
function checkAge() {
    const age = prompt('Сколько вам лет?');
    const ageNum = Number(age);
    
    if (ageNum < 0) {
        alert('Вы ввели неправильное значение');
    } else if (ageNum >= 0 && ageNum <= 12) {
        alert('Привет, друг!');
    } else if (ageNum >= 13) {
        alert('Добро пожаловать!');
    }
}

//task5
function multiply(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    }
    return Number(a) * Number(b);
}

//task6
function getCube() {
    const input = prompt('Введите число:');
    const n = Number(input);
    
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    return n + ' в кубе равняется ' + (n * n * n);
}

//task7
const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};
