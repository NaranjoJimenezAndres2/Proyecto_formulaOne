export class granPremio {
    private _idGranPremio: string;
    private _nombre: string;
    private _fecha: Date;
    private _pais: string;
    private _clasificacion: Array<string>;
    private _vueltaRapida: Array<string>;
    private _abandonos: Array<string>;

    constructor(idGranPremio: string, nombre: string, fecha: Date, pais: string, clasificacion: Array<string>, vueltaRapida: Array<string>, abandonos: Array<string>) {
        this._idGranPremio = idGranPremio;
        this._nombre = nombre;
        this._fecha = fecha;
        this._pais = pais;
        this._clasificacion = clasificacion;
        this._vueltaRapida = vueltaRapida;
        this._abandonos = abandonos;
    }

    public get idGranPremio(): string {
        return this._idGranPremio;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get fecha(): Date {
        return this._fecha;
    }

    public get pais(): string {
        return this._pais;
    }

    public get clasificacion(): Array<string> {
        return this._clasificacion;
    }

    public get vueltaRapida(): Array<string> {
        return this._vueltaRapida;
    }

    public get abandonos(): Array<string> {
        return this._abandonos;
    }
    


}