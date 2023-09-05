import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { curso } from '../modelos/cursos';
@Component({
	selector: 'app-curso',
	templateUrl: './curso.component.html',
	styleUrls: ['./curso.component.css'],
	providers: [CursosService]
})


export class CursoComponent implements OnInit {



	public posicion: number;
	public cursosLista: Array<curso>;
	constructor(private _CursosService: CursosService) {
		this.posicion = 0;
		this.cursosLista = Array<curso>()

	}

	sumar() {
		if (this.posicion < this.cursosLista.length - 1) {
			this.posicion++;
		} else {
			this.posicion = 0;
		}

	}
	restar() {
		if (this.posicion > 0) {
			this.posicion--;
		} else {
			this.posicion = this.cursosLista.length - 1;

		}


	}

	ngOnInit(): void {
		this.cursosLista = this._CursosService.getCursos();
	}


}

