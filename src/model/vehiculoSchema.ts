import {Schema, model } from 'mongoose';

const vehiculoSchema = new Schema({
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


export type iMonoplaza = {
    _idVehiculo: string,
    _idMonoplaza: string,
    _idPiloto: string,
    _marca: string,
    _modelo: string,
    _motor: string,

}




export const Vehiculos = model('Vehiculos', vehiculoSchema);