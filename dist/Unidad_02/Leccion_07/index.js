"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lanzarError(mensajeError) {
    throw new Error(mensajeError);
}
function saludar(mensaje) {
    console.log(mensaje);
}
let saludo = saludar("Hola!");
let error = lanzarError("Un error sucedió");
//# sourceMappingURL=index.js.map