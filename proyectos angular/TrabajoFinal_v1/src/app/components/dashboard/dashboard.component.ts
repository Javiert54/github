import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { GcursoService } from 'src/app/services/Curso.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listProduct: Product[] = []

  constructor(private _GcursoService: GcursoService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._GcursoService.getCursos().subscribe(data => {
      this.listProduct = data;
    })
  }

}
