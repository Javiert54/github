import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(toastr, _userService, router, _errorService) {
        this.toastr = toastr;
        this._userService = _userService;
        this.router = router;
        this._errorService = _errorService;
        this.email = '';
        this.password = '';
        this.loading = false;
    }
    ngOnInit() {
    }
    login() {
        // Validamos que el usuario ingrese datos
        if (this.email == '' || this.password == '') {
            this.toastr.error('Todos los campos son obligatorios', 'Error');
            return;
        }
        // Creamos el body
        const user = {
            email: this.email,
            password: this.password
        };
        this.loading = true;
        this._userService.login(user).subscribe({
            next: (token) => {
                localStorage.setItem('token', token);
                this.router.navigate(['/dashboard']);
            },
            error: (e) => {
                this._errorService.msjError(e);
                this.loading = false;
            }
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map