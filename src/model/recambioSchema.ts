import {Schema, model } from 'mongoose';

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


export const Recambios = model('Recambios', recambioSchema);