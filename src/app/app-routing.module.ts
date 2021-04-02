import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { TrabajoIntegradorComponent } from './componentes/trabajo-integrador/trabajo-integrador.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'contacto', component: ContactoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'integrador', component: TrabajoIntegradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
