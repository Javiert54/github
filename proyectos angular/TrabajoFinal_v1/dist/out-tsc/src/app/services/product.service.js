import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = 'api/products';
    }
    getProducts() {
        /*  const token = localStorage.getItem('token')
         const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
        /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */
        return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map