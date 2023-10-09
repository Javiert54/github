import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import { AppModule } from 'src/app/app.module';


import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



// import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



export interface Curso {
  name: string;
  contenido: string;
}





@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],

  // standalone: true,
  // imports:[MatFormFieldModule, MatInputModule, MatAutocompleteModule, AppModule]
})
export class SignInComponent implements OnInit {



  myControl = new FormControl<string | Curso>('');
  options: Curso[] = [{name: "mates", contenido:"álgebra, geometría"}, {name: 'lengua y Literatura', contenido: "Shakespire, Cervantes"}, {name: 'Ciencias', contenido: "Conocimiento del Medio, biología"}];
  filteredOptions: Array<Observable<Curso[]>>;






  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isProfessor: boolean= false;
  loading: boolean = false;
  cursosAsignados: Array<any>=["mates", "ciencias"];
  currentElement: any
  focusElement: number


  name: any
  // myControl = new FormControl<string | User>('');
  // options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  // filteredOptions: Observable<User[]>;






  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) {

      this.filteredOptions= Array<Observable<Curso[]>>()
      this.focusElement= 0;
    }
    
  ngOnInit(): void {





    for(let y = 0; y < this.options.length; y++ ){

      this.filteredOptions[y] = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          this.name = typeof value === 'string' ? value : value?.name;
          return this.name ? this._filter(this.name as string) : this.options.slice();
        }),
      );
        console.log(this.filteredOptions)
    }


  }


  displayFn(curso: Curso): string {
    return curso && curso.name ? curso.name : '';
  }

  private _filter(name: string): Curso[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }




  addCurso(){
    console.log(this.name)
    console.log(this.filteredOptions)
    this.cursosAsignados.push('curso'+(this.cursosAsignados.length+1))
    this.currentElement= 'curso'+(this.cursosAsignados.length)
    this.focusElement = this.cursosAsignados.length

    this.options.push({name: "", contenido:""})

    // console.log(this.filteredOptions)

    }
  updateArray(id:number){
    this.cursosAsignados[id]= (<HTMLInputElement>document.getElementById('id'+id)).value;
    console.log(this.cursosAsignados);

  }

  addUser() {

    // Validamos que el usuario ingrese valores
    if (this.email == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el objeto
    const user: User = {
      email: this.email,
      password: this.password,
      isProfessor: this.isProfessor,
      cursosAsignados: this.cursosAsignados.join()
    }

    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.email} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

}
