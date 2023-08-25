import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ProductoComponent } from './producto/producto.component'
import { AccesoComponent } from './acceso/acceso.component'
import { InicioComponent } from './inicio/inicio.component';
import { InventarioComponent } from './inventario/inventario.component';
// import { ModelsComponent } from './models/models.component';


@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    InventarioComponent,
    ProductoComponent,
    InicioComponent

    // ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
