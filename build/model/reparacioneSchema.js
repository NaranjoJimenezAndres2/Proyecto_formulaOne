"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reparaciones = void 0;
const mongoose_1 = require("mongoose");
const reparacionSchema = new mongoose_1.Schema({
    _idReparacion: {
        type: String,
        required: true
    },
    _idIngeniero: {
        type: String,
        required: true
    },
    _idPieza: {
        type: String,
        required: true
    },
    _idCoche: {
        type: String,
        required: true
    },
    _cantidad: {
        type: Number,
        required: true
    },
    _fecha: {
        type: Date,
        required: true
    },
    _estado: {
        type: String,
        required: true
    }
});
exports.Reparaciones = (0, mongoose_1.model)('Reparaciones', reparacionSchema);
