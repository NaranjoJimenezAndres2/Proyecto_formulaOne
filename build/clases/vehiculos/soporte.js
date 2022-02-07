"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soporte = void 0;
const vehiculo_1 = require("./vehiculo");
class Soporte extends vehiculo_1.Vehiculo {
    constructor(idVehiculo, idPiloto, marca, modelo, asistenciaMedica, asistenciaTecnica) {
        super(idVehiculo, idPiloto, marca, modelo);
        this._asistenciaMedica = asistenciaMedica;
        this._asistenciaTecnica = asistenciaTecnica;
    }
    get asistenciaMedica() {
        return this._asistenciaMedica;
    }
    get asistenciaTecnica() {
        return this._asistenciaTecnica;
    }
}
exports.Soporte = Soporte;
