"use strict";
//Genéricos en clases:
Object.defineProperty(exports, "__esModule", { value: true });
class Frutero {
    listaFrutas = [];
    agregarFruta(fruta) {
        this.listaFrutas.push(fruta);
    }
    tomarFruta(index) {
        return this.listaFrutas[index];
    }
}
const frutero = new Frutero();
frutero.agregarFruta('fresa');
frutero.agregarFruta('piña');
//# sourceMappingURL=index.js.map