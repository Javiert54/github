import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(_productService) {
        this._productService = _productService;
        this.listProduct = [];
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this._productService.getProducts().subscribe(data => {
            this.listProduct = data;
        });
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map