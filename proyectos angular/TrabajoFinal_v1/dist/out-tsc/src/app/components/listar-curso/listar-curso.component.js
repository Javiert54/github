import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListarCursoComponent = class ListarCursoComponent {
    constructor(_gcursoService, toastr) {
        this._gcursoService = _gcursoService;
        this.toastr = toastr;
        this.listCursos = [];
    }
    ngOnInit() {
        this.obtenerCursos();
    }
    obtenerCursos() {
        this._gcursoService.getCursos().subscribe(data => {
            console.log(data);
            this.listCursos = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarCurso(id) {
        this._gcursoService.eliminarCurso(id).subscribe(data => {
            this.toastr.error('El curso fue eliminado con exito', 'Curso Eliminado');
            this.obtenerCursos();
        }, error => {
            console.log(error);
        });
    }
};
ListarCursoComponent = __decorate([
    Component({
        selector: 'app-listar-curso',
        templateUrl: './listar-curso.component.html',
        styleUrls: ['./listar-curso.component.css']
    })
], ListarCursoComponent);
export { ListarCursoComponent };
//# sourceMappingURL=listar-curso.component.js.map