import { Component } from '@angular/core';
import { ProductoModelComponent } from '../models/productoModel';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {

	constructor(

	){

	}


}
export const productos = [
	new ProductoModelComponent('Alexa','./assets/media/products/producto1.jpg', 100.99, false),
	new ProductoModelComponent('Reloj','./assets/media/products/producto2.jpg', 199.99, false),
	new ProductoModelComponent('Cafetera','./assets/media/products/producto5.jpg', 49.99, true),
	new ProductoModelComponent('Mochila','./assets/media/products/producto3.jpg', 50.99, false),
	new ProductoModelComponent('Router','./assets/media/products/producto4.jpg', 35.99, true)


]