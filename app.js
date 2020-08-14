const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function random() {
    let x = 10;
    let y = prompt('"Угадай число от 1 до 100"')
    function getResponse() {
        if (y > x) {
            alert('Загаданное число меньше')
            random()
        } else if ( y == null) {
            return alert('Выходим')
        } else if (y < x) {
            alert('Загаданное число больше')
            random()
        } else if (!isNumber(y)){
            alert('Введите число')
            random()
        } else if ( +y === x) {
            alert('Победа, ты угадал, это число ' + x)
        }

    }
 return getResponse()
}
random()

