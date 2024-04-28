import { Routes,RouterModule } from '@angular/router';
import { TabVerticalComponent } from './componentes/tab-vertical/tab-vertical.component';
import { ListaPokemonsComponent } from './componentes/lista-pokemons/lista-pokemons.component';


export const routes: Routes = [
    // Ruta por defecto o vacía, nos redirige a 'inicio'
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    // Ruta 'inicio' que carga el componente tab-vertical como página de inicio
    { path: 'inicio', component: TabVerticalComponent },
    { path: 'cartas', component: ListaPokemonsComponent}
];