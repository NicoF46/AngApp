import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  public listadoDispositivos=[{
    nombre: "Dispositivo 1",
    ubicacion: "cocina"
  },{
    nombre: "Dispositivo 2",
    ubicacion: "patio"
  }];

  constructor() { }

  getDispositivos(){
    return this.listadoDispositivos;
  }
}
