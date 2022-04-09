import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NombrePipe } from '../pipes/nombre.pipe';
import { DirectivaattrDirective } from '../directives/directivaattr.directive';
import { FormListadoComponent } from './form-listado/form-listado.component';

@NgModule({
  declarations: [ListadoComponent, NombrePipe, DirectivaattrDirective, FormListadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListadoComponent, NombrePipe, FormListadoComponent]
})
export class ListadoModule { }
