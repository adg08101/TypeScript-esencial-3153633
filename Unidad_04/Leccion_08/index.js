"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transporte {
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
class Avion extends Transporte {
    _largoAlas;
    _piloto;
    constructor(marca, color, largoAlas) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }
    descripcionVehiculo() {
        return `El avión es de marca ${this._marca} y es de color ${this._color}`;
    }
    moverse() {
        return `El avión se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }
    agregarPiloto(nombre) {
        this._piloto = {
            id: Avion.generarIdentificador(),
            nombre
        };
    }
}
const vehiculo = new Vehiculo('Nissan', 'azul', 4);
const avion = new Avion('Boeing', 'blanco', 15);
function moverlosTodos(transportes) {
    for (const transporte of transportes) {
        console.log(transporte.moverse());
    }
}
moverlosTodos([vehiculo, avion]);
//# sourceMappingURL=index.js.map