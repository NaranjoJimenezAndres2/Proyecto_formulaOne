"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recambios = void 0;
const mongoose_1 = require("mongoose");
const recambioSchema = new mongoose_1.Schema({
    _idPieza: {
        type: String,
        required: true
    },
    _nombre: {
        type: String,
    },
    _precio: {
        type: Number,
    },
    _tipo: {
        type: String,
    },
    _fabricante: {
        type: String,
    },
    _descripcion: {
        type: String,
    },
    _cantidadTotal: {
        type: Number,
    },
    _idEscuderia: {
        type: String,
    }
});
exports.Recambios = (0, mongoose_1.model)('Recambios', recambioSchema);
