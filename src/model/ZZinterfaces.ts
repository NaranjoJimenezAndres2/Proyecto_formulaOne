export interface iSalario {
    _idPersonal: string | null,
    _nombre: string | null,
    _apellidos: string | null,
    _fechaContratacion: Date | null,
    _salario: number| null}


export interface xReparacion {
    _idPieza: string,
    _nombre: string,
    _precio: number,
    _tipo: string,
    _fabricante: string ,
    _descripcion: string ,
    _cantidadTotal: number ,
    _idEscuderia: string ,
    extended:[
        {
    _idReparacion: string,
    _idIngeniero: string ,
    _idPieza: string ,
    _idCoche: string,
    _cantidad: number ,
    _fecha: Date ,
    _estado: string ,
        }
    ]
}

export interface yReparacion {
    _idReparacion: string  ,
    _idIngeniero: string ,
    _idPieza: string ,
    _idCoche: string ,
    _cantidad: number ,
    _fecha: Date ,
    _estado: string,
}

export interface iPuntosPilotos  {
    _idPiloto: string | null,
    _nombre: string | null,
    _apellidos: string | null,
    _fechaContratacion: Date | null,
    _puntosTotales: number | null
}

export interface xClasificacion {
    _temporada: string | null;
    _puntosALO: number | null;
    _puntosBEL: number | null;
    _puntosBRA: number | null;
  }