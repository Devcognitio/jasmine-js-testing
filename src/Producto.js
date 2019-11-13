function Producto(codigo, nombre, cantidadInventario) {
  this.codigo = codigo;
  this.nombre = nombre;
  this.cantidadInventario = cantidadInventario;
}

Producto.prototype.disponibilidad = function() {
  // something complicated
  throw new Error("not yet implemented");
};

Producto.prototype.vender = function() {
  // something complicated
  throw new Error("not yet implemented");
};

