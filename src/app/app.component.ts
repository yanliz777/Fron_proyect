//Se resalta la anotación (decorador) @Component que tiene 
//la propiedad selector que es el nombre del componente, templateUrl
// que es el archivo html, styleUrls que son las hojas de
// estilo propias del componente e imports que es donde se definen 
//componentes, módulos o librerías externas que serán usadas dentro del componente

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HeaderComponent,
    FooterComponent],
     
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  footer = 'Universidad del Quindío- 2024-2';
}
