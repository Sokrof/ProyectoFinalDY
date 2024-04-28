import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { TabVerticalComponent } from "./componentes/tab-vertical/tab-vertical.component";
import { ListaPokemonsComponent } from "./componentes/lista-pokemons/lista-pokemons.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent, TabVerticalComponent, ListaPokemonsComponent, RouterLink]
})
export class AppComponent {
  title = 'ProyectoAngular';
}
