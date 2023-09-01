import { Component, OnInit } from '@angular/core';
import { ServiciosBD} from '../models/lstServicios'
import { ListaserviciosService } from '../servicios/listaservicios.service'

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css'],
  // providers: [ListaserviciosService]
})
export class ListaServiciosComponent implements OnInit{
 public listaServicios: Array<ServiciosBD>
 public codServicios: string[] = []
 public verdetalle: boolean = false


 constructor(private _listaServicios: ListaserviciosService){
  this.listaServicios = new Array<ServiciosBD>()
 }

 ngOnInit(): void {
   this.listaServicios = this._listaServicios.getServicios()
   
 }

 verDetalles(){
this.verdetalle = true
 }


}
