"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
class Equipo {
    constructor(idEscuderia, nombre, pais, motorDistribuidor, presupuesto) {
        this._idEscuderia = idEscuderia;
        this._nombre = nombre;
        this._pais = pais;
        this._motorDistribuidor = motorDistribuidor;
        this._presupuesto = presupuesto;
    }
    get idEscuderia() {
        return this._idEscuderia;
    }
    get nombre() {
        return this._nombre;
    }
    get pais() {
        return this._pais;
    }
    get motorDistribuidor() {
        return this._motorDistribuidor;
    }
    get presupuesto() {
        return this._presupuesto;
    }
}
exports.Equipo = Equipo;
