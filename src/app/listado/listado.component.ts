import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public nombre:string ="Jose";
  deshabilitado:boolean=true;
  texto:string="asd";
  constructor(public listadoServ:ListadoService) {
    console.log(listadoServ.getDispositivos());
   }

   miArray = [{nombre: "juan"},{nombre: "Pedro"}];
  ngOnInit(): void {
  }

  cambiarValor(){
    console.log('fafa');
    this.deshabilitado=!this.deshabilitado;
  }

}
