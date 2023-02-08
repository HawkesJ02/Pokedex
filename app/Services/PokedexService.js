import { appState } from "../AppState.js";
import { PokemonApi } from "./AxiosService.js";
import { Pop } from "../Utils/Pop.js";
import { Pokemon } from "../Models/Pokemon.js";

class PokedexService{
 async get_pokemon_by_url(url) {
  const response = await PokemonApi.get(url)
  console.log('get by name', response.data);
  appState.pokemon = new Pokemon (response.data)
  console.log('got the pokeman', appState.pokemon);
 }
 async get_pokemon() {
try {
  const response = await PokemonApi.get()
  console.log('gotten pokemans raw data:',response.data);
  const all_pokemon = response.data.results.map(p => new Pokemon(p))
  console.log(all_pokemon);
  appState.all_pokemon = all_pokemon
} catch (error) {
  Pop.error(error.message)
  console.error(error)
}
  }

}

export const pokedexService = new PokedexService();