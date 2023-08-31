import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';

import { curso } from '../modelos/cursos';


@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css'],
	providers: [CursosService]
})




export class CursosComponent implements OnInit {



	public cursos: Array<curso>



	constructor(private _CursosService: CursosService) {

		this.cursos = Array<curso>()


	}

	ngOnInit(): void {
		this.cursos = this._CursosService.getCursos();
		// console.log(this.cursos.length);

	}



}

