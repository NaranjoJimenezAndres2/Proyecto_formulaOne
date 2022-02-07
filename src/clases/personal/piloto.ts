import { Empleado } from './empleado';

export class Piloto extends Empleado {
    private _idPiloto: string;   //se espera asociar con los coches
    private _nacionalidad: string;
    private _vueltasRapidas: number;
    private _adelantamientos: number;
    private _abandonos: number;
    public _puntosTotales: number;
    constructor (idPiloto: string, nacionalidad: string,  vueltasRapidas: number, adelantamientos: number, abandonos: number, puntosTotales: number, idPersonal: string, nombre: string, apellidos: string, fechaContratacion: Date, salario: number, idEscuderia: string) {
        super(idPersonal, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idPiloto = idPiloto;
        this._nacionalidad = nacionalidad;
        this._vueltasRapidas = vueltasRapidas;
        this._adelantamientos = adelantamientos;
        this._abandonos = abandonos;
        this._puntosTotales = puntosTotales;
    }

    public get idPiloto(): string {
        return this._idPiloto;
    }

    public get nacionalidad(): string {
        return this._nacionalidad;
    }



    public get vueltasRapidas(): number {
        return this._vueltasRapidas;
    }

    public get adelantamientos(): number {
        return this._adelantamientos;
    }

    public get abandonos(): number {
        return this._abandonos;
    }

    public get puntosTotales(): number {
        return this._puntosTotales;
    }

    public set idPiloto(value: string) {
        this._idPiloto = value;
    }

    public set puntosTotales(value: number) {
        this._puntosTotales = value;
    }

    public set adelandamientos(value: number) {
        this._adelantamientos = value;
    }


    
    salarioTotal(): number {
        let salario: number = super.salarioTotal();
        if (this._vueltasRapidas > 5) {
            salario += 1000;
        }
        if (this._adelantamientos > 20) {
            salario += 1000;
        }
        if (this._abandonos < 10) {
            salario += 1000;
        }
        if (this._puntosTotales > 20) {
            salario += (1000 * (this._puntosTotales-20));
        }
        return salario;
    }
    
    
    getIdPiloto(): string {
        return this._idPiloto;
    }

    setPuntosTotales(puntos: number): void {
        this._puntosTotales = puntos;
    }

}


