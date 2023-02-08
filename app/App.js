import { PokedexController } from "./Controllers/PokedexController.js";

class App {
  pokedexController = new PokedexController();
}

window["app"] = new App();
