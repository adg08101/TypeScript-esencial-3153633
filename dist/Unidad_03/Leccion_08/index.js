"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const huesped = {
    idHuesped: '01',
    nombre: 'Karol',
    apellido: 'Salazar',
    correo: 'k@gmail.com',
    direccion: 'Calle 8, Avenida 10',
    telefono: '1234567'
};
const nombrePropiedad = 'nombre';
function retornarValor(huesped, key) {
    return huesped[key];
}
retornarValor(huesped, 'correo');
//# sourceMappingURL=index.js.map