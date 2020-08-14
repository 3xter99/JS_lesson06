
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
//


const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function random(numberAttempts, initialNumberAttempts) {

    let hiddenNumber = 10;

    function getResponse() {
        let answer = prompt('"Угадай число от 1 до 100"')
        initialNumberAttempts = initialNumberAttempts || numberAttempts
        if (numberAttempts === 1) {
            if (!confirm('Попытки закончились, хотите сыграть еще?')) {
                return alert('До свидания')
            } else {
                return random(initialNumberAttempts)
            }
        }
        if (answer > hiddenNumber) {
            alert(`Загаданное число меньше, осталось ${numberAttempts-1} попыток`)
            random(numberAttempts-1, initialNumberAttempts)
        } else if ( answer == null) {
            return alert('Выходим')
        } if (!isNumber(answer)) {
            alert('Введите число')
            random(numberAttempts, initialNumberAttempts)
        } else if (answer < hiddenNumber) {
            alert(`Загаданное число больше, осталось ${numberAttempts-1} попыток`)
            random(numberAttempts - 1, initialNumberAttempts)
        } else if ( +answer === hiddenNumber) {
            alert('Победа, ты угадал, это число ' + hiddenNumber)
        }

    }
    return getResponse()
}
random(10)
