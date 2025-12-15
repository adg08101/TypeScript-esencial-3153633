"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////////
const datosHuesped = {
    idHuesped: '01',
    nombre: 'Dennis',
    apellido: 'Lizano',
    correo: 'dennis@c.com',
    direccion: 'calle 3, avenida 8',
    telefono: '8885698'
};
const reservacion = {
    idReservacion: 'r01',
    huesped: datosHuesped,
    fechaEntrada: new Date('2021/10/02'),
    fechaSalida: new Date('2021/10/05'),
    cuarto: {
        id: 10,
        tipo: 'individual',
        piso: 'primer piso',
        precioNoche: 80
    },
    nochesReservadas: 3
};
//# sourceMappingURL=index.js.map