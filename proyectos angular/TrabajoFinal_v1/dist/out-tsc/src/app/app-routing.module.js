import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signIn', component: SignInComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard] },
    { path: 'archivo', component: AgregarArchivoComponent, canActivate: [AuthGuard] },
    { path: 'crearCurso', component: CrearCursoComponent, canActivate: [AuthGuard] },
    { path: 'editarCurso/:id', component: CrearCursoComponent },
    { path: 'listado', component: ListarCursoComponent }
    // { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map