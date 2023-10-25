import { __decorate } from "tslib";
// Módulos y Librerías
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CrearCursoComponent = class CrearCursoComponent {
    constructor(fb, router, toastr, _cursoService, aRouter) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._cursoService = _cursoService;
        this.aRouter = aRouter;
        this.titulo = 'Crear curso';
        this.cursoForm = this.fb.group({
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            categoria: ['', Validators.required],
            imagen: [''],
            duracion: ['', Validators.required],
            temas: ['', Validators.required]
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.esEditar();
    }
    agregarCurso() {
        const CURSO = {
            nombre: this.cursoForm.get('nombre')?.value,
            descripcion: this.cursoForm.get('descripcion')?.value,
            categoria: this.cursoForm.get('categoria')?.value,
            imagen: this.cursoForm.get('imagen')?.value,
            duracion: this.cursoForm.get('duracion')?.value,
            temas: this.cursoForm.get('temas')?.value
        };
        if (this.id !== null) {
            // Editamos Curso
            this._cursoService.editarCurso(this.id, CURSO).subscribe(data => {
                this.toastr.info('El curso fue actualizado con exito!', 'Curso Actualizado!');
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.cursoForm.reset();
            });
        }
        else {
            // Agregamos Curso
            console.log(CURSO);
            this._cursoService.guardarCurso(CURSO).subscribe(data => {
                this.toastr.success('El curso fue registrado con exito!', 'Curso Registrado!');
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.cursoForm.reset();
            });
        }
    }
    esEditar() {
        if (this.id !== null) {
            this.titulo = 'Editar curso';
            this._cursoService.obtenerCurso(this.id).subscribe(data => {
                this.cursoForm.setValue({
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    categoria: data.categoria,
                    imagen: data.imagen,
                    duracion: data.duracion,
                    temas: data.temas
                });
            });
        }
    }
};
CrearCursoComponent = __decorate([
    Component({
        selector: 'app-crear-curso',
        templateUrl: './crear-curso.component.html',
        styleUrls: ['./crear-curso.component.css']
    })
], CrearCursoComponent);
export { CrearCursoComponent };
//# sourceMappingURL=crear-curso.component.js.map