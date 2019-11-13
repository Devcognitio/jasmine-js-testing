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
            expect($('#select1 > option:nth-child(2)')).not.toBeSelected();
            $('#select1 > option:nth-child(2)').prop('selected', true);
            expect($('#select1 > option:nth-child(2)')).toBeSelected();
        });

        it('deberia poder check el input', function(){
            expect($('#input1')).not.toBeChecked();
            $('#input1').prop('checked', true);
            expect($('#input1')).toBeChecked();
        });
    });

    describe('Formulario', function () {
        it('deberia tener 3 inputs disponibles', function(){
            expect($('form > input[type=text]').length).toBe(3);
        });
        it('el campo nombre debe ser visible', function() {
            expect($('#nombres')).not.toBeHidden();
        });
        it('el campo nombre debe estar vacío', function() {
            expect($('#nombres')).toHaveValue('');
        });
        it('el campo nombre debe permitir el ingreso del nombre Diego', function(){
            expect($('#nombres')).toHaveValue('');
            $('#nombres').val('Diego');
            expect($('#nombres')).toHaveValue('Diego');
        });

        it('deberia poder tener un mail valido', function () {
            expect($('#mail')).toBeEmpty();
            $('#mail').val('jmartinez@todo1.net');
            expect($('#mail').val()).toBeMail();
        });
        
    });
    
});