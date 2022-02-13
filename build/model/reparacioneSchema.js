"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reparaciones = void 0;
const mongoose_1 = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const reparacionSchema = new mongoose_1.Schema({
    _idReparacion: {
        type: String,
        required: true,
        unique: true,
    },
    _idIngeniero: {
        type: String,
    },
    _idPieza: {
        type: String,
    },
    _idCoche: {
        type: String,
    },
    _cantidad: {
        type: Number,
    },
    _fecha: {
        type: Date,
    },
    _estado: {
        type: String,
    }
});
reparacionSchema.plugin(uniqueValidator, { message: 'Error, el jugador ya existe' });
exports.Reparaciones = (0, mongoose_1.model)('Reparaciones', reparacionSchema);
