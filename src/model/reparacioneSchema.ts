import {Schema, model } from 'mongoose';

const reparacionSchema = new Schema({
    _idReparacion: {
        type: String,
        required: true
    },
    _idIngeniero: { // id del ingeniero que realiza la reparacion
        type: String,
        required: true
    },
    _idPieza: { // id de la pieza que se repara
        type: String,
        required: true
    },
    _idCoche: { // id del coche que se repara
        type: String,
        required: true
    },
    _cantidad: { // cantidad de piezas que se reparan
        type: Number,
        required: true
    },
    _fecha: { // fecha de la reparacion
        type: Date,
        required: true
    },
    _estado: { // estado de la reparacion
        type: String,
        required: true
    }
});

export type iReparacion = {
    _idReparacion: string,
    _idIngeniero: string,
    _idPieza: string,
    _idCoche: string,
    _cantidad: number,
    _fecha: Date,
    _estado: string
}

export const Reparaciones = model('Reparaciones', reparacionSchema);
