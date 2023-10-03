// Módulos y Librerías
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
// Servicio - Modelo
import { GUser } from '../../config/Modelos/guser';
import { GuserService } from '../../config/Servicios/guser.service';  //¡Hay que añadir los servicios de GuserService

@Component({
  selector: 'app-crear-users',
  templateUrl: './crear-users.component.html',
  styleUrls: ['./crear-users.component.css'],
})
export class CrearUsersComponent implements OnInit {
  userForm: FormGroup;
  verUser: any
  titulo = 'Crear user';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _userService: GuserService,
    private aRouter: ActivatedRoute) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      imagen: ['', Validators.required],
      duracion: ['', Validators.required],
      temas: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();

  }

  agregarUser() {

    const CURSO: GUser = {
      nombre: this.userForm.get('nombre')?.value,
      descripcion: this.userForm.get('descripcion')?.value,
      categoria: this.userForm.get('categoria')?.value,
      imagen: this.userForm.get('imagen')?.value,
      duracion: this.userForm.get('duracion')?.value,
      temas: this.userForm.get('temas')?.value
    }

    if (this.id !== null) {
      // Editamos User
      this._userService.editarUser(this.id, CURSO).subscribe(data => {
        this.toastr.info('El user fue actualizado con exito!', 'User Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    } else {
      // Agregamos User
      console.log(CURSO);
      this._userService.guardarUser(CURSO).subscribe(data => {
        this.toastr.success('El user fue registrado con exito!', 'User Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar user';
      this._userService.obtenerUser(this.id).subscribe(data => {
        this.userForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          categoria: data.categoria,
          imagen: data.imagen,
          duracion: data.duracion,
          temas: data.temas
        })
      })
    }
  }


}
