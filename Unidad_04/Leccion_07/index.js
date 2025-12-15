"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nombre;
    moverse() {
        return 'El animal camina';
    }
}
class Transporte {
    // Definida por 'AlgoQueSeMueve'
    nombre;
    _marca;
    _color;
    _numeroMotor = Transporte.generarIdentificador();
    constructor(marca, color) {
        this._marca = marca;
        this._color = color;
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
    static generarIdentificador() {
        return Math.random().toString(36).slice(2);
    }
}
class Vehiculo extends Transporte {
    _numeroRuedas;
    constructor(marca, color, numeroRuedas) {
        super(marca, color);
        this._numeroRuedas = numeroRuedas;
    }
}
const vehiculo = new Vehiculo('Nissan', 'azul', 4);
const perro = new Animal();
function moverlosTodos(elementos) {
    for (const el of elementos) {
        console.log(el.moverse());
    }
}
moverlosTodos([vehiculo, perro]);
//# sourceMappingURL=index.js.map