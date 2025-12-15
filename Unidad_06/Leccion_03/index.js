"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objeto = {
    a: 'prueba'
};
function assert(condicion, mensaje) {
    if (!condicion)
        throw new Error(mensaje);
}
assert(objeto.b, 'B no existe');
const c = objeto.b.c;
function assertString(condicion, mensaje) {
    if (typeof condicion !== 'string')
        throw new Error(mensaje);
}
assertString(objeto.a, 'A no es string');
//# sourceMappingURL=index.js.map