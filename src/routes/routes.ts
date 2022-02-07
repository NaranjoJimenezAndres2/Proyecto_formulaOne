import {Request, Response, Router } from 'express'
import { db } from '../database/database'
import { Equipos } from '../model/equipoSchema'
import { Vehiculos, iMonoplaza,  } from '../model/vehiculoSchema'
import { Recambios } from '../model/recambioSchema'
import { Personal, iPersonal, iMecanico, iIngeniero, iPiloto ,xPersonal} from '../model/personalSchema'
import { granPremios } from '../model/granPremioSchema'
import { Boxes } from '../model/boxeSchema'
import { Reparaciones } from '../model/reparacioneSchema'
import { iGranPremio} from '../model/granPremioSchema'
import { iSalario, xReparacion, yReparacion, iPuntosPilotos, xClasificacion } from '../model/ZZinterfaces'


import {Empleado} from '../clases/personal/empleado'
import {Mecanico} from '../clases/personal/mecanico'
import {Ingeniero} from '../clases/personal/ingeniero'
import {Piloto} from '../clases/personal/piloto'
import { Mecanica } from '../clases/recambios/mecanica'
import { granPremio} from '../clases/granPremio/granPremio'



class Routes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }




    private getEquipos = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Equipos.find({})
                .then( (equipos) => {
                    db.desconectarBD()
                    .then( () => resolve(equipos) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }

    private getVehiculos = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Vehiculos.find({})  
                .then( (vehiculos) => {
                    db.desconectarBD()
                    .then( () => resolve(vehiculos) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }

    private getRecambios = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Recambios.find({})
                .then( (recambios) => {
                    db.desconectarBD()
                    .then( () => resolve(recambios) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }



    private getGranPremios = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                granPremios.find({})
                .then( (granPremios) => {
                    db.desconectarBD()
                    .then( () => resolve(granPremios) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }

    private getReparaciones = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Reparaciones.find({})
                .then( (reparaciones) => {
                    db.desconectarBD()
                    .then( () => resolve(reparaciones) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }



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
                        as: "monoplazas"
                        }
                    },
                    {$unwind: "$monoplazas"},
                    {
                        $lookup: {
                            localField: "monoplazas._idPiloto",
                            from: "personals",
                            foreignField: "_idPiloto",
                            as: "pilotos"
                    }
                  }  
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
    

//esto funciona al pelo
    private getSalarios = async (req: Request, res: Response) => {
        await db.conectarBD()
            .then( async () => {
                
                
                let arrayResultado : Array<iSalario> =[]
                
                let query: any =  await Personal.find({})

                console.log(query)
        
                    let dPersonal: xPersonal
                    let tmpPersonal : Empleado

                    for (dPersonal of  query){
                        if (dPersonal._idMecanico){
                            tmpPersonal = new Mecanico (dPersonal._idMecanico,dPersonal._posicion, dPersonal._paleta, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion,dPersonal._salario, dPersonal._idEscuderia )
                        }else if (dPersonal._idIngeniero){
                            tmpPersonal = new Ingeniero (dPersonal._idIngeniero, dPersonal._especialidad, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion,dPersonal._salario, dPersonal._idEscuderia, dPersonal._horasNocturnas )
                        }else if (dPersonal._idMecanico) {
                            tmpPersonal = new Mecanico (dPersonal._idMecanico, dPersonal._posicion, dPersonal._paleta, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario, dPersonal._idEscuderia)
                        } else {
                            tmpPersonal = new Piloto (dPersonal._idPiloto, dPersonal._nacionalidad, dPersonal._vueltasRapidas, dPersonal._adelantamientos, dPersonal._abandonos, dPersonal._puntosTotales, dPersonal._idPersonal, dPersonal._nombre, dPersonal._apellidos, dPersonal._fechaContratacion, dPersonal._salario,dPersonal._idEscuderia)
                        }
                        
                        let sueldoTotal : number = 0 

                        sueldoTotal = tmpPersonal.salarioTotal()

                        console.log(sueldoTotal)
                        
                        
                        let dSalarios : iSalario= {
                            _idPersonal: null,
                            _nombre: null,
                            _apellidos: null,
                            _fechaContratacion: null,
                            _salario: null
                        }

                        dSalarios._idPersonal= dPersonal._idPersonal,
                        dSalarios._nombre= dPersonal._nombre,
                        dSalarios._apellidos= dPersonal._apellidos,
                        dSalarios._fechaContratacion= dPersonal._fechaContratacion,
                        dSalarios._salario= sueldoTotal


                        arrayResultado.push(dSalarios)
                                       

                        
                    }
                       res.json(arrayResultado) 
                    })
                    .catch((mensaje) => {
                        res.send(mensaje)
                    })
                    await db.desconectarBD()
                }
            

        private getPuntos = async (req: Request, res: Response) => {
            const promise = new Promise<any>( async (resolve, reject) => {
                await db.conectarBD()
                    .then( async () => {
                        granPremios.aggregate([
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
                        .then( (puntos) => {
                            db.desconectarBD()
                            .then( () => resolve(puntos) )
                            .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                        })
                        .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                    })
                    .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
            })
            res.json(await promise)
            db.desconectarBD()
        }




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


            private getPuntosPilotos = async (req: Request, res: Response) => {
                await db.conectarBD()
                        .then( async () => {
                            
    
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
                                    
                                    let dPuntosPilotos : iPuntosPilotos= {
                                        _idPiloto: null,
                                        _nombre: null,
                                        _apellidos: null,
                                        _fechaContratacion: null,
                                        _puntosTotales: null
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
    private getPersonalEscuderia = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Personal.find({_idEscuderia: req.params.idEscuderia})
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
    }


    private getEquipoId = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Equipos.find({_idEscuderia: req.params.idEscuderia})
                .then( (equipo) => {
                    db.desconectarBD()
                    .then( () => resolve(equipo) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }

    private getReparacionId = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Reparaciones.find({_idReparacion: req.params.idReparacion})
                .then( (reparacion) => {
                    db.desconectarBD()
                    .then( () => resolve(reparacion) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }





    private postReparacion = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Reparaciones.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`) )
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`)) //si hay alguna limitacion de Schema salta este error
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }
               




    private postEquipo = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async () => {
                Equipos.create(req.body)
                .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`) )
                .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`)) //si hay alguna limitacion de Schema salta este error
            })
            .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
            await db.conectarBD()
        }

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
    private postMonoplaza = async (req: Request, res: Response) => {

        let pShemaMonoplaza= new Vehiculos({
            _idVehiculo: req.body._idVehiculo,
            _idMonoplaza: req.body._idMonoplaza,
            _idPiloto: req.body._idPiloto,
            _marca: req.body._marca,
            _modelo: req.body._modelo,
            _motor: req.body._motor,
        })
        console.log(pShemaMonoplaza)

        await db.conectarBD() 
        .then( async () => {
            await pShemaMonoplaza.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()

    }



    private postRecambio = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Recambios.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }




    private postPersonal = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Personal.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }

    //introducir un personal del tipo piloto dentro de la base de datos mediante el metodo post
    private postPiloto = async (req: Request, res: Response) => {

        let pShemaPiloto= new Personal({
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
        })
        console.log(pShemaPiloto)

        await db.conectarBD()
        .then( async () => {
            await pShemaPiloto.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }

    //introducir un personal del tipo ingeniero dentro de la base de datos mediante el metodo post
    private postIngeniero = async (req: Request, res: Response) => {

        let pShemaIngeniero= new Personal({
            _idPersonal: req.body._idPersonal,
            _idIngeniero: req.body._idIngeniero,
            _nombre: req.body._nombre,
            _apellidos: req.body._apellidos,
            _fechaContratacion: req.body._fechaContratacion,
            _salario: req.body._salario,
            _idEscuderia: req.body._idEscuderia,
            _especialidad: req.body._especialidad
        })
        console.log(pShemaIngeniero)

        await db.conectarBD()
        .then( async () => {
            await pShemaIngeniero.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }


    //introducir un personal del tipo mecanico dentro de la base de datos mediante el metodo post

    private postMecanico = async (req: Request, res: Response) => {

        let pShemaMecanico= new Personal({
            _idPersonal: req.body._idPersonal,
            _idMecanico: req.body._idMecanico,
            _nombre: req.body._nombre,
            _apellidos: req.body._apellidos,
            _fechaContratacion: req.body._fechaContratacion,
            _salario: req.body._salario,
            _idEscuderia: req.body._idEscuderia,
            _especialidad: req.body._especialidad
        })

        console.log(pShemaMecanico)

        await db.conectarBD()
        .then( async () => {
            await pShemaMecanico.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }


    //introducir elementos en la coleccion granPremio por el metodo post
    private postGranPremio = async (req: Request, res: Response) => {

        let pShemaGranPremio= new granPremios({
            _idGranPremio: req.body._idGranPremio,
            _nombre: req.body._nombre,
            _temporada: req.body._temporada,
            _pais: req.body._pais,
            _clasificacion: req.body._clasificacion,
            _vueltaRapida: req.body._vueltaRapida,
            _abandonos: req.body._abandonos
        })
        console.log(pShemaGranPremio)

        await db.conectarBD()
        .then( async () => {
            await pShemaGranPremio.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }

    //introducir elementos en la coleccion boxes por el metodo post
    private postBox = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Boxes.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }

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
    private updateRecambio = async (req: Request, res: Response) => {
        await db.conectarBD()
        const {idPieza} = req.params
        console.log(idPieza)
        console.log(req.body)
        

        await db.conectarBD()
        await Equipos.findOneAndUpdate(
            {_idPieza: idPieza}, 
            {
                _nombre: req.body._nombre,
                _precio: req.body._precio,
                _tipo: req.body._tipo, 
                _fabricante: req.body._fabricante,
                _descripcion: req.body._descripcion,
                _cantidadTotal:req.body._cantidadTotal,
                _idEscuderia: req.body._idEscuderia,

                },{
                    new: true,
                    runValidators: true
                })
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    
    

    private updateEquipo = async (req: Request, res: Response) => {
       
        const {idEscuderia} = req.params
        console.log(idEscuderia)
        console.log(req.body)
        

        await db.conectarBD()
        await Equipos.findOneAndUpdate(
            {_idEscuderia: idEscuderia}, 
            {
                _idEscuderia: req.body._idEscuderia,
                 _nombre: req.body._nombre, 
                 _pais: req.body._pais, 
                 _motorDistribuidor: req.body._motorDistribuidor,
                 _presupuesto: req.body._presupuesto
                },{
                    new: true,
                    runValidators: true
                })
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }



    private updateReparacion = async (req: Request, res: Response) => {

        //sacar una funcion para hallar la hora
        let fecha = new Date()
        const {idReparacion} = req.params
        console.log(idReparacion)
        console.log(req.body)

        await db.conectarBD()
        await Reparaciones.findOneAndUpdate(
            {_idReparacion: idReparacion},
            {
                //_idReparacion: req.body._idReparacion,
                //_idCoche: req.body._idCoche,
                //_idIngeniero: req.body._idIngeniero,
                //_idPieza: req.body._idPieza,
                _fecha: fecha,
                //_cantidad: req.body._cantidad,
                _estado: req.body._estado
            },{
                new: true,
                runValidators: true
            })
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err))
        await db.desconectarBD()
    }










    //eliminar un empleado de la coleccion personal mediante el metodo delete en la ruta /personal/:idPersonal
    private deletePersonal = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Personal.findOneAndDelete({_idPersonal: req.params.idPersonal})
            .then( (mensaje) => res.send(`El documento se ha eliminado correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la eliminación del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }
 

    private deleteEscuderia = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Equipos.findOneAndDelete({_idEscuderia: req.params.idEscuderia})
            .then( (mensaje) => res.send(`El documento se ha eliminado correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la eliminación del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }

//******************************************************************************************************************************* */

    //realizar un post de un documento en la coleccion reparaciones comparando con la cantidad disponible en la coleccion recambios
    private updateReparacionGorda = async (req: Request, res: Response) => {
        const { _idReparacion, _idIngeniero, _idPieza, _idCoche, _cantidad, _fecha, _estado} = req.body
        await db.conectarBD()
        const dSchema={
            _idReparacion: _idReparacion,
            _idIngeniero: _idIngeniero,
            _idPieza: _idPieza,
            _idCoche: _idCoche,
            _cantidad: _cantidad,
            _fecha: _fecha,
            _estado: _estado
        }
        const oSchema = new Reparaciones(dSchema)
        await oSchema.save()
        .then( (doc: any) => 
        
        
        /* .then( async () => {
                Reparaciones.create(req.body)
                .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))//  req.body._idRecambio
           /* })
            .catch((mensaje) => {
                res.send(mensaje)
            })*/

                
            db.conectarBD()
            .then( async () => {

                let query = await 
                Recambios.aggregate([
                    { $match: 
                        { _idPieza: dSchema._idPieza } 
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
                            
                            
                ])

                console.log(query)

                let dReparaciones : xReparacion
                let zReparaciones : yReparacion
                let tmpReparaciones : Mecanica

                for(dReparaciones of query){
                    if (dReparaciones.extended.length >= 0){
                        zReparaciones = dReparaciones.extended[dReparaciones.extended.length-1]
                        tmpReparaciones = new Mecanica(zReparaciones._idReparacion, 
                            zReparaciones._idPieza,
                            dReparaciones._nombre,
                            dReparaciones._precio,
                            dReparaciones._tipo,
                            dReparaciones._fabricante,
                            dReparaciones._descripcion,
                            zReparaciones._fecha,
                            dReparaciones._cantidadTotal,
                            dReparaciones._idEscuderia,
                            zReparaciones._idIngeniero,
                            zReparaciones._idCoche,
                            zReparaciones._cantidad,
                            zReparaciones._estado)
                   

                    let resta :number = tmpReparaciones.resta()

                    console.log(resta)

                   
                   
                    
                        if (resta < 0){
                            //borrar el ultimo elemento introducido en la coleccion reparaciones
                            let borrado : any = await Reparaciones.findOneAndDelete({_idReparacion: dSchema._idReparacion}) 
                            console.log(dSchema._idReparacion)
                            if (borrado){
                                let x : number =1
                                console.log("borrado")
                                res.send("borrado")
                                
                            }


                        } else {
                            //realizar el update de la cantidad en la coleccion recambios
                            let search = {_idPieza: dSchema._idPieza}
                            let update = {$set: {_cantidadTotal: resta}}
                            let options = { returnNewDocument: true }

                            let actualizar : any = await Recambios.findOneAndUpdate(search, update, options)
                            if (actualizar){
                                let x : number =2
                                console.log("actualizado")
                                res.send("actualizado")
                            }
                            
                        }

                    }
                }
            
            })
            .catch((mensaje) => {
                res.send(mensaje)
            }))

        .catch( (err: any) => res.send('Error: '+ err))
    }



/*********************************************************************************************************** ESTO ES BOMBA */




    misRutas(){ 
        this._router.get('/equipos', this.getEquipos)
        this._router.get('/personal/:idEscuderia', this.getPersonalEscuderia)
        this._router.get('/equipos/:idEscuderia', this.getEquipoId)
        this._router.get('/recambios', this.getRecambios)
        this._router.get('/reparacion/:idReparacion', this.getReparacionId)
        this._router.get('/vehiculos', this.getVehiculos)
        this._router.get('/granPremios', this.getGranPremios)
        this._router.get('/reparaciones', this.getReparaciones)


        this._router.get('/puntos', this.getPuntos)
        this._router.get('/getPuntosPilotos', this.getPuntosPilotos)



        this._router.get('/escuderia', this.getEscuderia)

        this._router.get('/salario', this.getSalarios)

        this._router.post('/equipo', this.postEquipo)
        this._router.post('/reparacion', this.postReparacion)
        this._router.post('/monoplaza', this.postMonoplaza) //para la subclases de vehiculos
        this._router.post('/recambio', this.postRecambio)
        this._router.post('/personal', this.postPersonal)
        this._router.post('/personal/piloto', this.postPiloto)
        this._router.post('/personal/ingeniero', this.postIngeniero)
        this._router.post('/personal/mecanico', this.postMecanico)
        this._router.post('/granPremio', this.postGranPremio)  //funciona
        this._router.post('/boxes', this.postBox)
        this._router.put('/recambio/:idPieza', this.updateRecambio)
        
        this._router.put('/reparacion/:idReparacion', this.updateReparacion)
        
        this._router.put('/equipo/:idEscuderia', this.updateEquipo)


        this.router.put('/reparacionGorda', this.updateReparacionGorda)


        this._router.delete('/personal/:idPersonal', this.deletePersonal)
        this._router.delete('/equipo/:idEscuderia', this.deleteEscuderia)
        
    }



}


const obj = new Routes()
obj.misRutas()
export const routes = obj.router

function toISOString(): any {
    throw new Error('Function not implemented.')
}

