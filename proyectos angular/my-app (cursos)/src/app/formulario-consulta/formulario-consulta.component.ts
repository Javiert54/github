import { Component } from '@angular/core';
import { FormularioConsultaService } from '../servicios/formularioConsulta.service';

@Component({
	selector: 'app-formulario-consulta',
	templateUrl: './formulario-consulta.component.html',
	styleUrls: ['./formulario-consulta.component.css'],
	providers: [FormularioConsultaService],
})
export class FormularioConsultaComponent {

	public correo: String;
	public password: String;
	public message: String;

	constructor(private _FormularioConsultaService: FormularioConsultaService) {

		this.correo = "";
		this.password = "";
		this.message = "";


	}

	mensage(correo: String, password: String, message: String) {

		this._FormularioConsultaService.getMessages().push(
			{
				correo: correo,
				password: password,
				message: message
			}
		);
		console.log(this._FormularioConsultaService.getMessages());

	}

}
