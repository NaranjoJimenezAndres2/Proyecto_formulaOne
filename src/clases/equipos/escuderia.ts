export class Equipo{
    protected _idEscuderia: string;
    protected _nombre: string;
    protected _pais: string;
    protected _motorDistribuidor: string;
    protected _presupuesto: number;
    constructor (idEscuderia: string, nombre: string, pais: string, motorDistribuidor: string, presupuesto: number){
        this._idEscuderia = idEscuderia;
        this._nombre = nombre;
        this._pais = pais;
        this._motorDistribuidor = motorDistribuidor;
        this._presupuesto = presupuesto;
    }

    public get idEscuderia(): string {
        return this._idEscuderia;
    }
    
    public get nombre(): string {
        return this._nombre;
    }

    public get pais(): string {
        return this._pais;
    }   

    public get motorDistribuidor(): string {
        return this._motorDistribuidor;
    }
    
    public get presupuesto(): number {
        return this._presupuesto;
    }

}