import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

export const routes: Routes = [
    // Ruta por defecto o vacía, nos redirige a 'inicio'
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    // Ruta para 'inicio' que carga el componente InicioComponent
    { path: 'inicio', component: InicioComponent }
];
