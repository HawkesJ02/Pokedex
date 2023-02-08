import { appState } from "../AppState.js";
import { PokemonApi } from "./AxiosService.js";
import { Pop } from "../Utils/Pop.js";

class PokedexService{
 async get_pokemon() {
try {
  const response = await PokemonApi.get('pokemon?limit=100000')
  console.log(response.data);
} catch (error) {
  Pop.error(error.message)
  console.error(error)
}
  }

}

export const pokedexService = new PokedexService();