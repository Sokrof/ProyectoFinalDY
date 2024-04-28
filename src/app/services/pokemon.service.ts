import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultListPokemonTCG, ApiResultOnePokemonTCG} from "../common/interfacesPokemonTCG";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private URI: string = 'http://pokeapi.co/api/v2/cards';
  private http: HttpClient = inject(HttpClient);

  getPokemons():Observable<ApiResultListPokemonTCG> {

    return this.http.get<ApiResultListPokemonTCG>(`${this.URI}/pokemons`);
  }
  getPokemon(id: string): Observable<ApiResultOnePokemonTCG> {

    return this.http.get<ApiResultOnePokemonTCG>(`${this.URI}/${id}`);
  }
}
