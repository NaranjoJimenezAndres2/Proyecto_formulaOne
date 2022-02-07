import { Empleado } from './empleado';

export class Ingeniero extends Empleado {
    private _idIngeniero: string;   //se espera asociar con los coches
    private _especialidad: string;
    private _horasNocturnas: number;
    constructor (idIngeniero: string, especialidad: string, idEmpleado: string, nombre: string, apellidos: string, fechaContratacion: Date, salario: number, idEscuderia: string, horasNocturnas: number) {
        super(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idIngeniero = idIngeniero;
        this._especialidad = especialidad;
        this._horasNocturnas = horasNocturnas;
        
    }

    public get idIngeniero(): string {
        return this._idIngeniero;
    }

    public get especialidad(): string {
        return this._especialidad;
    }

    public get horasNocturnas(): number {
        return this._horasNocturnas;
    }


    salarioTotal(): number {
        let salario: number = super.salarioTotal();
        if (this._horasNocturnas > 0) {
            salario += this._horasNocturnas * 200;
        }
        return salario;
        
    }
}

