const { describe, expect, it} = require ('@jest/globals')
const calculadora = require('../src/operacoes')

describe('Teste de calculadora', () => {


    it('Operação de soma', () => {
        let resultado = calculadora.sum(1,2);
        expect(resultado).toEqual(3);

        resultado = calculadora.sum(-1,2);
        expect(resultado).toEqual(1);

        resultado = calculadora.sum(0,2);
        expect(resultado).toEqual(2);

        resultado = () => calculadora.sum("a",2);
        expect(resultado).toThrow('Não é um numero');

        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow('Não é um numero');
    })


    
    it('Operação de sub', () => {
        let resultado = calculadora.sub(3,2);
        expect(resultado).toEqual(1);

        resultado = calculadora.sub(-1,2);
        expect(resultado).toEqual(-3);

        resultado = calculadora.sub(0,2);
        expect(resultado).toEqual(-2);

        resultado = () => calculadora.sub("a",2);
        expect(resultado).toThrow('Não é um numero');

        resultado = () => calculadora.sub( "a");
        expect(resultado).toThrow('Não é um numero');
    })

    it('Operação de div', () => {
        let resultado = calculadora.div(0,2);
        expect(resultado).toEqual( 0);

        resultado = calculadora.div(-1,2);
        expect(resultado).toEqual(-0.5);

        resultado = calculadora.div(0,2);
        expect(resultado).toEqual( 0);

        resultado = () => calculadora.div("a",2);
        expect(resultado).toThrow('Não é um numero');

        resultado = () => calculadora.div(2, "a");
        expect(resultado).toThrow('Não é um numero');

        resultado = calculadora.div(-1,-2);
        expect(resultado).toEqual( 0.5);

        resultado = calculadora.div(8,2);
        expect(resultado).toEqual(4);

        resultado = calculadora.div(8,-2);
        expect(resultado).toEqual(-4);

        resultado = calculadora.div(0,3);
        expect(resultado).toEqual(0);
    })


    it('Operação de mult', () => {
        let resultado = calculadora.mult(3,2);
        expect(resultado).toEqual(6);

        resultado = calculadora.mult(-1,2);
        expect(resultado).toEqual(-2);

        resultado = calculadora.mult(0,2);
        expect(resultado).toEqual( 0);

        resultado = () => calculadora.mult("a",2);
        expect(resultado).toThrow('Não é um numero');

        resultado = () => calculadora.mult(2, "a");
        expect(resultado).toThrow('Não é um numero');

        resultado = calculadora.mult(-1,-2);
        expect(resultado).toEqual( 2);

        resultado = calculadora.mult(8,2);
        expect(resultado).toEqual(16);

        resultado = calculadora.mult(8,-2);
        expect(resultado).toEqual(-16);

    })

    it('Operação de Matchpow', () => {
        let resultado = calculadora.Matchpow(3,2);
        expect(resultado).toEqual(   1);

        resultado = calculadora.Matchpow(-1,2);
        expect(resultado).toEqual( -3);

        resultado = calculadora.Matchpow(0,2);
        expect(resultado).toEqual(2);

        resultado = () => calculadora.Matchpow("a",2);
        expect(resultado).toThrow('Não é um numero');

        resultado = () => calculadora.Matchpow(2, "a");
        expect(resultado).toThrow('Não é um numero');

        resultado = calculadora.Matchpow(-1,-2);
        expect(resultado).toEqual(1);

        resultado = calculadora.Matchpow(8,2);
        expect(resultado).toEqual(10);

        resultado = calculadora.Matchpow(8,-2);
        expect(resultado).toEqual(-10);

        resultado = calculadora.Matchpow(7,3);
        expect(resultado).toEqual( 4);
    })

    
    it('Operação de Mathsqrt', () => {
        let resultado = calculadora.Mathsqrt(9);
        expect(resultado).toEqual(3);

        resultado = calculadora.Mathsqrt(12);
        expect(resultado).toEqual(3.4641016151377544);

        resultado = calculadora.Mathsqrt(10);
        expect(resultado).toEqual( 3.1622776601683795);

        resultado = () => calculadora.Mathsqrt("a");
        expect(resultado).toThrow('Não é um numero');

        resultado = calculadora.Mathsqrt(50);
        expect(resultado).toEqual(7.0710678118654755);

        resultado = calculadora.Mathsqrt(8);
        expect(resultado).toEqual( 2.8284271247461903);

        resultado = calculadora.Mathsqrt(18);
        expect(resultado).toEqual( 4.242640687119285);

        resultado = calculadora.Mathsqrt(90);
        expect(resultado).toEqual( 9.486832980505138);
    })

    
    








  
})


