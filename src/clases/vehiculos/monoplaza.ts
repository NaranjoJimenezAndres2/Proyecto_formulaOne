
export class Monoplaza{
    private _idMonoplaza: string;
    protected _idPiloto: string;
    protected _marca: string;
    protected _modelo: string;
    private _motor: string;
    private _patrocinadores: string[];
    constructor (idMonoplaza: string, idPiloto: string, marca: string, modelo: string, motor: string, patrocinadores: string[]) {

        this._idMonoplaza = idMonoplaza;
        this._idPiloto = idPiloto;
        this._marca = marca;
        this._modelo = modelo;
        this._motor = motor;
        this._patrocinadores = patrocinadores;
    }

    public get idMonoplaza(): string {
        return this._idMonoplaza;
    }

    public get idPiloto(): string {
        return this._idPiloto;
    }

    public get motor(): string {
        return this._motor;
    }

    public get patrocinadores(): string[] {
        return this._patrocinadores;
    }

    
}