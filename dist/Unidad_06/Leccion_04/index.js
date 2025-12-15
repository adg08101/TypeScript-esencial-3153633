"use strict";
//////////// Guardia typeof:
Object.defineProperty(exports, "__esModule", { value: true });
function calcularDiasDiferencia(fechaEntrada, fechaSalida) {
    //conversión de fechas en caso que sean strings:
    const fechaInicio = typeof fechaEntrada === 'string' ? new Date(fechaEntrada) : fechaEntrada;
    const fechaFin = typeof fechaSalida === 'string' ? new Date(fechaSalida) : fechaSalida;
    const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime();
    return diferenciaTiempo / (1000 * 3600 * 24);
}
class Fruta {
    _tipoFruta;
    _fechaExpiracion;
    get tipoFruta() {
        return this._tipoFruta;
    }
    get fechaExpiracion() {
        return this._fechaExpiracion;
    }
    constructor(fechaExpiracion, tipoFruta) {
        this._fechaExpiracion = fechaExpiracion;
        this._tipoFruta = tipoFruta;
    }
}
class Embutido {
    _marca;
    _fechaExpiracion;
    get marca() {
        return this._marca;
    }
    get fechaExpiracion() {
        return this._fechaExpiracion;
    }
    constructor(fechaExpiracion, marca) {
        this._fechaExpiracion = fechaExpiracion;
        this._marca = marca;
    }
}
const mango = new Fruta(new Date('2021-02-10'), 'mango');
const jamon = new Embutido(new Date('2021-02-10'), 'Salazar');
// Guardas personalizadas: arg is Tipo:
function esFruta(producto) {
    return producto instanceof Fruta;
}
function agregarCarrito(productosFrescos) {
    const embutidos = new Array();
    const frutas = new Array();
    for (let i = 0; i < productosFrescos.length; i++) {
        // Guardia instanceof:
        if (productosFrescos[i] instanceof Embutido) {
            embutidos.push(productosFrescos[i]);
        }
        // Guardia personalizadas: arg is Tipo:
        if (esFruta(productosFrescos[i])) {
            frutas.push(productosFrescos[i]);
        }
    }
}
agregarCarrito([mango, jamon]);
function imprimirMarca(productosFrescos) {
    for (let i = 0; i < productosFrescos.length; i++) {
        //Guardia in:
        if ('marca' in productosFrescos[i]) {
            console.log(`Producto marca ${productosFrescos[i].marca}`);
        }
    }
}
imprimirMarca([mango, jamon]);
//# sourceMappingURL=index.js.map