"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boxes = void 0;
const mongoose_1 = require("mongoose");
const boxeSchema = new mongoose_1.Schema({
    _idBoxe: {
        type: String,
        required: true
    },
    _idGranPremio: {
        type: String,
    },
    _idEscuderia: {
        type: String,
    },
    _idCoche: {
        type: String,
    },
    _idMecanico: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    _tiempo: {
        type: Number,
    }
});
exports.Boxes = (0, mongoose_1.model)('Boxes', boxeSchema);
