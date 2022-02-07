export class Empleado {
    protected _idEmpleado: string;
    protected _nombre: string;
    protected _apellidos: string;
    protected _fechaContratacion: Date;
    protected _salario: number;
    protected _idEscuderia: string;
    constructor (idEmpleado: string, nombre: string, apellidos: string, fechaContratacion: Date, salario: number, idEscuderia: string){
        this._idEmpleado = idEmpleado;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fechaContratacion = fechaContratacion;
        this._salario = salario;
        this._idEscuderia = idEscuderia;
    }

    public get idEmpleado(): string {
        return this._idEmpleado;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get apellidos(): string {
        return this._apellidos;
    }

    public get fechaContratacion(): Date {
        return this._fechaContratacion;
    }

    public get salario(): number {
        return this._salario;
    }

    public get idEscuderia(): string {
        return this._idEscuderia;
    }

    salarioTotal(): number {
        return this._salario;
    }








}