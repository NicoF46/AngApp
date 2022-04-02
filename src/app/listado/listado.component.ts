import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public nombre:string ="Jose";
  deshabilitado:boolean=false;
  texto:string="asd";
  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(){
    console.log('fafa');
    this.deshabilitado=!this.deshabilitado;
  }

}
