import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';

/*Aquí defines las rutas principales de tu aplicación, vinculando 
cada una a un componente específico*/
 export const routes: Routes = [
 { path: '', component: InicioComponent },
 { path: 'login', component: LoginComponent },
 { path: 'registro', component: RegistroComponent },
 { path: 'crear-evento', component: CrearEventoComponent },
 { path: "**", pathMatch: "full", redirectTo: "" }
 ];