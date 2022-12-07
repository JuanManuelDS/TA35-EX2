import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioComponent, InformacionComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormularioComponent, InformacionComponent],
})
export class ComponentsModule {}
