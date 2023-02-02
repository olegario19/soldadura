import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {servicioService,valida} from '../../servicios/appservicios.service';

@Component({
  selector: 'app-citasservicios',
  templateUrl: './citasservicios.component.html',
  styleUrls: ['./citasservicios.component.css']
})
export class CitasserviciosComponent  {
  private parametro:number;
  private servicioServicee:servicioService;
  private contienecita:valida[]=[];
 
 // precio=document.getElementById("precio").value;
 precio:number;
  cantidad:number=1;
  rta:number;
  calcula(){
    this.rta=this.contienecita['precio']* this.cantidad;
  }
 
  constructor( private _ActivatedRoute:ActivatedRoute, private _servicioService:servicioService ) { 
    
  this._ActivatedRoute.params.subscribe(params =>{
this.contienecita=_servicioService.getidcardio(params['id']);

//console.log(_servicioService.getid(params['id']));

  })
  
  console.log(this.contienecita['precio']);
  



  }

 

}
