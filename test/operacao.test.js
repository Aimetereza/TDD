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

        resultado = () => calculadora.sub(2, "a");
        expect(resultado).toThrow('Não é um numero');
    })

    it('Operação de div', () => {
        let resultado = calculadora.div(3,2);
        expect(resultado).toEqual( 1.5);

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

        resultado = calculadora.div(8.2,0.2);
        expect(resultado).toEqual(4);

        resultado = calculadora.div(8,-2);
        expect(resultado).toEqual(-4);

        resultado = calculadora.div(0.7,3);
        expect(resultado).toEqual( 0);
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

        resultado = calculadora.mult(8.2,0.2);
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

        resultado = calculadora.Matchpow(8.2,0.2);
        expect(resultado).toEqual(10);

        resultado = calculadora.Matchpow(8,-2);
        expect(resultado).toEqual(-10);

        resultado = calculadora.Matchpow(0.7,3);
        expect(resultado).toEqual( 7);
    })

    
    it('Operação de Matchsqrt', () => {
        let resultado = calculadora.Matchsqrt(3);
        expect(resultado).toEqual(1.4142135623730951);

        resultado = calculadora.Matchsqrt(-1);
        expect(resultado).toEqual(1.4142135623730951);

        resultado = calculadora.Matchsqrt(0);
        expect(resultado).toEqual(1.4142135623730951);

        resultado = () => calculadora.Matchsqrt("a");
        expect(resultado).toThrow('Não é um numero');

        resultado = () => calculadora.Matchsqrt(2);
        expect(resultado).toThrow('Não é um numero');

        resultado = calculadora.Matchpow(-1,-2);
        expect(resultado).toEqual(1);

        resultado = calculadora.Matchpow(8);
        expect(resultado).toEqual(10);

        resultado = calculadora.Matchpow(8);
        expect(resultado).toEqual( -10);

        resultado = calculadora.Matchpow(0);
        expect(resultado).toEqual( 7);
    })

    
    








  
})


