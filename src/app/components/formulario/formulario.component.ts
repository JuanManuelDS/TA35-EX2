import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formulario } from '../interfaces/formulario.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formulario: Formulario = {
    nombre: '',
    email: '',
    mensaje: '',
    validacion: '',
  };

  @ViewChild('miFormulario') miFormulario!: NgForm;

  @Output() formularioCompleto: EventEmitter<Formulario> = new EventEmitter();

  guardar() {
    //Si el formulario es válido entonces lo envío, sino no
    if (this.miFormulario.valid) {
      this.formularioCompleto.emit({ ...this.formulario });
      this.miFormulario.reset();
    } else {
      return;
    }
  }

  validarCampo(campo: string) {
    return (
      this.miFormulario?.controls[`${campo}`]?.invalid &&
      this.miFormulario?.controls[`${campo}`]?.touched
    );
  }
}
