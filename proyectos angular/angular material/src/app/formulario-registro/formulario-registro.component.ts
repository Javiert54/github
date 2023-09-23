import { Component } from '@angular/core';
import { userFicha } from '../modelos/user';
import { Global } from '../servicios/global';
import { crearUserService } from '../servicios/crearUser.service';


import { FormControl, Validators, FormGroupDirective, NgForm,} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
	  const isSubmitted = form && form.submitted;
	  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
  }




@Component({
	selector: 'app-formulario-registro',
	templateUrl: './formulario-registro.component.html',
	styleUrls: ['./formulario-registro.component.css'],
	providers: [
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
		crearUserService,
		RouterLink,
		ReactiveFormsModule,
		MatFormFieldModule,
		// MatInputModule
	],

})

export class CrearUserComponent {
	public user: userFicha;
	public save_user: any;
	public status: any;
	public result:any;


	emailFormControl = new FormControl('', [Validators.required, Validators.email]);

	matcher = new MyErrorStateMatcher();

	constructor(private _userService: crearUserService) {

		this.user = new userFicha('', '', 0, '', '', '', '', '', false, '', false, '');
		this.result = null;

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

