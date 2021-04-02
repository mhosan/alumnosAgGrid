import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosArba1Component } from './componentes/alumnos-arba1/alumnos-arba1.component';
import { AlumnosArba2Component } from './componentes/alumnos-arba2/alumnos-arba2.component';
import { AlumnosIpap1Component } from './componentes/alumnos-ipap1/alumnos-ipap1.component';
import { AlumnosIpap2Component } from './componentes/alumnos-ipap2/alumnos-ipap2.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { TrabajoIntegradorComponent } from './componentes/trabajo-integrador/trabajo-integrador.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'contacto', component: ContactoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'alumnos1', component: AlumnosIpap1Component},
  {path: 'alumnos2', component: AlumnosArba1Component},
  {path: 'alumnos3', component: AlumnosIpap2Component},
  {path: 'alumnos4', component: AlumnosArba2Component},
  {path: 'integrador', component: TrabajoIntegradorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
