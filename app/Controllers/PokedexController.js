import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { pokedexService } from "../Services/PokedexService.js";
import { setHTML } from "../Utils/Writer.js";
import { Pokemon } from "../Models/Pokemon.js";

function _draw_all_pokemon(){
let template = ' '
appState.all_pokemon.forEach(p => template+=  p.AllPokemonTemplate)
setHTML('all-pokemon', template)
}
export class PokedexController {
constructor(){
  console.log('Pokedex Controller working');
  this.get_pokemon()
  appState.on('all_pokemon', _draw_all_pokemon)
}

async get_pokemon(){
  try {
    await pokedexService.get_pokemon();
  } catch (error) {
    Pop.error(error.message)
    console.error(error)
  }
}

async get_pokemon_by_url(url){
try {
  await pokedexService.get_pokemon_by_url(url)
} catch (error) {
  Pop.error(error.message)
  console.error(error)
}
}
}