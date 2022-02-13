import {Schema, model } from 'mongoose';

const equipoSchema = new Schema({
    _idEscuderia: {
        type: String,
        
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



export type iEquipo = {
    _idEscuderia: string,
    _nombre: string,
    _pais: string,
    _motorDistribuidor: string,
    _presupuesto: number
}



export const Equipos = model('Equipos', equipoSchema);