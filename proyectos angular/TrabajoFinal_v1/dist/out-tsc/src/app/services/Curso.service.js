import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let GcursoService = class GcursoService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3001/api/cursos/';
    }
    getCursos() {
        return this.http.get(this.url);
    }
    eliminarCurso(id) {
        return this.http.delete(this.url + id);
    }
    guardarCurso(curso) {
        return this.http.post(this.url, curso);
    }
    obtenerCurso(id) {
        return this.http.get(this.url + id);
    }
    editarCurso(id, curso) {
        return this.http.put(this.url + id, curso);
    }
};
GcursoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GcursoService);
export { GcursoService };
//# sourceMappingURL=Curso.service.js.map