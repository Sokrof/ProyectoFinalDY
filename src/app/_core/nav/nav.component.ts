import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeckService } from 'src/app/_services/desk.services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf]
})
export class NavComponent implements OnInit {

  numDecks: number = 0; // Variable para almacenar el número de mazos

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    // Al inicializar el componente, se suscribe al servicio de mazos para actualizar el número de mazos
    this.deckService.getDeck().subscribe(decks => {
      this.numDecks = this.deckService.countDecks(); // Actualiza el número de mazos (Será operativo cuando tengamos el servicio)
    });
  }
}

