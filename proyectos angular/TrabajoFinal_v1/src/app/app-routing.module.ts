import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

// Guards
import { AuthGuard } from './utils/auth.guard';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AgregarArchivoComponent } from './components/agregar-archivo/agregar-archivo.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ListarCursoComponent } from './components/listar-curso/listar-curso.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard] },
  { path: 'archivo', component: AgregarArchivoComponent, canActivate: [AuthGuard] },
  { path: 'crearCurso', component: CrearCursoComponent, canActivate: [AuthGuard] },
  {path: 'editarCurso/:id', component: CrearCursoComponent},
  {path: 'listado', component: ListarCursoComponent},
  // { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
