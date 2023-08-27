// Для этого задания создайте отдельный репозиторий.
// Используйте функции alert, confirm, prompt для общения с пользователем. 

// Написать игровой бот.
//"Загадывание случайного числа от 1 до 100"
//Что должна делать программа:
//— спрашивает пользователя: "Угадай число от 1 до 100".
//— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
//— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
//— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
//— если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
//— если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение "Поздравляю, Вы угадали!!!".
//Программа должна быть выполнена с помощью рекурсии, без единого цикла.
//Загаданное число должно храниться «в замыкании»

'use strict';

const isNumber = (n) => {
    let tempVar =   !isNaN(parseFloat(n)) 
                    && isFinite(n)
                    && +n >= 1 
                    && +n <= 100 
                    && +n === Math.floor(+n);
    if (!tempVar) {alert('Введи целое число от 1 до 100!');}
        return tempVar;
    };

const getNumber = (title, defaultValue = '') => {
    let tempVariable;
    do {
        tempVariable = prompt(title, defaultValue);
    } while (!isNumber(tempVariable));
    return +tempVariable;
};

const game = () => {

    const randomNumber = Math.floor(Math.random() * 100);

    const asking  = () => {
        const hiddenNumber = getNumber('Введите число от 1 до 100');

        if (hiddenNumber > randomNumber) {
            alert("Загаданное число меньше " + hiddenNumber);
            asking()} 
        else if (hiddenNumber < randomNumber) {
            alert("Загаданное число больше " + hiddenNumber);
            asking()} 
        else if (hiddenNumber === randomNumber) {
            alert("Число угадано! Это было число " + randomNumber);
            alert("Игра окончена!")
        };
    };

    asking();
};

game ();
