"use strict";
// Tipos literales:
Object.defineProperty(exports, "__esModule", { value: true });
const saborHelado = 'vainilla';
let sabores = 'fresa';
let siempreTrue = true;
function crearHelado(sabor) {
    switch (sabor) {
        case 'chocolate':
            console.log('Haciendo helado de chocolate...');
            break;
        case 'vainilla':
            console.log('Haciendo helado de vainilla...');
            break;
        case 'fresa':
            console.log('Haciendo helado de fresa...');
            break;
        default:
            console.log('Este sabor no lo tenemos pero lo agregaremos a la lista');
    }
}
//# sourceMappingURL=index.js.map