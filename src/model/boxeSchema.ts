import {Schema, model } from 'mongoose';

const boxeSchema = new Schema({
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
        type: Schema.Types.Mixed,

    },
    _tiempo: {
        type: Number,

    }
});

export type iBoxe = {
    _idBoxe: string,
    _idGranPremio: string,
    _idEscuderia: string,
    _idCoche: string,
    _idMecanico: string,
    _tiempo: number
}


export const Boxes = model('Boxes', boxeSchema);