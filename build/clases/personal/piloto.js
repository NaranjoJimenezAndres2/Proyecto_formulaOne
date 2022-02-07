"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piloto = void 0;
const empleado_1 = require("./empleado");
class Piloto extends empleado_1.Empleado {
    constructor(idPiloto, nacionalidad, vueltasRapidas, adelantamientos, abandonos, puntosTotales, idPersonal, nombre, apellidos, fechaContratacion, salario, idEscuderia) {
        super(idPersonal, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idPiloto = idPiloto;
        this._nacionalidad = nacionalidad;
        this._vueltasRapidas = vueltasRapidas;
        this._adelantamientos = adelantamientos;
        this._abandonos = abandonos;
        this._puntosTotales = puntosTotales;
    }
    get idPiloto() {
        return this._idPiloto;
    }
    get nacionalidad() {
        return this._nacionalidad;
    }
    get vueltasRapidas() {
        return this._vueltasRapidas;
    }
    get adelantamientos() {
        return this._adelantamientos;
    }
    get abandonos() {
        return this._abandonos;
    }
    get puntosTotales() {
        return this._puntosTotales;
    }
    set idPiloto(value) {
        this._idPiloto = value;
    }
    set puntosTotales(value) {
        this._puntosTotales = value;
    }
    set adelandamientos(value) {
        this._adelantamientos = value;
    }
    salarioTotal() {
        let salario = super.salarioTotal();
        if (this._vueltasRapidas > 5) {
            salario += 1000;
        }
        if (this._adelantamientos > 20) {
            salario += 1000;
        }
        if (this._abandonos < 10) {
            salario += 1000;
        }
        if (this._puntosTotales > 20) {
            salario += (1000 * (this._puntosTotales - 20));
        }
        return salario;
    }
    getIdPiloto() {
        return this._idPiloto;
    }
    setPuntosTotales(puntos) {
        this._puntosTotales = puntos;
    }
}
exports.Piloto = Piloto;
