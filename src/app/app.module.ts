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

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlumnosComponent,
    TrabajoIntegradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
