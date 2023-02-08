// @ts-ignore
export const PokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
})

// @ts-ignore
export const SandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/hawkes/pokemon',
  timeout: 3500,
})