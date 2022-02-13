"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.granPremio = void 0;
class granPremio {
    constructor(idGranPremio, nombre, temporada, pais, clasificacion, vueltaRapida, abandonos) {
        this._idGranPremio = idGranPremio;
        this._nombre = nombre;
        this._temporada = temporada;
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
    get temporada() {
        return this._temporada;
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
