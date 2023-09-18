import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearCursoComponent } from './crearCurso/crearCurso.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { SelectComponent } from './select/select.component';







const routes: Routes = [
  {path: "select", component:SelectComponent},
  {path: "alumno", component:AlumnoComponent},
  {path: "alumnos", component:AlumnosComponent},
  {path: "curso", component:CursoComponent},
  {path: "cursos", component:CursosComponent},
  {path: "acceso", component:FormularioAccesoComponent},
  {path: "consulta", component:FormularioConsultaComponent},
  {path: "registro", component:FormularioRegistroComponent},
  {path: "profesor", component:ProfesorComponent},
  {path: "profesores", component:ProfesoresComponent},
  {path: "crearCurso", component:CrearCursoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
