import { Component, OnInit, Input} from '@angular/core';
import { ServiciosBD } from '../models/lstServicios'
import { ListaserviciosService } from '../servicios/listaservicios.service'

@Component({
  selector: 'app-gestion-servicios',
  templateUrl: './gestion-servicios.component.html',
  styleUrls: ['./gestion-servicios.component.css'],
  providers: [ListaserviciosService]
})
export class GestionServiciosComponent implements OnInit{
  public listaServicios: Array<ServiciosBD>
  public codServicios: string[] = []
  public Pedidos: boolean
  public codigo:string = ""
  public listaChecks:Array<boolean>;
  @Input() mensaje?: string


  
  constructor(private _listaServicios: ListaserviciosService){
    this.listaServicios = new Array<ServiciosBD>()
    this.Pedidos = false
    this.listaChecks = Array();
   }

ngOnInit(): void {
  this.listaServicios = this._listaServicios.getServicios()
  this.getcodigos();
  this.mensaje = "DISPONIBLE";
  // this.listaServicios.forEach(element => {
  //   element.wishList = document.querySelector("#"+element.codSer).value
  // });

}
getcodigos(){
  this.listaServicios.forEach((codigo)=>{
    this.codServicios.push(codigo.codSer);
    this.listaChecks.push(codigo.wishList);
  })
  return this.listaChecks;
 }

 addContrato(){

  this.Pedidos = true

 }



}
