"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipos = void 0;
const mongoose_1 = require("mongoose");
const equipoSchema = new mongoose_1.Schema({
    _idEscuderia: {
        type: String,
        //required: true
    },
    _nombre: {
        type: String,
    },
    _pais: {
        type: String,
    },
    _motorDistribuidor: {
        type: String,
    },
    _presupuesto: {
        type: Number,
    }
});
exports.Equipos = (0, mongoose_1.model)('Equipos', equipoSchema);
