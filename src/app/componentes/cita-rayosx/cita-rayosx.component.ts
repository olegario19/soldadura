import { Component, OnInit } from '@angular/core';
import{servicioService, valida}from '../../servicios/appservicios.service';
import {ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-cita-rayosx',
  templateUrl: './cita-rayosx.component.html',
  styleUrls: ['./cita-rayosx.component.css']
})
export class CitaRayosxComponent  {
  private citarayosx:valida[]=[];
  private cantidad:number=1;
  private rta:number;
  calcula(){
    this.rta=this.citarayosx['precio']*this.cantidad;
  }
  constructor( private _ActivatedRoute:ActivatedRoute,private _servicioService:servicioService ) {
    this._ActivatedRoute.params.subscribe(params =>{
      this.citarayosx=_servicioService.getidrayosx(params['id']);
      console.log(this.citarayosx);
     // console.log(this.citacirugia);
      
        })

   
   }



}
