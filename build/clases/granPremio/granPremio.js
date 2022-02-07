"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.granPremio = void 0;
class granPremio {
    constructor(idGranPremio, nombre, fecha, pais, clasificacion, vueltaRapida, abandonos) {
        this._idGranPremio = idGranPremio;
        this._nombre = nombre;
        this._fecha = fecha;
        this._pais = pais;
        this._clasificacion = clasificacion;
        this._vueltaRapida = vueltaRapida;
        this._abandonos = abandonos;
    }
    get idGranPremio() {
        return this._idGranPremio;
    }
    get nombre() {
        return this._nombre;
    }
    get fecha() {
        return this._fecha;
    }
    get pais() {
        return this._pais;
    }
    get clasificacion() {
        return this._clasificacion;
    }
    get vueltaRapida() {
        return this._vueltaRapida;
    }
    get abandonos() {
        return this._abandonos;
    }
}
exports.granPremio = granPremio;
