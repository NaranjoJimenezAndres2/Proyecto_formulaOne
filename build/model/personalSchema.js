"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personal = void 0;
const mongoose_1 = require("mongoose");
const personalSchema = new mongoose_1.Schema({
    _idPersonal: {
        type: String,
        required: true
    },
    _nombre: {
        type: String,
    },
    _apellidos: {
        type: String,
    },
    _fechaContratacion: {
        type: Date,
    },
    _salario: {
        type: Number,
    },
    _idEscuderia: {
        type: String,
    },
    _idIngeniero: {
        type: String,
    },
    _especialidad: {
        type: String,
    },
    _idMecanico: {
        type: String,
    },
    _posicion: {
        type: String,
    },
    _paleta: {
        type: Boolean,
    },
    _idPiloto: {
        type: String,
    },
    _nacionalidad: {
        type: String,
    },
    _adelantamientos: {
        type: Number,
    },
    _abandonos: {
        type: Number,
    },
    _puntosTotales: {
        type: Number,
    },
    _vueltasRapidas: {
        type: Number,
    },
    _horasNocturnas: {
        type: Number
    }
});
exports.Personal = (0, mongoose_1.model)('Personal', personalSchema);
