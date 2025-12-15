"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fechaNacimiento;
let pruebaTresTipos;
pruebaTresTipos = 'Soy un string';
pruebaTresTipos = 123;
//Error de tipo:
pruebaTresTipos = (Array);
// En parámetros de funciones:
function calcularPromedio(valores, total) {
    if (typeof valores === 'number' && total) {
        return valores / total;
    }
    if (Array.isArray(valores) && valores.length > 0) {
        return valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0) / valores.length;
    }
    throw Error('Paramétros no son válidos');
}
calcularPromedio([10, 34, 56, 78]);
calcularPromedio(156, 21);
calcularPromedio(0, 3);
calcularPromedio([]);
//# sourceMappingURL=index.js.map