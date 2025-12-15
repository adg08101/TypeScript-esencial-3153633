"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prueba = {
    a: 'prueba'
};
//Encadenamiento opcional:
// Operador '?' retornará undefined si una propiedad opcional no está definida
function existeD(valor) {
    return valor.b?.c?.d ? true : false;
}
// Aserciones no-null: Se activa si la opción strictNullChecks esta activa en el compilador
// El operador ! asegura al compilador que las propiedades opcionales existen
// Es un poco riesgoso usar este operador ya que las propiedades pueden no estar definidas en el objeto
function largoD(valor) {
    return valor.b.c.d.length;
}
// Para evitar usar ! o ? se puede validar la existencia de los objetos opcionales al inicio de la función
function largoDAsertado(valor) {
    if (valor.b && valor.b.c) {
        return valor.b.c.d.length;
    }
    return null;
}
//# sourceMappingURL=index.js.map