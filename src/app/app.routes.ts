import { Routes } from '@angular/router';
import {ListaPokemonsComponent} from "./componentes/lista-pokemons/lista-pokemons.component";
import {PokemonDetalleComponent} from "./componentes/pokemon-detalle/pokemon-detalle.component";
import {PrincipalComponent} from "./componentes/principal/principal.component";
export const routes: Routes = [

  //Definimos las rutas de los componentes.
  {
    //Esta es la ruta vacía
    path: '', pathMatch: "full", redirectTo: '/principal'
  },
  {
    path: 'principal', component:PrincipalComponent
  },
  {
    path: 'pokemons', component:ListaPokemonsComponent
  },
  {
    path: 'pokemon/:id', component:PokemonDetalleComponent
  },
  {
    //Esta es la ruta de error
    path: '**', pathMatch: "full", redirectTo: '/principal'
  }
];
