function sum(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 + num2
}

module.exports = {
    sum
}

function sub(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 - num2
}

module.exports = {
    sum,
    sub
}

function div(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 / num2
}

module.exports = {
    sum,
    sub,
    div
}

function mult(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 * num2
}

module.exports = {
    sum,
    sub,
    div,
    mult
}

function Matchpow(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 ^ num2
}

module.exports = {
    sum,
    sub,
    div,
    mult,
    Matchpow
}

function Matchsqrt(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
     return num1 = Math.sqrt(num2)}

module.exports = {
    sum,
    sub,
    div,
    mult,
    Matchpow,
    Matchsqrt
}

