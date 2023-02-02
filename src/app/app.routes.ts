import { Routes,RouterModule } from "@angular/router";
import{HomeComponent}from './componentes/home/home.component';
import{ContactosComponent}from './componentes/contactos/contactos.component';
import{ProductosComponent}from './componentes/productos/productos.component';
import{CitaComponent}from './componentes/cita/cita.component';
import {CitasserviciosComponent}from './componentes/citasservicios/citasservicios.component';
import { CitaCirugiaComponent }from './componentes/cita-cirugia/cita-cirugia.component';
import{CitaRayosxComponent}from './componentes/cita-rayosx/cita-rayosx.component';
import{PrincipalComponent}from './componentes/principal/principal.component';

const APP_RUTAS:Routes=[
    {path:'home',component:HomeComponent},
    {path:'contactos',component:ContactosComponent},
    {path:'Productos',component:ProductosComponent},
    {path:'citas',component:CitaComponent},
    {path:'citaservicio/:id',component:CitasserviciosComponent},
    {path:'citaCirugia/:id',component:CitaCirugiaComponent},
    {path:'rayosx/:id',component:CitaRayosxComponent},
    {path:'principal',component:PrincipalComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}


];
export const APP_ROUT=RouterModule.forRoot(APP_RUTAS);