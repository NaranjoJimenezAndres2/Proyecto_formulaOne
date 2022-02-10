"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const equipoSchema_1 = require("../model/equipoSchema");
const vehiculoSchema_1 = require("../model/vehiculoSchema");
const recambioSchema_1 = require("../model/recambioSchema");
const personalSchema_1 = require("../model/personalSchema");
const granPremioSchema_1 = require("../model/granPremioSchema");
const boxeSchema_1 = require("../model/boxeSchema");
const reparacioneSchema_1 = require("../model/reparacioneSchema");
const mecanico_1 = require("../clases/personal/mecanico");
const ingeniero_1 = require("../clases/personal/ingeniero");
const piloto_1 = require("../clases/personal/piloto");
const mecanica_1 = require("../clases/recambios/mecanica");
class Routes {
    constructor() {
        this.getEquipos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    equipoSchema_1.Equipos.find({})
                        .then((equipos) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(equipos));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getVehiculos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    vehiculoSchema_1.Vehiculos.find({})
                        .then((vehiculos) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(vehiculos));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getRecambios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    recambioSchema_1.Recambios.find({})
                        .then((recambios) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(recambios));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getGranPremios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    granPremioSchema_1.granPremios.find({})
                        .then((granPremios) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(granPremios));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getReparaciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    reparacioneSchema_1.Reparaciones.find({})
                        .then((reparaciones) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(reparaciones));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        /*
            private getEscuderia = async (req: Request, res: Response) => {
                const promise = new Promise<any>( async (resolve, reject) => {
                    await db.conectarBD()
                    .then( async () => {
                        Equipos.aggregate([
                            {
                                $lookup: {
                                localField: "_nombre",
                                from: "vehiculos",
                                foreignField: "_marca",
                                as: "pilotos"
                                }
                            },
                            {$unwind: "$pilotos"}
                        ])
                        .then( (escuderia) => {
                            db.desconectarBD()
                            .then( () => resolve(escuderia) )
                            .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                        })
                        .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                    })
                    .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
                })
                res.json(await promise)
                db.desconectarBD()
            }
            */
        this.getEscuderia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    equipoSchema_1.Equipos.aggregate([
                        {
                            $lookup: {
                                localField: "_nombre",
                                from: "vehiculos",
                                foreignField: "_marca",
                                as: "monoplazas"
                            }
                        },
                        { $unwind: "$monoplazas" },
                        {
                            $lookup: {
                                localField: "monoplazas._idPiloto",
                                from: "personals",
                                foreignField: "_idPiloto",
                                as: "pilotos"
                            }
                        }
                    ])
                        .then((escuderia) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(escuderia));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        //esto funciona al pelo
        this.getSalarios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                let arrayResultado = [];
                let query = yield personalSchema_1.Personal.find({ _idEscuderia: req.params.idEscuderia });
                console.log(query);
                let dPersonal;
                let tmpPersonal;
                for (dPersonal of query) {
                    if (dPersonal._idMecanico) {
                        tmpPersonal = new mecanico_1.Mecanico(dPersonal._idMecanico, dPersonal._posicion, dPersonal._paleta, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario, dPersonal._idEscuderia);
                    }
                    else if (dPersonal._idIngeniero) {
                        tmpPersonal = new ingeniero_1.Ingeniero(dPersonal._idIngeniero, dPersonal._especialidad, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario, dPersonal._idEscuderia, dPersonal._horasNocturnas);
                    }
                    else if (dPersonal._idMecanico) {
                        tmpPersonal = new mecanico_1.Mecanico(dPersonal._idMecanico, dPersonal._posicion, dPersonal._paleta, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario, dPersonal._idEscuderia);
                    }
                    else {
                        tmpPersonal = new piloto_1.Piloto(dPersonal._idPiloto, dPersonal._nacionalidad, dPersonal._vueltasRapidas, dPersonal._adelantamientos, dPersonal._abandonos, dPersonal._puntosTotales, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario, dPersonal._idEscuderia);
                    }
                    let sueldoTotal = 0;
                    sueldoTotal = tmpPersonal.salarioTotal();
                    console.log(sueldoTotal);
                    let dSalarios = {
                        _idPersonal: null,
                        _nombre: null,
                        _apellidos: null,
                        _fechaContratacion: null,
                        _salario: null
                    };
                    dSalarios._idPersonal = dPersonal._idPersonal,
                        dSalarios._nombre = dPersonal._nombre,
                        dSalarios._apellidos = dPersonal._apellidos,
                        dSalarios._fechaContratacion = dPersonal._fechaContratacion,
                        dSalarios._salario = sueldoTotal;
                    arrayResultado.push(dSalarios);
                }
                res.json(arrayResultado);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.getPrecioXReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                let query = yield recambioSchema_1.Recambios.aggregate([
                    { $match: { _idReparacion: req.params.idReparacion } },
                    {
                        $lookup: {
                            localField: "_idPieza",
                            from: "reparaciones",
                            foreignField: "_idPieza",
                            as: "extended"
                        }
                    },
                    { $unwind: "$extended" },
                    {
                        $group: {
                            _id: { _idPieza: "$_idPieza",
                                _idEscuderia: "$_idEscuderia" },
                            precio: {
                                $sum: { $multiply: ["$_precio", "$extended._cantidad"] }
                            }
                        }
                    }
                ])
                    .then((precioXReparacion) => {
                    database_1.db.desconectarBD()
                        .then(() => res.json(precioXReparacion));
                });
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
        });
        this.getPuntos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    granPremioSchema_1.granPremios.aggregate([
                        {
                            $match: { "_temporada": "2021" }
                        },
                        {
                            $unwind: "$_clasificacion"
                        },
                        {
                            $group: {
                                _id: { temporada: "$_temporada" },
                                puntosALO: { $sum: "$_clasificacion.ALO" },
                                puntosVER: { $sum: "$_clasificacion.VER" },
                                puntosHAM: { $sum: "$_clasificacion.HAM" },
                                puntosPER: { $sum: "$_clasificacion.PER" },
                                puntosNOR: { $sum: "$_clasificacion.NOR" },
                                puntosLEC: { $sum: "$_clasificacion.LEC" },
                                puntosOCO: { $sum: "$_clasificacion.OCO" },
                                puntosRIC: { $sum: "$_clasificacion.RIC" },
                                puntosGAS: { $sum: "$_clasificacion.GAS" },
                                puntosVET: { $sum: "$_clasificacion.VET" },
                                puntosSAI: { $sum: "$_clasificacion.SAI" },
                                puntosRUS: { $sum: "$_clasificacion.RUS" },
                            }
                        }, {
                            $project: {
                                _id: 0,
                                temporada: "$_id.temporada",
                                puntosALO: "$puntosALO",
                                puntosVER: "$puntosVER",
                                puntosHAM: "$puntosHAM",
                                puntosPER: "$puntosPER",
                                puntosNOR: "$puntosNOR",
                                puntosLEC: "$puntosLEC",
                                puntosOCO: "$puntosOCO",
                                puntosRIC: "$puntosRIC",
                                puntosGAS: "$puntosGAS",
                                puntosVET: "$puntosVET",
                                puntosSAI: "$puntosSAI",
                                puntosRUS: "$puntosRUS",
                            }
                        }
                    ])
                        .then((puntos) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(puntos));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        //introducir los datos puntos de la coleccion granpremios en cada campo _puntosTotales de la clase piloto depenidendo de su _idPiloto
        /*
                private getPuntosPilotos1 = async (req: Request, res: Response) => {
                    await db.conectarBD()
                            .then( async () => {
                                let dPuntosPilotos : iPuntosPilotos= {
                                    _idPiloto: null,
                                    _nombre: null,
                                    _apellidos: null,
                                    _fechaContratacion: null,
                                    _puntosTotales: null
                                }
        
                                let arrayResultado : Array<iPuntosPilotos> = []
        
        
        
                                let query: any =  await Personal.find({})
        
                                //console.log(query)
        
                                let dPersonal: xPersonal
                                let tmpPersonal : Piloto
        
                                for (dPersonal of  query){
                                    if (dPersonal._idPiloto){
                                        tmpPersonal = new Piloto (dPersonal._idPiloto, dPersonal._nacionalidad, dPersonal._vueltasRapidas, dPersonal._adelantamientos, dPersonal._abandonos, dPersonal._puntosTotales, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario,dPersonal._idEscuderia)
                                    
                                        let query2 : any = await granPremios.aggregate([
                                            {
                                                $match: {"_temporada": "2021"}
                                            }
                                        
                                            ,
                                            {
                                                $unwind: "$_clasificacion"
                                            },
                                            {
                                                $group: {
                                                    _id: {temporada : "$_temporada"},//error absurdo, funciona bien
                                                    puntosALO: {$sum: "$_clasificacion.ALO"},
                                                    puntosVER: {$sum: "$_clasificacion.VER"},
                                                    puntosHAM: {$sum: "$_clasificacion.HAM"},
                                                    puntosPER: {$sum: "$_clasificacion.PER"},
                                                    puntosNOR: {$sum: "$_clasificacion.NOR"},
                                                    puntosLEC: {$sum: "$_clasificacion.LEC"},
                                                    puntosOCO: {$sum: "$_clasificacion.OCO"},
                                                    puntosRIC: {$sum: "$_clasificacion.RIC"},
                                                    puntosGAS: {$sum: "$_clasificacion.GAS"},
                                                    puntosVET: {$sum: "$_clasificacion.VET"},
                                                    puntosSAI: {$sum: "$_clasificacion.SAI"},
                                                    puntosRUS: {$sum: "$_clasificacion.RUS"},
        
                                                    
                                                    
                                                }
                                            },{
                                               
                                                    $project: {
                                                        _id: 0,
                                                        temporada:"$_id.temporada",
                                                        puntosALO: "$puntosALO",
                                                        puntosVER: "$puntosVER",
                                                        puntosHAM: "$puntosHAM",
                                                        puntosPER: "$puntosPER",
                                                        puntosNOR: "$puntosNOR",
                                                        puntosLEC: "$puntosLEC",
                                                        puntosOCO: "$puntosOCO",
                                                        puntosRIC: "$puntosRIC",
                                                        puntosGAS: "$puntosGAS",
                                                        puntosVET: "$puntosVET",
                                                        puntosSAI: "$puntosSAI",
                                                        puntosRUS: "$puntosRUS",
        
                                                }
                                            }
                                        ])
                                        //console.log(query2)
        
                                        let dSchema :any = {
                                            temporada: null,
                                            puntosALO: null,
                                            puntosVER: null,
                                            puntosHAM: null,
                                            puntosPER: null,
                                            puntosNOR: null,
                                            puntosLEC: null,
                                            puntosOCO: null,
                                            puntosRIC: null,
                                            puntosGAS: null,
                                            puntosVET: null,
                                            puntosSAI: null,
                                            puntosRUS: null,
                                            
                                        }
        
                                        dSchema.temporada = query2[0].temporada
                                        dSchema.puntosALO = query2[0].puntosALO
                                        dSchema.puntosVER = query2[0].puntosVER
                                        dSchema.puntosHAM = query2[0].puntosHAM
                                        dSchema.puntosPER = query2[0].puntosPER
                                        dSchema.puntosNOR = query2[0].puntosNOR
                                        dSchema.puntosLEC = query2[0].puntosLEC
                                        dSchema.puntosOCO = query2[0].puntosOCO
                                        dSchema.puntosRIC = query2[0].puntosRIC
                                        dSchema.puntosGAS = query2[0].puntosGAS
                                        dSchema.puntosVET = query2[0].puntosVET
                                        dSchema.puntosSAI = query2[0].puntosSAI
                                        dSchema.puntosRUS = query2[0].puntosRUS
        
        
                                        //console.log(dSchema)
        
        //modificar los puntos totales de los pilotos
        
                                        if (dPersonal._idPiloto == "ALO"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosALO)
                                        }
                                        else if (dPersonal._idPiloto == "VER"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosVER)
                                        }
                                        else if (dPersonal._idPiloto == "HAM"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosHAM)
                                        }
                                        else if (dPersonal._idPiloto == "PER"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosPER)
                                        }
                                        else if (dPersonal._idPiloto == "NOR"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosNOR)
                                        }
                                        else if (dPersonal._idPiloto == "LEC"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosLEC)
                                        }
                                        else if (dPersonal._idPiloto == "OCO"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosOCO)
                                        }
                                        else if (dPersonal._idPiloto == "RIC"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosRIC)
                                        }
                                        else if (dPersonal._idPiloto == "GAS"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosGAS)
                                        }
                                        else if (dPersonal._idPiloto == "VET"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosVET)
                                        }
                                        else if (dPersonal._idPiloto == "SAI"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosSAI)
                                        }
                                        else if (dPersonal._idPiloto == "RUS"){
                                            tmpPersonal.setPuntosTotales(dSchema.puntosRUS)
                                        }
                                        else{
                                            tmpPersonal.setPuntosTotales(0)
                                        }
        
        
                                        dPuntosPilotos._idPiloto = dPersonal._idPiloto,
                                        dPuntosPilotos._nombre = dPersonal._nombre,
                                        dPuntosPilotos._apellidos = dPersonal._apellidos,
                                        dPuntosPilotos._fechaContratacion = dPersonal._fechaContratacion,
                                        dPuntosPilotos._puntosTotales = tmpPersonal._puntosTotales
        
                                    
        
                                        //console.log(dPuntosPilotos)
                                        
                                        //console.log(arrayResultado)
                                        
        
        
        arrayResultado.push(dPuntosPilotos)
                                }
                                //console.log(dPuntosPilotos)
                                        
                                
                            }
                            
                            console.log(arrayResultado)
        
                            res.json(arrayResultado)
                        })
                        .catch((mensaje) => {
                            res.send(mensaje)
                        })
                        await db.desconectarBD()
                    }
        
        
        */
        this.getPuntosPilotos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                let arrayResultado = [];
                let query = yield personalSchema_1.Personal.find({});
                //console.log(query)
                let dPersonal;
                let tmpPersonal;
                for (dPersonal of query) {
                    if (dPersonal._idPiloto) {
                        tmpPersonal = new piloto_1.Piloto(dPersonal._idPiloto, dPersonal._nacionalidad, dPersonal._vueltasRapidas, dPersonal._adelantamientos, dPersonal._abandonos, dPersonal._puntosTotales, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario, dPersonal._idEscuderia);
                        let query2 = yield granPremioSchema_1.granPremios.aggregate([
                            {
                                $match: { "_temporada": "2021" }
                            },
                            {
                                $unwind: "$_clasificacion"
                            },
                            {
                                $group: {
                                    _id: { temporada: "$_temporada" },
                                    puntosALO: { $sum: "$_clasificacion.ALO" },
                                    puntosVER: { $sum: "$_clasificacion.VER" },
                                    puntosHAM: { $sum: "$_clasificacion.HAM" },
                                    puntosPER: { $sum: "$_clasificacion.PER" },
                                    puntosNOR: { $sum: "$_clasificacion.NOR" },
                                    puntosLEC: { $sum: "$_clasificacion.LEC" },
                                    puntosOCO: { $sum: "$_clasificacion.OCO" },
                                    puntosRIC: { $sum: "$_clasificacion.RIC" },
                                    puntosGAS: { $sum: "$_clasificacion.GAS" },
                                    puntosVET: { $sum: "$_clasificacion.VET" },
                                    puntosSAI: { $sum: "$_clasificacion.SAI" },
                                    puntosRUS: { $sum: "$_clasificacion.RUS" },
                                }
                            }, {
                                $project: {
                                    _id: 0,
                                    temporada: "$_id.temporada",
                                    puntosALO: "$puntosALO",
                                    puntosVER: "$puntosVER",
                                    puntosHAM: "$puntosHAM",
                                    puntosPER: "$puntosPER",
                                    puntosNOR: "$puntosNOR",
                                    puntosLEC: "$puntosLEC",
                                    puntosOCO: "$puntosOCO",
                                    puntosRIC: "$puntosRIC",
                                    puntosGAS: "$puntosGAS",
                                    puntosVET: "$puntosVET",
                                    puntosSAI: "$puntosSAI",
                                    puntosRUS: "$puntosRUS",
                                }
                            }
                        ]);
                        //console.log(query2)
                        let dSchema = {
                            temporada: null,
                            puntosALO: null,
                            puntosVER: null,
                            puntosHAM: null,
                            puntosPER: null,
                            puntosNOR: null,
                            puntosLEC: null,
                            puntosOCO: null,
                            puntosRIC: null,
                            puntosGAS: null,
                            puntosVET: null,
                            puntosSAI: null,
                            puntosRUS: null,
                        };
                        dSchema.temporada = query2[0].temporada;
                        dSchema.puntosALO = query2[0].puntosALO;
                        dSchema.puntosVER = query2[0].puntosVER;
                        dSchema.puntosHAM = query2[0].puntosHAM;
                        dSchema.puntosPER = query2[0].puntosPER;
                        dSchema.puntosNOR = query2[0].puntosNOR;
                        dSchema.puntosLEC = query2[0].puntosLEC;
                        dSchema.puntosOCO = query2[0].puntosOCO;
                        dSchema.puntosRIC = query2[0].puntosRIC;
                        dSchema.puntosGAS = query2[0].puntosGAS;
                        dSchema.puntosVET = query2[0].puntosVET;
                        dSchema.puntosSAI = query2[0].puntosSAI;
                        dSchema.puntosRUS = query2[0].puntosRUS;
                        //console.log(dSchema)
                        //modificar los puntos totales de los pilotos
                        if (dPersonal._idPiloto == "ALO") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosALO);
                        }
                        else if (dPersonal._idPiloto == "VER") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosVER);
                        }
                        else if (dPersonal._idPiloto == "HAM") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosHAM);
                        }
                        else if (dPersonal._idPiloto == "PER") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosPER);
                        }
                        else if (dPersonal._idPiloto == "NOR") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosNOR);
                        }
                        else if (dPersonal._idPiloto == "LEC") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosLEC);
                        }
                        else if (dPersonal._idPiloto == "OCO") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosOCO);
                        }
                        else if (dPersonal._idPiloto == "RIC") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosRIC);
                        }
                        else if (dPersonal._idPiloto == "GAS") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosGAS);
                        }
                        else if (dPersonal._idPiloto == "VET") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosVET);
                        }
                        else if (dPersonal._idPiloto == "SAI") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosSAI);
                        }
                        else if (dPersonal._idPiloto == "RUS") {
                            tmpPersonal.setPuntosTotales(dSchema.puntosRUS);
                        }
                        else {
                            tmpPersonal.setPuntosTotales(0);
                        }
                        let dPuntosPilotos = {
                            _idPiloto: null,
                            _nombre: null,
                            _apellidos: null,
                            _fechaContratacion: null,
                            _puntosTotales: null
                        };
                        dPuntosPilotos._idPiloto = dPersonal._idPiloto,
                            dPuntosPilotos._nombre = dPersonal._nombre,
                            dPuntosPilotos._apellidos = dPersonal._apellidos,
                            dPuntosPilotos._fechaContratacion = dPersonal._fechaContratacion,
                            dPuntosPilotos._puntosTotales = tmpPersonal._puntosTotales;
                        //console.log(dPuntosPilotos)
                        //console.log(arrayResultado)
                        arrayResultado.push(dPuntosPilotos);
                    }
                    //console.log(dPuntosPilotos)
                }
                console.log(arrayResultado);
                res.json(arrayResultado);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        /*
        
        *******************************************/
        /*private getPersonal = async (req: Request, res: Response) => {
            const promise = new Promise<any>( async (resolve, reject) => {
                await db.conectarBD()
                .then( async () => {
                    Personal.find({})
                    .then( (personal) => {
                        db.desconectarBD()
                        .then( () => resolve(personal) )
                        .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    })
                    .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
            })
            res.json(await promise)
            db.desconectarBD()
        }*/
        //obtener mediante metodo get el personal de una escuderia
        this.getPersonalEscuderia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    personalSchema_1.Personal.find({ _idEscuderia: req.params.idEscuderia })
                        .then((personal) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(personal));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getEquipoId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    equipoSchema_1.Equipos.find({ _idEscuderia: req.params.idEscuderia })
                        .then((equipo) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(equipo));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getReparacionId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    reparacioneSchema_1.Reparaciones.find({ _idReparacion: req.params.idReparacion })
                        .then((reparacion) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(reparacion));
                        //.catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    });
                    //.catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.postReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                reparacioneSchema_1.Reparaciones.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`)); //si hay alguna limitacion de Schema salta este error
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        this.postEquipo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                equipoSchema_1.Equipos.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`)); //si hay alguna limitacion de Schema salta este error
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        /*private postGranPremio = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async () => {
                granPremios.create(req.body)
                .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`) )
                .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`)) //si hay alguna limitacion de Schema salta este error
            })
            .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
            await db.conectarBD()
        }*/
        //introducir un vehiculo del tipo monoplaza dentro de la base de datos mediante el metodo post
        this.postMonoplaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaMonoplaza = new vehiculoSchema_1.Vehiculos({
                _idVehiculo: req.body._idVehiculo,
                _idMonoplaza: req.body._idMonoplaza,
                _idPiloto: req.body._idPiloto,
                _marca: req.body._marca,
                _modelo: req.body._modelo,
                _motor: req.body._motor,
            });
            console.log(pShemaMonoplaza);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaMonoplaza.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.postRecambio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                recambioSchema_1.Recambios.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        this.postPersonal = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                personalSchema_1.Personal.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        //introducir un personal del tipo piloto dentro de la base de datos mediante el metodo post
        this.postPiloto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaPiloto = new personalSchema_1.Personal({
                _idPersonal: req.body._idPersonal,
                _idPiloto: req.body._idPiloto,
                _nombre: req.body._nombre,
                _apellidos: req.body._apellidos,
                _fechaContratacion: req.body._fechaContratacion,
                _salario: req.body._salario,
                _idEscuderia: req.body._idEscuderia,
                _nacionalidad: req.body._nacionalidad,
                _adelantamientos: req.body._adelantamientos,
                _abandonos: req.body._abandonos,
                _puntosTotales: req.body._puntosTotales
            });
            console.log(pShemaPiloto);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaPiloto.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir un personal del tipo ingeniero dentro de la base de datos mediante el metodo post
        this.postIngeniero = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaIngeniero = new personalSchema_1.Personal({
                _idPersonal: req.body._idPersonal,
                _idIngeniero: req.body._idIngeniero,
                _nombre: req.body._nombre,
                _apellidos: req.body._apellidos,
                _fechaContratacion: req.body._fechaContratacion,
                _salario: req.body._salario,
                _idEscuderia: req.body._idEscuderia,
                _especialidad: req.body._especialidad
            });
            console.log(pShemaIngeniero);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaIngeniero.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir un personal del tipo mecanico dentro de la base de datos mediante el metodo post
        this.postMecanico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaMecanico = new personalSchema_1.Personal({
                _idPersonal: req.body._idPersonal,
                _idMecanico: req.body._idMecanico,
                _nombre: req.body._nombre,
                _apellidos: req.body._apellidos,
                _fechaContratacion: req.body._fechaContratacion,
                _salario: req.body._salario,
                _idEscuderia: req.body._idEscuderia,
                _especialidad: req.body._especialidad
            });
            console.log(pShemaMecanico);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaMecanico.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir elementos en la coleccion granPremio por el metodo post
        this.postGranPremio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaGranPremio = new granPremioSchema_1.granPremios({
                _idGranPremio: req.body._idGranPremio,
                _nombre: req.body._nombre,
                _temporada: req.body._temporada,
                _pais: req.body._pais,
                _clasificacion: req.body._clasificacion,
                _vueltaRapida: req.body._vueltaRapida,
                _abandonos: req.body._abandonos
            });
            console.log(pShemaGranPremio);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaGranPremio.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir elementos en la coleccion boxes por el metodo post
        this.postBox = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                boxeSchema_1.Boxes.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        /*private postBoxes = async (req: Request, res: Response) => {
    
            let pShemaBoxes= new Boxes({
                _idBoxe: req.body._idBoxe,
                _idgranPremio: req.body._idgranPremio,
                _idEscuderia: req.body._idEscuderia,
                _idCoche: req.body._idCoche,
                _idMecanico: req.body._idMecanico,
                _tiempo: req.body._tiempo
            })
    
            console.log(pShemaBoxes)
    
            await db.conectarBD()
            .then( async () => {
                await pShemaBoxes.save()
                .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
            })
            .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
            db.desconectarBD()
        }*/
        //modificar el campo precio de la base de datos mediante el metodo put en la ruta /recambios/:idPieza
        this.updateRecambio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const { idPieza } = req.params;
            console.log(idPieza);
            console.log(req.body);
            yield database_1.db.conectarBD();
            yield equipoSchema_1.Equipos.findOneAndUpdate({ _idPieza: idPieza }, {
                _nombre: req.body._nombre,
                _precio: req.body._precio,
                _tipo: req.body._tipo,
                _fabricante: req.body._fabricante,
                _descripcion: req.body._descripcion,
                _cantidadTotal: req.body._cantidadTotal,
                _idEscuderia: req.body._idEscuderia,
            }, {
                new: true,
                runValidators: true
            })
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.updateEquipo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { idEscuderia } = req.params;
            console.log(idEscuderia);
            console.log(req.body);
            yield database_1.db.conectarBD();
            yield equipoSchema_1.Equipos.findOneAndUpdate({ _idEscuderia: idEscuderia }, {
                _idEscuderia: req.body._idEscuderia,
                _nombre: req.body._nombre,
                _pais: req.body._pais,
                _motorDistribuidor: req.body._motorDistribuidor,
                _presupuesto: req.body._presupuesto
            }, {
                new: true,
                runValidators: true
            })
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.updateReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //sacar una funcion para hallar la hora
            let fecha = new Date();
            const { idReparacion } = req.params;
            console.log(idReparacion);
            const { _idReparacion, _idIngeniero, _idPieza, _idCoche, _cantidad, _estado } = req.body;
            console.log(_estado);
            yield database_1.db.conectarBD();
            if (_estado == 'Cancelado') {
                yield reparacioneSchema_1.Reparaciones.findOneAndUpdate({ _idReparacion: idReparacion }, {
                    _cantidad: _cantidad,
                    _estado: _estado,
                    _fechaCancelacion: fecha
                }, {
                    new: true,
                    runValidators: true
                });
                //console.log(_cantidad)
                let query = yield recambioSchema_1.Recambios.find({ _idPieza: _idPieza });
                let cantidad = query[0]._cantidadTotal;
                //console.log(cantidad)
                let nuevaCantidad = cantidad + _cantidad;
                //console.log(nuevaCantidad)
                yield recambioSchema_1.Recambios.findOneAndUpdate({ _idPieza: _idPieza }, { _cantidadTotal: nuevaCantidad }, {
                    new: true,
                    runValidators: true
                })
                    .then((doc) => res.send(doc))
                    .catch((err) => res.send('Error: ' + err));
            }
            else {
                yield reparacioneSchema_1.Reparaciones.findOneAndUpdate({ _idReparacion: idReparacion }, {
                    //_idReparacion: req.body._idReparacion,
                    //_idCoche: req.body._idCoche,
                    //_idIngeniero: req.body._idIngeniero,
                    //_idPieza: req.body._idPieza,
                    _fecha: fecha,
                    //_cantidad: req.body._cantidad,
                    _estado: _estado
                }, {
                    new: true,
                    runValidators: true
                })
                    .then((doc) => res.send(doc))
                    .catch((err) => res.send('Error: ' + err));
            }
            yield database_1.db.desconectarBD();
        });
        //eliminar un empleado de la coleccion personal mediante el metodo delete en la ruta /personal/:idPersonal
        this.deletePersonal = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                personalSchema_1.Personal.findOneAndDelete({ _idPersonal: req.params.idPersonal })
                    .then((mensaje) => res.send(`El documento se ha eliminado correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la eliminación del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        this.deleteEscuderia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                equipoSchema_1.Equipos.findOneAndDelete({ _idEscuderia: req.params.idEscuderia })
                    .then((mensaje) => res.send(`El documento se ha eliminado correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la eliminación del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        this.deletePieza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                recambioSchema_1.Recambios.findOneAndDelete({ _idPieza: req.params.idPieza })
                    .then((mensaje) => res.send(`El documento se ha eliminado correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la eliminación del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        //******************************************************************************************************************************* */
        //realizar un post de un documento en la coleccion reparaciones comparando con la cantidad disponible en la coleccion recambios
        this.updateReparacionGorda = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _idReparacion, _idIngeniero, _idPieza, _idCoche, _cantidad, _fecha, _estado } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _idReparacion: _idReparacion,
                _idIngeniero: _idIngeniero,
                _idPieza: _idPieza,
                _idCoche: _idCoche,
                _cantidad: _cantidad,
                _fecha: _fecha,
                _estado: _estado
            };
            const oSchema = new reparacioneSchema_1.Reparaciones(dSchema);
            yield oSchema.save()
                .then((doc) => 
            /* .then( async () => {
                    Reparaciones.create(req.body)
                    .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))//  req.body._idRecambio
               /* })
                .catch((mensaje) => {
                    res.send(mensaje)
                })*/
            database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                let query = yield recambioSchema_1.Recambios.aggregate([
                    { $match: { _idPieza: dSchema._idPieza }
                    },
                    {
                        $lookup: {
                            localField: "_idPieza",
                            from: "reparaciones",
                            foreignField: "_idPieza",
                            as: "extended"
                        }
                    }
                    // ,{$unwind: "$extended"},
                ]);
                console.log(query);
                let dReparaciones;
                let zReparaciones;
                let tmpReparaciones;
                for (dReparaciones of query) {
                    if (dReparaciones.extended.length >= 0) {
                        zReparaciones = dReparaciones.extended[dReparaciones.extended.length - 1];
                        tmpReparaciones = new mecanica_1.Mecanica(zReparaciones._idReparacion, zReparaciones._idPieza, dReparaciones._nombre, dReparaciones._precio, dReparaciones._tipo, dReparaciones._fabricante, dReparaciones._descripcion, zReparaciones._fecha, dReparaciones._cantidadTotal, dReparaciones._idEscuderia, zReparaciones._idIngeniero, zReparaciones._idCoche, zReparaciones._cantidad, zReparaciones._estado);
                        let resta = tmpReparaciones.resta();
                        console.log(resta);
                        if (resta < 0) {
                            //borrar el ultimo elemento introducido en la coleccion reparaciones
                            let borrado = yield reparacioneSchema_1.Reparaciones.findOneAndDelete({ _idReparacion: dSchema._idReparacion });
                            console.log(dSchema._idReparacion);
                            if (borrado) {
                                console.log("borrado");
                                res.send("borrado");
                            }
                        }
                        else {
                            //realizar el update de la cantidad en la coleccion recambios
                            let search = { _idPieza: dSchema._idPieza };
                            let update = { $set: { _cantidadTotal: resta } };
                            let options = { returnNewDocument: true };
                            let actualizar = yield recambioSchema_1.Recambios.findOneAndUpdate(search, update, options);
                            if (actualizar) {
                                console.log("actualizado");
                                res.send("actualizado");
                            }
                        }
                    }
                }
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            }))
                .catch((err) => res.send('Error: ' + err));
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    /*********************************************************************************************************** ESTO ES BOMBA */
    misRutas() {
        this._router.get('/equipos', this.getEquipos);
        this._router.get('/personal/:idEscuderia', this.getPersonalEscuderia);
        this._router.get('/equipo/:idEscuderia', this.getEquipoId);
        this._router.get('/recambios', this.getRecambios);
        this._router.get('/reparacion/:idReparacion', this.getReparacionId);
        this._router.get('/vehiculos', this.getVehiculos);
        this._router.get('/granPremios', this.getGranPremios);
        this._router.get('/reparaciones', this.getReparaciones);
        this._router.get('/precioRecambios/:idPieza', this.getPrecioXReparacion);
        this._router.get('/puntos', this.getPuntos);
        this._router.get('/getPuntosPilotos', this.getPuntosPilotos);
        this._router.get('/escuderia', this.getEscuderia);
        this._router.get('/salarios/:idEscuderia', this.getSalarios);
        this._router.post('/equipo', this.postEquipo);
        this._router.post('/reparacion', this.postReparacion);
        this._router.post('/monoplaza', this.postMonoplaza); //para la subclases de vehiculos
        this._router.post('/recambio', this.postRecambio);
        this._router.post('/personal', this.postPersonal);
        this._router.post('/personal/piloto', this.postPiloto);
        this._router.post('/personal/ingeniero', this.postIngeniero);
        this._router.post('/personal/mecanico', this.postMecanico);
        this._router.post('/granPremio', this.postGranPremio); //funciona
        this._router.post('/boxes', this.postBox);
        this._router.put('/recambio/:idPieza', this.updateRecambio); //perfect
        this._router.put('/reparacion/:idReparacion', this.updateReparacion);
        this._router.put('/equipo/:idEscuderia', this.updateEquipo);
        this.router.put('/reparacionGorda', this.updateReparacionGorda);
        this._router.delete('/personal/:idPersonal', this.deletePersonal);
        this._router.delete('/equipo/:idEscuderia', this.deleteEscuderia);
        this._router.delete('/recambio/:idPieza', this.deletePieza);
    }
}
const obj = new Routes();
obj.misRutas();
exports.routes = obj.router;
