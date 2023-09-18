import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CrearCursoComponent } from './crearCurso/crearCurso.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatToolbarHarness} from '@angular/material/toolbar/testing';
import {MatSelectModule} from '@angular/material/select';
import { SelectComponent } from './select/select.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [	
    AppComponent,
    CursosComponent,

    ProfesoresComponent,

    FormularioAccesoComponent,
    FormularioRegistroComponent,
    FormularioConsultaComponent,
    HeaderComponent,
    FooterComponent,
    CrearCursoComponent,

    SelectComponent,

    AlumnosComponent,
   ],
  imports: [
    ProfesorComponent,
    CommonModule,
    CursoComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    //ReactiveFormsModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    AlumnoComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
