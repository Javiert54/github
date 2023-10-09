import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar Componentes
import { HomeComponent } from './componentes/home/home.component'
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component'
import { CursoComponent} from './componentes/curso/curso.component'
import { DashboardComponent } from './componentes/dashboard/dashboard.component'
import { LoginComponent } from './componentes/login/login.component'
import { SignInComponent } from './componentes/sign-in/sign-in.component'
import { AddImageProfileComponent } from './componentes/addImageProfile/addImageProfile.component';


import { AuthGuard } from './utils/auth.guard'

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: SignInComponent},
  //canActivate: [Authguard] se usa para ocultar ese componente al usuario que no está logeado
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'crearcurso', component: CrearCursosComponent},
  {path: 'listarcursos', component: ListarCursosComponent},
  {path: 'editarCurso/:id', component: CrearCursosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'verCurso/:id', component: CursoComponent},
  {path: 'addImageProfile', component: AddImageProfileComponent},

  {path: '**', redirectTo: 'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
