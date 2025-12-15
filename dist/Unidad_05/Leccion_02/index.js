"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function modificarArregloAlMismoTipo(valores, fnc) {
    const newArreglo = new Array();
    for (const valor of valores) {
        newArreglo.push(fnc(valor));
    }
    return newArreglo;
}
const arregloNumeros = modificarArregloAlMismoTipo([1, 2, 3, 4, 5], valor => valor * 3);
const arregloString = modificarArregloAlMismoTipo(['a', 'b', 'c', 'd'], valor => valor + valor);
//const arregloString2 = modificarArregloAlMismoTipo(['a', 'b', 'c', 'd'], (valor) => valor.length);
function modificarArregloTipoDistinto(valores, fnc) {
    const newArreglo = new Array();
    for (const valor of valores) {
        newArreglo.push(fnc(valor));
    }
    return newArreglo;
}
const arregloANumero = modificarArregloTipoDistinto(['a', 'b', 'c', 'd'], valor => valor.length);
//# sourceMappingURL=index.js.map