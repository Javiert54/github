// Módulos y Librerías
import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
// import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
// import { GCurso } from '../Models/gcurso'
import { curso } from '../modelos/cursos'
// import { GcursoService } from '../servicios/gcurso.service'
import { save_cursoService } from '../servicios/curso.service'

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css'],
})

export class CrearcursoComponent implements OnInit{
cursoForm: FormGroup;
titulo = 'Crear curso';
  public id: string | null;
  constructor(
              private fb: FormBuilder,
              private router: Router,
              // private toastr: ToastrService,
              private _cursoService: save_cursoService,
              private aRouter: ActivatedRoute) { 
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      duracion: ['', Validators.required],
      temas: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCurso() {

    const CURSO: curso = {
      name: this.cursoForm.get('name')?.value,
      duration: this.cursoForm.get('duration')?.value,
      description: this.cursoForm.get('descripcion')?.value,
      temario: this.cursoForm.get('temario')?.value,
      category: this.cursoForm.get('category')?.value,
      fotoPortada: this.cursoForm.get('fotoPortada')?.value
    }

    if(this.id !== null){
      // Editamos Curso
      this._cursoService.updateCurso(this.id, CURSO).subscribe(data =>{
        // this.toastr.info('El curso fue actualizado con exito!', 'Curso Actualizado!');

        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.cursoForm.reset();
      })
    } else{
      // Agregamos Curso
      console.log(CURSO);
        this._cursoService.saveCurso(CURSO).subscribe(data => {
        // this.toastr.success('El curso fue registrado con exito!', 'Curso Registrado!');
        console.log("hola");
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.cursoForm.reset();
      })
    }
  }
  
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar curso';
      this._cursoService.getCurso(this.id).subscribe(data => {
        this.cursoForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          categoria: data.categoria,
          duracion: data.duracion,
          temas: data.temas
        })
      })
    }
  }

}
