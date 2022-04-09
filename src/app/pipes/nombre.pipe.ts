import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: number, exponente?: number): number {
    let valorExp = 1;
    if (exponente){
      valorExp = exponente;
    }
    return Math.pow(value, valorExp);
  }

}
