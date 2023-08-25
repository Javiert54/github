import { Component } from '@angular/core';
import { productos } from '../producto/producto.component'
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
	public productos: any
	// public productos: 
	constructor(


	){
		this.productos = productos.filter( producto => producto.wishList == true );
		console.log(this.productos);

	}

}
