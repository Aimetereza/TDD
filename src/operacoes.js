function sum(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 + num2
}



function sub(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 - num2
}



function div(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 / num2
}



function mult(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 * num2
}



function Matchpow(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um numero'
    }
    return num1 ^ num2
}



function Matchsqrt(num1) {
    if(isNaN(num1)) {
        throw 'Não é um numero'
    }
     return num1 = Math.sqrt}

module.exports = {
    sum,
    sub,
    div,
    mult,
    Matchpow,
    Matchsqrt
}

