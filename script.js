//task1
const task1 = () => {
    const str = 'js';
    const result = str.toUpperCase();
    console.log('Задание 1:', result);
    return result;
};

//task2
const task2 = () => {
    const filterStrings = (arr, prefix) => {
        const lowerPrefix = prefix.toLowerCase();
        return arr.filter(item => 
            item.toLowerCase().startsWith(lowerPrefix)
        );
    };
    
    const array = ['JavaScript', 'jQuery', 'React', 'Java', 'Python', 'jsx'];
    const result = filterStrings(array, 'ja');
    console.log('Задание 2:', result);
    return result;
};

//task3
const task3 = () => {
    const number = 32.58884;
    const results = {
        floor: Math.floor(number),
        ceil: Math.ceil(number),
        round: Math.round(number)
    };
    console.log('Задание 3:', results);
    return results;
};

//task4
const task4 = () => {
    const numbers = [52, 53, 49, 77, 21, 32];
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const result = { min, max };
    console.log('Задание 4:', result);
    return result;
};

//task5
const task5 = () => {
    const getRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        console.log('Задание 5 (случайное число):', randomNum);
        return randomNum;
    };
    return getRandomNumber();
};

//task6
const task6 = () => {
    const generateRandomArray = (n) => {
        const length = Math.floor(n / 2);
        const result = Array.from({ length }, () => Math.floor(Math.random() * (n + 1)));
        console.log('Задание 6:', result);
        return result;
    };
    
    const result = generateRandomArray(10);
    return result;
};

//task7
const task7 = () => {
    const getRandomInRange = (min, max) => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log('Задание 7:', randomNum);
        return randomNum;
    };
    
    const result = getRandomInRange(5, 15);
    return result;
};

//task8
const task8 = () => {
    const currentDate = new Date();
    console.log('Задание 8 (текущая дата):', currentDate);
    return currentDate;
};

//task9
const task9 = () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 73);
    console.log('Задание 9:', {
        currentDate: currentDate.toLocaleDateString(),
        dateIn73Days: futureDate.toLocaleDateString()
    });
    return futureDate;
};

//task10
const task10 = () => {
    const formatDate = (date) => {
        const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        
        const dayOfWeek = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const formatted = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
        console.log('Задание 10:', formatted);
        return formatted;
    };
    
    const result = formatDate(new Date());
    return result;
};