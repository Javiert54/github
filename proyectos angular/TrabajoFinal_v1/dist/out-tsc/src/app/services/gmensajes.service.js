import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let GmensajeService = class GmensajeService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3001/api/mensajes/';
    }
    getMensajes() {
        return this.http.get(this.url);
    }
    eliminarMensaje(id) {
        return this.http.delete(this.url + id);
    }
    guardarMensaje(mensaje) {
        return this.http.post(this.url, mensaje);
    }
    obtenerMensaje(id) {
        return this.http.get(this.url + id);
    }
    editarMensaje(id, mensaje) {
        return this.http.put(this.url + id, mensaje);
    }
};
GmensajeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GmensajeService);
export { GmensajeService };
//# sourceMappingURL=gmensajes.service.js.map