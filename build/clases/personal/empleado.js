"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia) {
        this._idEmpleado = idEmpleado;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fechaContratacion = fechaContratacion;
        this._salario = salario;
        this._idEscuderia = idEscuderia;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get fechaContratacion() {
        return this._fechaContratacion;
    }
    get salario() {
        return this._salario;
    }
    get idEscuderia() {
        return this._idEscuderia;
    }
    salarioTotal() {
        return this._salario;
    }
}
exports.Empleado = Empleado;
