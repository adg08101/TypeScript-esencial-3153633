"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Partial:
function generarComputadora(computadora) {
    return {
        id: '01',
        fabricante: 'Apple',
        modelo: 'MacBook Pro 13',
        procesador: 'Apple M1 chip',
        memoriaRamGb: 8,
        discoDuroGb: 256,
        ...computadora
    };
}
const nuevaComputadora = generarComputadora({
    discoDuroGb: 512,
    memoriaRamGb: 16
});
// Required:
const conTouchBar = generarComputadora({
    touchBar: true
});
const conTouchBarBien = {
    ...generarComputadora({}),
    touchBar: true
};
//# sourceMappingURL=index.js.map