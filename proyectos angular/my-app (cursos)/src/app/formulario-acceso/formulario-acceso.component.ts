import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario-acceso',
  templateUrl: './formulario-acceso.component.html',
  styleUrls: ['./formulario-acceso.component.css']
})
export class FormularioAccesoComponent {

  public username: String;
  public password: String;

  constructor(){

    this.username = String();
    this.password = String();
  }

}
