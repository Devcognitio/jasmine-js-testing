describe("MathUtils", function() {
    var calc;

    beforeEach(function() {
        calc = new MathUtils();
    });
         
    it('deberia obtener 5 al sumar 3 y 5', function() {
        expect(calc.sum(3,5)).toEqual(8);
    });

    it('deberia obtener 400 al multiplicar 10 y 40', function() {
        expect(calc.multiply(10, 40)).toEqual(400);
    });

    it("deberia obtener 362880 al calcular el factorial de 9", function() {
        expect(calc.factorial(9)).toEqual(362880);
    });
        
    it("deberia generar una exception al calcular el factorial de -7", function() {
        expect(function() { 
            calc.factorial(-7)
        }).toThrowError(Error);
    });
         
});