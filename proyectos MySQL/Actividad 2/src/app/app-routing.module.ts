import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar Componentes
import { HomeComponent } from './componentes/home/home.component'
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component'
import { CursoComponent} from './componentes/curso/curso.component'


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'crearcurso', component: CrearCursosComponent},
  {path: 'listarcursos', component: ListarCursosComponent},
  {path: 'editarCurso/:id', component: CrearCursosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'verCurso/:id', component: CursoComponent},

  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
