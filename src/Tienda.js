function Tienda() {
}

Tienda.prototype.productos = [];
var dataSet = []

Tienda.prototype.setProductos = function(value){
    this.productos = value;
}

Tienda.prototype.venderProducto = function(producto){
    producto.vender();
}

Tienda.prototype.productosDisponibles = function() {
    let resp = "";
    this.productos.forEach(producto => resp = resp + " " + producto.nombre + " " + producto.disponibilidad() + ",");
    return resp;
};

Tienda.prototype.init = function(){
    let prods = [
        new Producto('0','papa', 5),
        new Producto('1', 'carne', 4),
        new Producto('2', 'yuca', 4),
        new Producto('3', 'gomitas', 40),
        new Producto('4', 'cerveza', 20),
        new Producto('5', 'tomate', 7),
        new Producto('6', 'cebolla', 9),
        new Producto('7', 'pepino', 11),
        new Producto('8', 'platano', 5),
        new Producto('9', 'banano', 4),
        new Producto('10', 'manzana', 8),
        new Producto('10', 'h2o', 6),
        new Producto('10', 'coca-cola', 20),
        new Producto('10', 'chocolate', 27),
        new Producto('10', 'aguacate', 23),
        new Producto('10', 'pera', 17)
    ];
    prods.forEach(prod => dataSet.push([prod.codigo, prod.nombre, prod.cantidadInventario]))
    this.setProductos(prods);
    
}

$(document).ready(function() {
    var tienda;
    
    $(document).ready(function() {
        tienda = new Tienda();
        tienda.init();

        $('#productos').DataTable( {
            data: dataSet
        } );
    });
    
} );