import { Component, OnInit } from '@angular/core';
import { curso } from '../modelos/cursos';
import { Global } from '../servicios/global';
import { save_cursoService } from '../servicios/curso.service';


@Component({
	selector: 'app-crearCurso',
	templateUrl: './crearCurso.component.html',
	styleUrls: ['./crearCurso.component.css'],
	providers: [save_cursoService]
})

export class CrearCursoComponent implements OnInit {
	public title: string;
	public curso: curso;
	public save_curso: any;
	public status: any;
	public result:any;
	public temarioString: string;
	constructor(private _cursoService: save_cursoService) {
		this.title = "Crear Curso";
		this.temarioString = String();
		this.curso = new curso('', 500, '', [], '', '');
		this.result = null
		// this.curso = new curso()
		// curso.nombreCurso= ''
		// title = "titulo";

	}

	ngOnInit() {

	}
	onSubmit(form: {reset:() => void}) {
		this.curso.temario = this.temarioString.split(', ')
		this._cursoService.saveCurso(this.curso).subscribe(response => {
			
			if(response.curso){
				this.save_curso = this.result.curso;
				this.status = 'success';
				form.reset();
			}else{
				this.status = "failed";
			}
		});
		
	}
}

