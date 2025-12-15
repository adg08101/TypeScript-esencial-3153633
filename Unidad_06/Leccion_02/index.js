"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularCostoReservacion(costoNoche, totalNoches, formato) {
    const costo = costoNoche * totalNoches;
    return formato ? `${costo}` : costo;
}
//Aserción usando keyword 'as'
const costo = calcularCostoReservacion(90, 5, true);
const pedidoSupermercado = {
    id: 1,
    cliente: 'Paula',
    productos: ['tomates', 'pan'],
    fechaEntrega: new Date('2021-10-05'),
    supermercado: 'Tesco'
};
const pedido = pedidoSupermercado;
function procesarPedido(pedido) { }
procesarPedido(pedido);
//# sourceMappingURL=index.js.map