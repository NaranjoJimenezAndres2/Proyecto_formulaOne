"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingeniero = void 0;
const empleado_1 = require("./empleado");
class Ingeniero extends empleado_1.Empleado {
    constructor(idIngeniero, especialidad, idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia, horasNocturnas) {
        super(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idIngeniero = idIngeniero;
        this._especialidad = especialidad;
        this._horasNocturnas = horasNocturnas;
    }
    get idIngeniero() {
        return this._idIngeniero;
    }
    get especialidad() {
        return this._especialidad;
    }
    get horasNocturnas() {
        return this._horasNocturnas;
    }
    salarioTotal() {
        let salario = super.salarioTotal();
        if (this._horasNocturnas > 0) {
            salario += this._horasNocturnas * 200;
        }
        return salario;
    }
}
exports.Ingeniero = Ingeniero;
