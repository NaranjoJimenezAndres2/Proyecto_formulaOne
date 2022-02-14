import {Schema, model } from 'mongoose';

var uniqueValidator = require('mongoose-unique-validator');

const reparacionSchema = new Schema({
    _idReparacion: {
        type: String,
        required: true,
        unique: true,
    },
    _idIngeniero: { // id del ingeniero que realiza la reparacion
        type: String,
        
    },
    _idPieza: { // id de la pieza que se reparano
        type: String,
        
    },
    _idCoche: { // id del coche que se repara
        type: String,
        
    },
    _cantidad: { // cantidad de piezas que se reparan
        type: Number,
        
    },
    _fecha: { // fecha de la reparacion
        type: Date,
        
    },
    _estado: { // estado de la reparacion
        type: String,
        
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


reparacionSchema.plugin(uniqueValidator, { message: 'Error, la reparacion ya existe' });

export const Reparaciones = model('Reparaciones', reparacionSchema);
