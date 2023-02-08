
export class Pokemon{
  constructor(data){
    this.name = data.name
    this.img = data.img
    this.user = data.user
    this.url = data.url
  }

  get AllPokemonTemplate(){
    return  `
    <div class="col-12">
       <button onclick="app.pokedexController.get_pokemon_by_url('${this.url}')" class="btn btn-outline-success w-100">${this.name}</button>
     </div>
    `
  }
}