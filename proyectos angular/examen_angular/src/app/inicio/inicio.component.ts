import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { productos } from '../producto/producto.component'
@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

	public busqueda: String
	public productos: any
	// public productos: 
	constructor(


	){
		this.busqueda = ''
		this.productos = productos
	}

	buscar(){
		console.log(this.productos)
	}
}
