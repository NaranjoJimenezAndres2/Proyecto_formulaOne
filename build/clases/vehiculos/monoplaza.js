"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monoplaza = void 0;
class Monoplaza {
    constructor(idMonoplaza, idPiloto, marca, modelo, motor, patrocinadores) {
        this._idMonoplaza = idMonoplaza;
        this._idPiloto = idPiloto;
        this._marca = marca;
        this._modelo = modelo;
        this._motor = motor;
        this._patrocinadores = patrocinadores;
    }
    get idMonoplaza() {
        return this._idMonoplaza;
    }
    get idPiloto() {
        return this._idPiloto;
    }
    get motor() {
        return this._motor;
    }
    get patrocinadores() {
        return this._patrocinadores;
    }
}
exports.Monoplaza = Monoplaza;
