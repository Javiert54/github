import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RestService = class RestService {
    constructor(http) {
        this.http = http;
    }
    get(filename) {
        return this.http.get(filename); // GET  
    }
    post(url, body) {
        return this.http.post(url, body); // POST  
    }
};
RestService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], RestService);
export { RestService };
//# sourceMappingURL=rest.service.js.map