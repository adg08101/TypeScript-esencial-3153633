"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    _marca;
    _color;
    _numeroRuedas;
    constructor(marca, color, numeroRuedas = 0) {
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
class Avion extends Vehiculo {
    _largoAlas;
    constructor(marca, color, largoAlas) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }
    descripcionVehiculo() {
        return `El avión es de marca ${this._marca} y es de color ${this._color}`;
    }
}
const avion = new Avion('Boeing', 'blanco', 15);
console.log(avion.descripcionVehiculo());
//# sourceMappingURL=index.js.map