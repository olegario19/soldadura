import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import{servicioService, valida}from '../../servicios/appservicios.service';
@Component({
  selector: 'app-cita-cirugia',
  templateUrl: './cita-cirugia.component.html',
  styleUrls: ['./cita-cirugia.component.css']
})
export class CitaCirugiaComponent  {
    private citacirugia:valida[]=[];

    private cantidad:number=1;
     private rta:number;
     calcula(){
       this.rta=this.citacirugia['precio']*this.cantidad;
     }
  constructor(private _ActivatedRoute:ActivatedRoute, private _servicioService:servicioService ) { 
    this._ActivatedRoute.params.subscribe(params =>{
      this.citacirugia=_servicioService.getidcirugia(params['id']);
      console.log(this.citacirugia['precio']);
     // console.log(this.citacirugia);
      
        })
        

 
  }

  
}
