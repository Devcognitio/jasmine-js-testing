describe('TestFixture', function() {
    var fixture;
        
    beforeEach(function () {
        loadFixtures('TestFixture.html');
        fixture = $('#contenedor1');
    });

    it('Fixture debe estar definida', function() {
        expect( fixture ).toBeDefined();
     });

    describe('Configuracion inicial', function(){

        it('deberia tener un select con 5 opciones', function(){
            expect($('#select1 > option').length).toBe(5);
        });

        it('deberia tener un checkbox sin seleccionar', function(){
            expect($('#input1')).not.toBeChecked();
        });
    });

    describe('Interacciones', function(){

        it('deberia poder seleccionar la option 2', function(){
            $('#select1 > option:nth-child(2)').prop('selected', true);
            expect($('#select1 > option:nth-child(2)')).toBeSelected();
        });

        it('deberia poder check el input', function(){
            $('#input1').prop('checked', true);
            expect($('#input1')).toBeChecked();
        });
    });
    
});