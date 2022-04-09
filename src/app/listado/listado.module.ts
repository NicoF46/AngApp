import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { FormsModule } from '@angular/forms';
import { NombrePipe } from '../pipes/nombre.pipe';
import { DirectivaattrDirective } from '../directives/directivaattr.directive';

@NgModule({
  declarations: [ListadoComponent, NombrePipe, DirectivaattrDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListadoComponent, NombrePipe]
})
export class ListadoModule { }
