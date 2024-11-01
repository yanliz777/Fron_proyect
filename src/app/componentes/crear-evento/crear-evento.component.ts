/*
FormArray es una característica de Angular Reactive Forms 
que permite manejar arrays de FormGroups
*/
import { Component } from '@angular/core';
import { FormArray, FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})


export class CrearEventoComponent 
{
  tiposDeEvento: string[];
/*
agregando un ! a la declaración de l avariable le indica a TypeScript 
que la propiedad será inicializada más adelante, como en el método crearFormulario().
*/
  crearEventoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) 
  {
    this.crearFormulario();
    this.tiposDeEvento = ['Concierto', 'Fiesta', 'Teatro', 'Deportes'];
  }


  private crearFormulario() {
    this.crearEventoForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    localidades: this.formBuilder.array([]),
    imagenPortada: ['', [Validators.required]],
    imagenLocalidades: ['', [Validators.required]]
    });
    }

      // Getter para acceder fácilmente al FormArray
  get localidadesArray() {
    return this.crearEventoForm.get('localidades') as FormArray;
  }

  // Método para crear una nueva localidad
  crearLocalidad(): FormGroup {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  // Método para agregar localidad
  agregarLocalidad() {
    this.localidadesArray.push(this.crearLocalidad());
  }

  // Método para eliminar localidad
  eliminarLocalidad(index: number) {
    this.localidadesArray.removeAt(index);
  }


  /*
   La función onFileChange se utiliza para manejar la selección de archivos en un formulario,
 permitiendo seleccionar diferentes tipos de imágenes según el contexto. Primero, verifica si el
 usuario ha seleccionado al menos un archivo (event.target.files.length > 0). Si es así,
 obtiene la lista de archivos seleccionados. Luego, utiliza un switch para determinar el tipo de
 archivo basado en el argumento tipo proporcionado. Si el tipo es 'localidades', establece el primer
 archivo seleccionado en el control de formulario imagenLocalidades utilizando setValue(). Si el
 tipo es 'portada', establece el archivo en imagenPortada. Esto permite gestionar múltiples campos
 de carga de archivos en el formulario de manera organizada y específica.
  */
  public onFileChange(event:any, tipo:string){
    if (event.target.files.length > 0) {
      const files = event.target.files;

      switch(tipo)
      {
      case 'localidades':
        this.crearEventoForm.get('imagenLocalidades')?.setValue(files[0]);
      break;
      case 'portada':
        this.crearEventoForm.get('imagenPortada')?.setValue(files[0]);
      break;
      }
    }
  }

  public crearEvento(){
    console.log(this.crearEventoForm.value);
    }

}
