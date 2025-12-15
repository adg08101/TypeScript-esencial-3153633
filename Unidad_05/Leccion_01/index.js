"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arreglo = new Array();
arreglo.push('hola!');
function mostrarEnConsolaString(mensaje) {
    console.log('%c' + mensaje, 'background: #222; color: #bada55');
    return mensaje;
}
mostrarEnConsolaString('Hola TypeScript!');
////// Con Genéricos:
function mostrarEnConsolaGenerico(valor) {
    console.log('%c' + valor, 'background: #222; color: #bada55');
    return valor;
}
const valorDevueltoArray = mostrarEnConsolaGenerico(['a', 'b', 'c']);
const valorDevueltoNumero = mostrarEnConsolaGenerico(10);
const valorDevueltoBoolean = mostrarEnConsolaGenerico(true);
mostrarEnConsolaGenerico('blanco');
//# sourceMappingURL=index.js.map