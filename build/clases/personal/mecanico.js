"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanico = void 0;
const empleado_1 = require("./empleado");
class Mecanico extends empleado_1.Empleado {
    constructor(idMecanico, posicion, paleta, idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia) {
        super(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idMecanico = idMecanico;
        this._posicion = posicion;
        this._paleta = paleta;
    }
    get idMecanico() {
        return this._idMecanico;
    }
    get posicion() {
        return this._posicion;
    }
    get paleta() {
        return this._paleta;
    }
    set idMecanico(value) {
        this._idMecanico = value;
    }
    set posicion(value) {
        this._posicion = value;
    }
    salarioTotal() {
        let salario = super.salarioTotal();
        if (this._paleta) {
            salario += 1000;
        }
        return salario;
    }
}
exports.Mecanico = Mecanico;
