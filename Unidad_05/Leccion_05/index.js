"use strict";
//Definición de clase e interface genérica:
Object.defineProperty(exports, "__esModule", { value: true });
class Procesador {
    elementos = [];
    agregar(elemento) {
        this.elementos.push(elemento);
    }
    remover(index) {
        return this.elementos[index];
    }
    procesar(index) {
        return this.elementos[index].procesar();
    }
}
class PuestoBatidos extends Procesador {
}
const puestoBatidos = new PuestoBatidos();
puestoBatidos.agregar({
    elemento: 'fresa',
    procesar: () => 'batido-fresa'
});
class PeluqueriaPerros extends Procesador {
}
const bolaDeNieve = {
    nombre: 'Bola de Nieve',
    raza: 'Poodle'
};
const peluqueriaPerros = new PeluqueriaPerros();
peluqueriaPerros.agregar({
    elemento: bolaDeNieve,
    procesar: () => bolaDeNieve
});
//# sourceMappingURL=index.js.map