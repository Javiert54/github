import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ContactoComponent = class ContactoComponent {
    constructor(fb, router, toastr, _mensajeService, aRouter) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._mensajeService = _mensajeService;
        this.aRouter = aRouter;
        this.titulo = 'Formulario de Contacto';
        this.contactoForm = this.fb.group({
            nombre: ['', Validators.required],
            email: ['', Validators.required],
            asunto: ['', Validators.required],
            mensaje: ['', Validators.required]
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.esEditar();
    }
    agregarMensaje() {
        const MENSAJE = {
            nombre: this.contactoForm.get('nombre')?.value,
            email: this.contactoForm.get('email')?.value,
            asunto: this.contactoForm.get('asunto')?.value,
            mensaje: this.contactoForm.get('mensaje')?.value
        };
        if (this.id !== null) {
            // Editamos Usuario
            this._mensajeService.editarMensaje(this.id, MENSAJE).subscribe(data => {
                this.toastr.info('El mensaje fue actualizado con exito!', 'Mensaje Actualizado!');
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.contactoForm.reset();
            });
        }
        else {
            // Agregamos Usuario
            console.log(MENSAJE);
            this._mensajeService.guardarMensaje(MENSAJE).subscribe(data => {
                this.toastr.success('El mensaje fue enviado con exito!', 'Mensaje Enviado!');
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.contactoForm.reset();
            });
        }
    }
    esEditar() {
        if (this.id !== null) {
            this.titulo = 'Editar Mensaje';
            this._mensajeService.obtenerMensaje(this.id).subscribe(data => {
                this.contactoForm.setValue({
                    nombre: data.nombre,
                    email: data.apellidos,
                    asunto: data.email,
                    mensaje: data.mensaje
                });
            });
        }
    }
};
ContactoComponent = __decorate([
    Component({
        selector: 'app-contacto',
        templateUrl: './contacto.component.html',
        styleUrls: ['./contacto.component.css']
    })
], ContactoComponent);
export { ContactoComponent };
//# sourceMappingURL=contacto.component.js.map