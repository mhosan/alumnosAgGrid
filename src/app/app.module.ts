import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { TrabajoIntegradorComponent } from './componentes/trabajo-integrador/trabajo-integrador.component';
import { AgGridModule } from 'ag-grid-angular';
import { AlumnosArba1Component } from './componentes/alumnos-arba1/alumnos-arba1.component';
import { AlumnosArba2Component } from './componentes/alumnos-arba2/alumnos-arba2.component';
import { AlumnosIpap1Component } from './componentes/alumnos-ipap1/alumnos-ipap1.component';
import { AlumnosIpap2Component } from './componentes/alumnos-ipap2/alumnos-ipap2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlumnosComponent,
    TrabajoIntegradorComponent,
    AlumnosArba1Component,
    AlumnosArba2Component,
    AlumnosIpap1Component,
    AlumnosIpap2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
