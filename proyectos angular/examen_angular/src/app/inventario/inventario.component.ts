import { Component } from '@angular/core';
import { productos } from '../producto/producto.component'
import { ServiciosBD} from '../models/lstServicios';
import { ListaserviciosService } from '../servicios/listaservicios.service';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  providers: [ListaserviciosService]
})
export class InventarioComponent {
	public productos: any;
	// public productos: 
	public longitud:Number;
	constructor( listaservicios:ListaserviciosService


	){
		this.productos = listaservicios.getServicios().filter( producto => producto.wishList == true );
		console.log(this.productos);
		this.longitud= this.productos.length;
		console.log(this.longitud);
	}

} 
