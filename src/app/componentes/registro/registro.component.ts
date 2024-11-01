import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControlOptions, ReactiveFormsModule }
from '@angular/forms';

 @Component({
 selector: 'app-registro',
 standalone: true,
 imports: [ReactiveFormsModule, CommonModule],
 templateUrl: './registro.component.html',
 styleUrl: './registro.component.css'
 })

 //clase
 export class RegistroComponent
 {
  
 registroForm!: FormGroup;

 //constructor:
 constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
 }

 /*
 se utiliza para inicializar el formulario de registro en un
 componente de Angular. Dentro de esta función, se crea una instancia de FormGroup utilizando el
 FormBuilder, que facilita la creación de formularios reactivos. El formulario, denominado
 registroForm, se configura con varios campos, cada uno representado por un FormControl y
 sus respectivas validaciones
 */
 private crearFormulario() 
 {
  this.registroForm = this.formBuilder.group({
  cedula: ['', [Validators.required]],
  nombre: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  direccion: ['', [Validators.required]],
  telefono: ['', [Validators.required, Validators.maxLength(10)]],
  password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]],
  confirmaPassword: ['', [Validators.required]]
  }, { validators: this.passwordsMatchValidator } as AbstractControlOptions
);

}

  public registrar()
  {
    console.log(this.registroForm.value);
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmaPassword = formGroup.get('confirmaPassword')?.value;
    // Si las contraseñas no coinciden, devuelve un error, de lo contrario, null
    return password == confirmaPassword ? null : { passwordsMismatch: true };
    }

 }
