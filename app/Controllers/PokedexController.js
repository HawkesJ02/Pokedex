import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { pokedexService } from "../Services/PokedexService.js";

export class PokedexController {
constructor(){
  console.log('Pokedex Controller working');
  this.get_pokemon()
}

async get_pokemon(){
  try {
    await pokedexService.get_pokemon();
  } catch (error) {
    Pop.error(error.message)
    console.error(error)
  }
}
}