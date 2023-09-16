import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { Router } from '@angular/router';
import { curso } from '../modelos/cursos';

export var posicion : Number;
@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css'],
	providers: [CursosService]
})




export class CursosComponent implements OnInit {



	public cursos: Array<curso>


	constructor(private _CursosService: CursosService, private router: Router) {

		this.cursos = Array<curso>()

	}
	cursoExpediente(posicionbutton:Number){

		posicion = posicionbutton;
		this.router.navigate(['/curso']);

	}
	ngOnInit(): void {
		this.cursos = this._CursosService.getCursos();
		// console.log(this.cursos.length);

	}



}

