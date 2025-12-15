"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Con extend se indica que F debe ser un derivado del tipo IFruta
function picarFrutas(frutas) {
    for (const fruta of frutas) {
        fruta.picar();
    }
}
class Fresa {
    tipo = 'fresa';
    picar() {
        return this.tipo;
    }
}
class Mango {
    tipo = 'mango';
    picar() {
        return this.tipo;
    }
}
class prueba {
}
const p = new prueba();
let fresa = new Fresa();
let mango = new Mango();
picarFrutas([fresa, mango]);
//////////////////////////////////////////////////////////////////
// Con keyof se indica que K debe el nombre de una propiedad de IFruta
function obtenerPropiedadFruta(nombrePropiedad, fruta) {
    return fruta[nombrePropiedad];
}
const tipo = obtenerPropiedadFruta('tipo', fresa);
//# sourceMappingURL=index.js.map