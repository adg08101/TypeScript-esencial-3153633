"use strict";
// Clases en TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    _marca;
    _color;
    constructor(marca, color) {
        this._marca = marca;
        this._color = color;
    }
    descripcionVehiculo() {
        return `El vehículo es de marca ${this._marca} y es de color ${this._color}`;
    }
}
const miVehiculo = new Vehiculo('Nissan', 'negro');
miVehiculo.descripcionVehiculo();
//# sourceMappingURL=index.js.map