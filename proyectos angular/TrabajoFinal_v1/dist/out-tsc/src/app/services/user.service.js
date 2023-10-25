import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = 'api/users';
    }
    signIn(user) {
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}/registro`, user);
    }
    login(user) {
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}/acceso`, user);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map