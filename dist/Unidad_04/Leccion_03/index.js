"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    _marca;
    _color;
    _numeroRuedas;
    //Modificadores de marca
    get marca() {
        return this._marca;
    }
    set marca(valor) {
        this._marca = valor;
    }
    //Modificadores de color
    get color() {
        return this._color;
    }
    set color(valor) {
        this._color = valor;
    }
    //Modificadores de numeroRuedas
    get numeroRuedas() {
        return this._numeroRuedas;
    }
    set numeroRuedas(valor) {
        this._numeroRuedas = valor;
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
const miVehiculo = new Vehiculo();
miVehiculo.marca = 'Nissan';
miVehiculo.color = 'negro';
miVehiculo.numeroRuedas = 4;
miVehiculo.marca = 'Toyota';
//# sourceMappingURL=index.js.map