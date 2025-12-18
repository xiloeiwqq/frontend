// task1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) {
        break;
    }
}

// task2
const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

// task3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

// task4
const result4 = [];
for (let i = 0; i < 3; i++) {
    const innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }
    result4.push(innerArray);
}
console.log(result4);

// task5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// task6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
const filteredArr6 = arr6.filter(item => typeof item === 'number');
console.log(filteredArr6);

// task7
const arr7 = [9, 8, 7, 6, 5];
const userGuess = prompt('Угадайте число от 1 до 9');
if (arr7.includes(Number(userGuess))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// task8
const str8 = 'abcdef';
const reversedStr8 = str8.split('').reverse().join('');
console.log(reversedStr8);

// task9
const arr9 = [[1, 2, 3], [4, 5, 6]];
const flattenedArr9 = [...arr9[0], ...arr9[1]];
console.log(flattenedArr9);

// task10
const arr10 = [3, 5, 7, 2, 8];
for (let i = 0; i < arr10.length; i++) {
    if (i + 1 < arr10.length) {
        const sum = arr10[i] + arr10[i + 1];
        console.log(`Сумма элементов ${arr10[i]} и ${arr10[i + 1]}: ${sum}`);
    }
}

// task11
function squareArray(numbers) {
    return numbers.map(num => num * num);
}
console.log(squareArray([1, 2, 3, 4, 5]));

// task12
function getWordLengths(words) {
    return words.map(word => word.length);
}
console.log(getWordLengths(['hello', 'world', 'javascript', 'code']));

// task13
function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}
console.log(getNegativeNumbers([1, -2, 3, -4, 5, -6]));

// task14
const originalArray14 = [];
for (let i = 0; i < 10; i++) {
    originalArray14.push(Math.floor(Math.random() * 11));
}
const evenNumbers14 = originalArray14.filter(num => num % 2 === 0);
console.log('Исходный массив:', originalArray14);
console.log('Четные числа:', evenNumbers14);

// task15
const numbers15 = [];
for (let i = 0; i < 6; i++) {
    numbers15.push(Math.floor(Math.random() * 10) + 1);
}
const sum15 = numbers15.reduce((acc, num) => acc + num, 0);
const average15 = sum15 / numbers15.length;
console.log('Массив:', numbers15);
console.log('Сумма:', sum15);
console.log('Среднее арифметическое:', average15);