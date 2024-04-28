import {Component} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {ApiResultListPokemonTCG, PokemonCard} from "../../common/interfacesPokemonTCG";
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-pokemons',
  standalone: true,
  imports: [RouterModule,RouterOutlet,RouterLink],
  templateUrl: './lista-pokemons.component.html',
  styleUrl: './lista-pokemons.component.css'
})
export class ListaPokemonsComponent {
  pokemons: PokemonCard [] = [];

  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
  }

  private loadPokemons() {
    this.pokemonService.getPokemons().subscribe(
      {
        next: (value: ApiResultListPokemonTCG) => {
          this.pokemons = value.data;
        },
        error: (error) => {
          console.error(error);
        }, complete: () => {
          console.log('Load Pokemon Completed');
        }
      }
    )
  }

}






