import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
//Rutass///
import{APP_ROUT}from './app.routes';
///.servicios////////

import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CitaComponent } from './componentes/cita/cita.component';
import { CitasserviciosComponent } from './componentes/citasservicios/citasservicios.component';
import { CitaCirugiaComponent } from './componentes/cita-cirugia/cita-cirugia.component';
import { CitaRayosxComponent } from './componentes/cita-rayosx/cita-rayosx.component';
import { PrincipalComponent } from './componentes/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactosComponent,
    ProductosComponent,
    CitaComponent,
    CitasserviciosComponent,
    CitaCirugiaComponent,
    CitaRayosxComponent,
    PrincipalComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUT,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
