"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const mongoose_1 = require("mongoose");
const vehiculoSchema = new mongoose_1.Schema({
    _idVehiculo: {
        type: String,
        required: true
    },
    _idPiloto: {
        type: String,
    },
    _marca: {
        type: String,
    },
    _modelo: {
        type: String,
    },
    _idMonoplaza: {
        type: String,
    },
    _motor: {
        type: String,
    }
});
exports.Vehiculos = (0, mongoose_1.model)('Vehiculos', vehiculoSchema);
