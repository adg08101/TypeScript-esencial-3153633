"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculo(x, y) {
    return x * y;
}
const filtro = (valor) => {
    return valor.length >= 5;
};
const animales = ['perro', 'gato', 'pez', 'ave', 'hamster', 'conejo'];
const animalesFiltrados = animales.filter(filtro);
//# sourceMappingURL=index.js.map