//
// const isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }
//
// function random() {
//     let x = 10;
//     let y = prompt('"Угадай число от 1 до 100"')
//     function getResponse() {
//         if (y > x) {
//             alert('Загаданное число меньше')
//             random()
//         } else if ( y == null) {
//             return alert('Выходим')
//         } else if (y < x && y > 0 || y < 0) {
//             alert('Загаданное число больше')
//             random()
//         } else if (!isNumber(y)){
//             alert('Введите число')
//             random()
//         } else if ( +y === x) {
//             alert('Победа, ты угадал, это число ' + x)
//         }
//
//     }
//  return getResponse()
// }
// random()


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function random() {
    let hiddenNumber = randomInteger(0, 100);
    console.log(hiddenNumber);


    function getResponse(numberAttempts, initialNumberAttempts) {

        let answer = prompt('"Угадай число от 1 до 100"')
        initialNumberAttempts = initialNumberAttempts || numberAttempts
        if (numberAttempts === 1) {
            if (!confirm('Попытки закончились, хотите сыграть еще?')) {
                return alert('До свидания')
            } else {
                return getResponse(initialNumberAttempts)
            }
        }
        if (answer > hiddenNumber) {
            alert(`Загаданное число меньше, осталось ${numberAttempts - 1} попыток`)
            getResponse(numberAttempts - 1, initialNumberAttempts)
        } else if (answer == null) {
            return alert('Выходим')
        }
        if (!isNumber(answer)) {
            alert('Введите число')
            getResponse(numberAttempts, initialNumberAttempts)
        } else if (answer < hiddenNumber) {
            alert(`Загаданное число больше, осталось ${numberAttempts - 1} попыток`)
            getResponse(numberAttempts - 1, initialNumberAttempts)
        } else if (+answer === hiddenNumber) {
            if (!confirm('Попытки закончились, хотите сыграть еще?')) {
                return alert('До свидания')
            } else {
                return random()
            }
        }
    }
    return getResponse(10)
}
random()
