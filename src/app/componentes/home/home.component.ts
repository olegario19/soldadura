import { Component, OnInit } from '@angular/core';
import {servicioService,valida}from '../../servicios/appservicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardiologia_muestra=true;
  cirugia_muestra=false;
  rayosx_muestra=false;
  medicinas_p_muestra=false;

 /* cardiologia={ nombre:"cardiologia",
  descripcion:"La enfermedad cardiaca es uno de los padecimientos cada vez más diagnosticados en la actualidad, debido a que los pacientes viven más tiempo y, sobre todo, existen mejores métodos de evaluación del corazón.",
  imagen:'assets/imagenes/cardio.jpg'
};
 */
   
  /*cirugia:any={
    nombrec:'Cirugia',
    descripcionc:'Los procedimientos quirúrgicos son procedimientos que se realizan de manera rutinaria, ya sea para procedimientos programados como de emergencias.',
    imagen:'assets/imagenes/cirugia.jpg'
  };

  rayosx:any={
    nombrer:'rayos X',
    descripcionr:'La radiografía constituye una herramienta fundamental para el diagnóstico de muchas enfermedades. Prácticamente sería muy difícil establecer con exactitud alteraciones ortopédicas importantes en nuestras mascotas, como una fractura. Es por ello que su uso se considera rutinario en la práctica médica veterinaria.',
    imagen:'assets/imagenes/rayosx.jpg'
  };
  */
 
  

  constructor(private _servicioService:servicioService ) { 
  
  }

private contiencardio:valida []=[];
private contienecirugia:valida []=[];
private conntienerayosx:valida[]=[];
private contienevacunacion:valida[]=[];

  ngOnInit() {
    this.contiencardio=this._servicioService.getcardiologiaa();
    this.contienecirugia=this._servicioService.getcirugia();
    this.conntienerayosx=this._servicioService.getrayosx();
    this.contienevacunacion=this._servicioService.getvacunacion();
   console.log(this.contienevacunacion);
  }

}
