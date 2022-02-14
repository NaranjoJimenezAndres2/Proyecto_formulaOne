import {Schema, model } from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');

const recambioSchema = new Schema({
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


export type iRecambio = {
    _idPieza: string,
    _nombre: string,
    _precio: number,
    _tipo: string,
    _fabricante: string,
    _descripcion: string,
    _cantidadTotal: number,
    _idEscuderia: string,
}

recambioSchema.plugin(uniqueValidator, { message: 'Error, el recambio ya existe' });
export const Recambios = model('Recambios', recambioSchema);
