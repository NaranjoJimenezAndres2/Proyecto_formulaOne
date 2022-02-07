"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanica = void 0;
class Mecanica {
    constructor(idReparacion, idPieza, nombre, precio, tipo, fabricante, descripcion, fechaAlta, cantidadTotal, idEscuderia, idIngeniero, idCoche, cantidad, estado) {
        this._idReparacion = idReparacion;
        this._idPieza = idPieza;
        this._nombre = nombre;
        this._precio = precio;
        this._tipo = tipo;
        this._fabricante = fabricante;
        this._descripcion = descripcion;
        this._fechaAlta = fechaAlta;
        this._cantidadTotal = cantidadTotal;
        this._idEscuderia = idEscuderia;
        this._idIngeniero = idIngeniero;
        this._idCoche = idCoche;
        this._cantidad = cantidad;
        this._estado = estado;
    }
    get idPieza() {
        return this._idPieza;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get tipo() {
        return this._tipo;
    }
    get fabricante() {
        return this._fabricante;
    }
    get descripcion() {
        return this._descripcion;
    }
    get cantidadTotal() {
        return this._cantidadTotal;
    }
    get idEscuderia() {
        return this._idEscuderia;
    }
    get idIngeniero() {
        return this._idIngeniero;
    }
    get idCoche() {
        return this._idCoche;
    }
    get idReparacion() {
        return this._idReparacion;
    }
    set idReparacion(value) {
        this._idReparacion = value;
    }
    get fechaAlta() {
        return this._fechaAlta;
    }
    get estado() {
        return this._estado;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(value) {
        this._cantidad = value;
    }
    set fechaAlta(value) {
        this._fechaAlta = value;
    }
    set estado(value) {
        this._estado = value;
    }
    set idCoche(value) {
        this._idCoche = value;
    }
    set idIngeniero(value) {
        this._idIngeniero = value;
    }
    set idEscuderia(value) {
        this._idEscuderia = value;
    }
    set cantidadTotal(value) {
        this._cantidadTotal = value;
    }
    set descripcion(value) {
        this._descripcion = value;
    }
    set tipo(value) {
        this._tipo = value;
    }
    set precio(value) {
        this._precio = value;
    }
    set nombre(value) {
        this._nombre = value;
    }
    set idPieza(value) {
        this._idPieza = value;
    }
    set fabricante(value) {
        this._fabricante = value;
    }
    resta() {
        this._cantidadTotal = this._cantidadTotal - this._cantidad;
        return this._cantidadTotal;
    }
}
exports.Mecanica = Mecanica;
