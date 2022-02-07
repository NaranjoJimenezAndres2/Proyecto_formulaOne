"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(idVehiculo, idPiloto, marca, modelo) {
        this._idVehiculo = idVehiculo;
        this._idPiloto = idPiloto;
        this._marca = marca;
        this._modelo = modelo;
    }
    get idVehiculo() {
        return this._idVehiculo;
    }
    get idPiloto() {
        return this._idPiloto;
    }
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
}
exports.Vehiculo = Vehiculo;
