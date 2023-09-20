import { Component, OnInit } from '@angular/core';
import { userFicha } from '../modelos/user';
import { Global } from '../servicios/global';
import { crearUserService } from '../servicios/crearUser.service';

@Component({
	selector: 'app-formulario-registro',
	templateUrl: './formulario-registro.component.html',
	styleUrls: ['./formulario-registro.component.css'],
	providers: [crearUserService]
})

export class CrearUserComponent implements OnInit {
	public user: userFicha;
	public save_user: any;
	public status: any;
	public result:any;

	constructor(private _userService: crearUserService) {

		this.user = new userFicha('', '', 0, '', '', '', '', false, '', false, '', '');
		this.result = null

	}

	ngOnInit() {

	}
	onSubmit(form: {reset:() => void}) {
		this._userService.addUser(this.user).subscribe(response => {
			
			if(response.user){
				this.save_user = this.result.user;
				this.status = 'success';
				form.reset();
			}else{
				this.status = "failed";
			}
		});
		
	}
}

