import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AgregarArchivoComponent = class AgregarArchivoComponent {
    constructor(rest) {
        this.rest = rest;
        this.archivos = [];
    }
    ngOnInit() {
    }
    capturarFile(event) {
        const archivoCapturado = event.target.files[0];
        this.archivos.push(archivoCapturado);
    }
    // Subir archivo
    subirArchivo() {
        try {
            this.loading = true;
            const formularioDeDatos = new FormData();
            this.archivos.forEach((archivo) => {
                formularioDeDatos.append('myfile', archivo);
            });
            this.rest.post(`http://localhost:3001/api/upload`, formularioDeDatos)
                .subscribe(res => {
                this.loading = false;
                console.log('Respuesta del servidor', res);
            }, () => {
                this.loading = false;
                alert('Error');
            });
        }
        catch (e) {
            this.loading = false;
            console.log('ERROR', e);
        }
    }
};
AgregarArchivoComponent = __decorate([
    Component({
        selector: 'app-agregar-archivo',
        templateUrl: './agregar-archivo.component.html',
        styleUrls: ['./agregar-archivo.component.css']
    })
], AgregarArchivoComponent);
export { AgregarArchivoComponent };
//# sourceMappingURL=agregar-archivo.component.js.map