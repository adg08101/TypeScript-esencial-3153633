"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipo numérico:
var Piso;
(function (Piso) {
    Piso[Piso["Primero"] = 1] = "Primero";
    Piso[Piso["Segundo"] = 2] = "Segundo";
    Piso[Piso["Tercero"] = 3] = "Tercero";
})(Piso || (Piso = {}));
// Tipo string:
var TipoCuarto;
(function (TipoCuarto) {
    TipoCuarto["Individual"] = "individual";
    TipoCuarto["Doble"] = "doble";
    TipoCuarto["Triple"] = "triple";
})(TipoCuarto || (TipoCuarto = {}));
let piso = Piso.Primero;
const cuarto = {
    id: 10,
    tipo: TipoCuarto.Individual,
    piso: Piso.Segundo,
    precioNoche: 80
};
//# sourceMappingURL=index.js.map