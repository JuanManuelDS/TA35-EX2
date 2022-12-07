import { Component } from '@angular/core';
import { Formulario } from './components/interfaces/formulario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TA35-EX2';

  formulario: Formulario | undefined;

  enviarFormulario(informacion: Formulario) {
    this.formulario = informacion;
  }
}
