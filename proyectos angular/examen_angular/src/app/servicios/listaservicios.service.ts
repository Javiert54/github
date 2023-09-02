import { Injectable } from '@angular/core';
import { ServiciosBD} from '../models/lstServicios'

@Injectable({
  providedIn: 'root'
})
export class ListaserviciosService {
  private listaServicios: Array<ServiciosBD>;

  constructor() { 
    this.listaServicios = [
                new ServiciosBD("100",0, "ECHO Alexa","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum optio consectetur expedita omnis dolorum.", 60,"./assets/media/products/producto1.jpg", true, true /*_GestionServiciosComponent.getcodigos()[0]*/), 
                new ServiciosBD("101",1, "Mochila multiusos","Lorem ipsum dolor sit amet consectetur adipisicing elit", 160,"./assets/media/products/producto2.jpg", true, true/*_GestionServiciosComponent.getcodigos()[1]*/), 
                new ServiciosBD("102",2, "Formación Backend","Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 160,"./assets/media/products/producto3.jpg", true , true/*_GestionServiciosComponent.getcodigos()[2]*/),
                new ServiciosBD("103",3, "Formación FullStack","Servicio de formación sobre  programación FullStock", 300,"./assets/media/products/producto4.jpg", true, true/*_GestionServiciosComponent.getcodigos()[3]*/)
              ];
  }
  getServicios():Array<ServiciosBD>{
    return this.listaServicios;

  }
  

}
