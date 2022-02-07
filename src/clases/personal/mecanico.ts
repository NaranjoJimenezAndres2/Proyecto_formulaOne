import { Empleado } from './empleado';

export class Mecanico extends Empleado {
    private _idMecanico: string;   //se espera asociar con los coches
    private _posicion: string;
    private _paleta: boolean;
    constructor (idMecanico: string, posicion: string, paleta: boolean, idEmpleado: string, nombre: string, apellidos: string, fechaContratacion: Date, salario: number, idEscuderia: string) {
        super(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idMecanico = idMecanico;
        this._posicion = posicion;
        this._paleta = paleta;
        
    }

    public get idMecanico(): string {
        return this._idMecanico;
    }

    public get posicion(): string {
        return this._posicion;
    }
    
    public get paleta(): boolean {
        return this._paleta;
    }

    public set idMecanico(value: string) {
        this._idMecanico = value;
    }

    public set posicion(value: string) {
        this._posicion = value;
    }

    salarioTotal(): number {
        let salario: number = super.salarioTotal();
        if (this._paleta) {
            salario += 1000;
        }
        return salario;
        
    }
}

