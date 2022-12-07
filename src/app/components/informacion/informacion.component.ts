import { Component, Input } from '@angular/core';
import { Formulario } from '../interfaces/formulario.interface';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent {
  @Input() datosFormulario: Formulario | undefined;

  
}
