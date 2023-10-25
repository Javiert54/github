import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;
  isProfessor: boolean = false;
  asignedSubjects: Array<any> = [
    {name: null, age:null}
  ]
  options: Array<Array<any>> = [
    []
  ]
  availableSubjects: Array<any> = [
    {name:"ana", age:20 },
    {name: "juan", age: 23},
    {name: "pepe", age: 45}
  ]

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {


      this.options[0] = this.availableSubjects.filter(subject => !this.asignedSubjects.includes(subject));




    // this.options.forEach(subject => {
    //   this.options[ this.options.indexOf(subject) ] = this.availableSubjects.filter(subject => !this.asignedSubjects.includes(subject));
    // });

  }


  
  addSubject(){
    if( this.asignedSubjects.length < this.availableSubjects.length ){
      this.asignedSubjects.push( {name: null, age: null} )
      this.options.push( this.availableSubjects.filter(subject => !this.asignedSubjects.includes(subject)) )
    }
    console.log(this.asignedSubjects)
    // this.updateArray(this.asignedSubjects[this.asignedSubjects.length])

  }

  // updateArray(subject:any){
  //   this.options[this.options.indexOf(subject)] = this.availableSubjects.filter( subject => !this.asignedSubjects.includes(subject) )
  // }
  updateArray(subject: any) {

    this.options[ this.options.indexOf(subject) ] = this.availableSubjects.filter(subject => !this.asignedSubjects.includes(subject));

    console.log(subject)
  }

  addUser() {

    // Validamos que el usuario ingrese valores
    if (this.username == '' || this.password == '' || this.confirmPassword == '') {
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
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}