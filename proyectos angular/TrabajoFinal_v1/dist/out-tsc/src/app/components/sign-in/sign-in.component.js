import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SignInComponent = class SignInComponent {
    constructor(toastr, _userService, router, _errorService) {
        this.toastr = toastr;
        this._userService = _userService;
        this.router = router;
        this._errorService = _errorService;
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.loading = false;
    }
    ngOnInit() {
    }
    addUser() {
        // Validamos que el usuario ingrese valores
        if (this.email == '' || this.password == '' || this.confirmPassword == '') {
            this.toastr.error('Todos los campos son obligatorios', 'Error');
            return;
        }
        // Validamos que las password sean iguales
        if (this.password != this.confirmPassword) {
            this.toastr.error('Las passwords ingresadas son distintas', 'Error');
            return;
        }
        // Creamos el objeto
        const user = {
            email: this.email,
            password: this.password
        };
        this.loading = true;
        this._userService.signIn(user).subscribe({
            next: (v) => {
                this.loading = false;
                this.toastr.success(`El usuario ${this.email} fue registrado con exito`, 'Usuario registrado');
                this.router.navigate(['/login']);
            },
            error: (e) => {
                this.loading = false;
                this._errorService.msjError(e);
            }
        });
    }
};
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css']
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map