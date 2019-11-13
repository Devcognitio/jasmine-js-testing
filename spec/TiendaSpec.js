describe('Tienda', function() {
    var tienda;

    beforeEach(function () {
        tienda = new Tienda()
    });

    it('deberia iniciarse OK', function() {
        tienda.init();
        expect(tienda.productos[0].nombre).toBe('papa');
        expect(tienda.productos[1].nombre).toBe('carne');
    });

    it('deberia funcionar OK productosDisponibles', function() {
        tienda.init();
        var resp = tienda.productosDisponibles();
        expect(resp).toBe('papa 5, carne 4,');
    });
});