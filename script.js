//Написать игровой бот.
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


//==================================== функции =============================================
const isNumber = function (n) {
    let tempVar =   !isNaN(parseFloat(n)) 
                    && isFinite(n)
                    && +n >= 1 
                    && +n <= 100 
                    && +n === Math.floor(+n);
    if (!tempVar) {alert('Введи целое число от 1 до 100!');}
        return tempVar;
    };

//Генерирует случайное целое число от min до max
const getRandomInteger = function (min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
    };

// Принимает только целое число от 1 до 100 и отдает в виде Number
const getNumber = function (title, defaultValue = '') {
        let tempVariable;
        do {
            tempVariable = prompt(title, defaultValue);
        } while (!isNumber(tempVariable));
        return +tempVariable;
    };
    
// ============================== организация замыкания =====================================
function createGame () {
    // генерирование числа от 1 до 100
    const n = getRandomInteger(1, 100);
    // счетчик попыток
    let count = 10;
// возвращает объект с ключами result и count
    return function (num) {
        let result;
        count--;
        if (num === n) {
            result = 'bingo';
        } else if (num > n) {
            result = 'big';
        } else {
            result = 'small';
        }
        return {
            'result': result,
            'count': count,};
    };
}

function getStartNewGame (start) {

    if (!start) {return;}
        
    const game = createGame();
    let num = getNumber('Угадай целое число от 1 до 100');

    function gameBody(callback) {
        let answer = callback(num);

        if (answer.count < 1) {
            let startNewGame = confirm('Попытки закончились, хотите сыграть еще?');
            if (!startNewGame) {alert('До свидания!');}
            getStartNewGame(startNewGame);

        } else if (answer.result === 'big') {
            num = getNumber('Загаданное число меньше, осталось попыток: ' + answer.count);
            gameBody(callback);

        } else if (answer.result === 'small') {
            num = getNumber('Загаданное число больше, осталось попыток: ' + answer.count);
            gameBody(callback);

        } else if (answer.result === 'bingo') {
            let startNewGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (!startNewGame) {alert('До свидания!');}
            getStartNewGame(startNewGame);
        }
    }

    gameBody(game);
}

getStartNewGame(true);
console.log('Игра окончена');