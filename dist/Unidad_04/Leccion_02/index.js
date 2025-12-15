"use strict";
// Propiedades públicas y privadas en clases.
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    _marca;
    _color;
    _numeroRuedas;
    constructor(marca, color, numeroRuedas) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }
    descripcionVehiculo() {
        return `El vehículo es de marca ${this._marca} y es de color ${this._color}`;
    }
    moverse() {
        return `El vehículo se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }
    obtenerVelocidad() {
        return '100 km/h';
    }
}
const miVehiculo = new Vehiculo('Nissan', 'negro', 4);
//# sourceMappingURL=index.js.map