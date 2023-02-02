
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class servicioService {
    private total:number;
    private cantidad1:number=20;
    private cantidad2:number=20;
    private cardiologiaa :valida[]=[{
        nombre:"cardiologia",
        descripcion:"La enfermedad cardiaca es uno de los padecimientos cada vez más diagnosticados en la actualidad, debido a que los pacientes viven más tiempo y, sobre todo, existen mejores métodos de evaluación del corazón.",
        imagen:"assets/imagenes/cardio.jpg",
        precio:500
    }];
    private cirugia:valida[]=[{
        nombre:"Cirugia",
        descripcion:"Los procedimientos quirúrgicos son procedimientos que se realizan de manera rutinaria, ya sea para procedimientos programados como de emergencias.",
        imagen:"assets/imagenes/cirugia.jpg",
        precio:2000
    }];
    private rayosx:valida[]=[{
        nombre:"rayos X",
        descripcion:"La radiografía constituye una herramienta fundamental para el diagnóstico de muchas enfermedades. Prácticamente sería muy difícil establecer con exactitud alteraciones ortopédicas importantes en nuestras mascotas, como una fractura. Es por ello que su uso se considera rutinario en la práctica médica veterinaria.",
        imagen:"assets/imagenes/rayosx.jpg",
        precio:1000
    }];
   private vacunacion:valida[]=[{
    nombre:'Medicina Preventiva ',
    descripcion:'Damos un seguimiento a la evolución de tu mascota y nos convertimos en su médico de cabecera, contamos con todas las vacunas que tu mascota necesita..',
    imagen:'assets/imagenes/vacuna.jpg',
    precio:50
   }];
      

  
    getcardiologiaa(){
        return this.cardiologiaa;
    }
    getcirugia(){
        return this.cirugia;
    }
    getrayosx(){
        return this.rayosx;
    }
    getvacunacion(){
        return this.vacunacion;
    }
    /////////// contiene id///////
    
    getidcardio( idx:string){
        return this.cardiologiaa[idx];
    }
    getidcirugia(idx:string){
        return this.cirugia[idx];
    }
    getidrayosx(idx:string){
        return this.rayosx[idx];
    }
    
}
export interface valida {
    nombre:String;
    descripcion:string;
    imagen:string;
    precio:number;
}