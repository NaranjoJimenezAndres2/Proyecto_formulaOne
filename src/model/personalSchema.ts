import {Schema, model } from 'mongoose';

const personalSchema = new Schema({
    _idPersonal: {
        type: String,
        required: true
    },
    _nombre: {
        type: String,
    },
    _apellidos: {
        type: String,
    },
    _fechaContratacion: {
        type: Date,
    },
    _salario: {
        type: Number,
    },
    _idEscuderia: {
        type: String,
    },
    _idIngeniero: {
        type: String,
    },
    _especialidad: {
        type: String,
    },
    _idMecanico: {
        type: String,
    },
    _posicion: {
        type: String,
    },
    _paleta: {
        type: Boolean,
    },
    _idPiloto: {
        type: String,
    },
    _nacionalidad: {
        type: String,
    },
    _adelantamientos: {
        type: Number,
    },
    _abandonos: {
        type: Number,
    },
    _puntosTotales: {
        type: Number,
    },
    _vueltasRapidas:{
        type: Number,
    },
    _horasNocturnas: {
        type: Number
    }
});

export type iPersonal = {
    _idPersonal: string,
    _nombre: string,
    _apellidos: string,
    _fechaContratacion: Date,
    _salario: number,
    _idEscuderia: string,
}

export type iIngeniero = {
    _idPersonal: string,
    _nombre: string,
    _apellidos: string,
    _fechaContratacion: Date,
    _salario: number,
    _idEscuderia: string,
    _idIngeniero: string,
    _especialidad: string,
    _horasNocturnas: number
}

export type iMecanico = {
    _idPersonal: string,
    _nombre: string,
    _apellidos: string,
    _fechaContratacion: Date,
    _salario: number,
    _idEscuderia: string,
    _idMecanico: string,
    _posicion: string,
    _paleta: boolean,
}

export type iPiloto = {
    _idPersonal: string,
    _nombre: string,
    _apellidos: string,
    _fechaContratacion: Date,
    _salario: number,
    _idEscuderia: string,
    _idPiloto: string,
    _nacionalidad: string,
    _adelantamientos: number,
    _abandonos: number,
    _vueltasRapidas: number,
    _puntosTotales: number,
}

export type xPersonal = {
    _idPersonal: string,
    _nombre: string,
    _apellidos: string,
    _fechaContratacion: Date,
    _salario: number,
    _idEscuderia: string,
    _idIngeniero: string,
    _especialidad: string,
    _idMecanico: string,
    _posicion: string,
    _paleta: boolean,
    _idPiloto: string,
    _nacionalidad: string,
    _adelantamientos: number,
    _abandonos: number,
    _puntosTotales: number,
    _vueltasRapidas: number,
    _horasNocturnas: number

}

export const Personal = model('Personal', personalSchema);


