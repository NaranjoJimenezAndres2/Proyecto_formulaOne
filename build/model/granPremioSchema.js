"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.granPremios = void 0;
const mongoose_1 = require("mongoose");
const granPremioSchema = new mongoose_1.Schema({
    _idGranPremio: {
        type: String,
        required: true
    },
    _nombre: {
        type: String,
    },
    _temporada: {
        type: String,
    },
    _pais: {
        type: String,
    },
    _clasificacion: [{}],
    _vueltaRapida: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    _abandonos: {
        type: mongoose_1.Schema.Types.Mixed,
    }
});
exports.granPremios = (0, mongoose_1.model)('GranPremios', granPremioSchema);
