"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LiquidoVehiculo;
(function (LiquidoVehiculo) {
    LiquidoVehiculo[LiquidoVehiculo["Agua"] = 0] = "Agua";
    LiquidoVehiculo[LiquidoVehiculo["Aceite"] = 1] = "Aceite";
    LiquidoVehiculo[LiquidoVehiculo["LiquidoFrenos"] = 2] = "LiquidoFrenos";
})(LiquidoVehiculo || (LiquidoVehiculo = {}));
var PiezasExterna;
(function (PiezasExterna) {
    PiezasExterna[PiezasExterna["Llantas"] = 5] = "Llantas";
    PiezasExterna[PiezasExterna["Pintura"] = 6] = "Pintura";
})(PiezasExterna || (PiezasExterna = {}));
class Vehiculo {
    _numeroRuedas;
    _marca;
    _color;
    constructor(marca, color, numeroRuedas) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }
    hacerMantenimiento(elemento) {
        if (elemento in LiquidoVehiculo) {
            console.log('Cambiando líquido del vehiculo...');
        }
        else {
            console.log('Cambiando una pieza del vehiculo');
        }
    }
}
const vehiculo = new Vehiculo('Nissan', 'azul', 4);
vehiculo.hacerMantenimiento(PiezasExterna.Llantas);
vehiculo.hacerMantenimiento(LiquidoVehiculo.Aceite);
//# sourceMappingURL=index.js.map