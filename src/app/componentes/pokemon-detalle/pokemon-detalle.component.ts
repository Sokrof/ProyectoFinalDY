import {Component, inject} from '@angular/core';
import {PokemonCard} from "../../common/interfacesPokemonTCG";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-detalle',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detalle.component.html',
  styleUrl: './pokemon-detalle.component.css'
})
export class PokemonDetalleComponent {
  pokemon!:PokemonCard;
  private pokemonService: PokemonService = inject(PokemonService);
  //El activate route básicamente es para leer la ruta y buscar los parámetros que tiene
  private ar: ActivatedRoute = inject(ActivatedRoute);
  constructor() {
    this.loadPokemon();
  }



  private loadPokemon() {
    //Aquí se guarda en una variable 'id' el valor del parámetro 'id' de la ruta, que está definido en el archivo rutas
    //en la ruta de detalle con pokemon/:id
    const id = this.ar.snapshot.params['id'];
    this.pokemonService.getPokemon(id).subscribe(
      {
        next: value=> {
          //la información del pokemon está dentro del objeto data dentro de value: value.data
          this.pokemon =value.data;
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
