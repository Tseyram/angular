import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'application de pokémons';
  pokemons=["Bulbizarre","Salamèche","Carapuce"];
  ngOnInit(): void {
    console.table(this.pokemons);
    this.selectPokemon("Bulbizarre")
  }
  selectPokemon(pokemonName:string){
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`);
  }
}
