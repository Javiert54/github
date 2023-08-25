import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventarioComponent } from './inventario/inventario.component';
import { ProductoComponent } from './producto/producto.component'
import { InicioComponent } from './inicio/inicio.component';
import { AccesoComponent } from './acceso/acceso.component';


const routes: Routes = [
	{path: "inventario", component: InventarioComponent},
	{path: "producto", component: ProductoComponent},
	{path: "inicio", component: InicioComponent},
	{path: "acceso", component: AccesoComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
