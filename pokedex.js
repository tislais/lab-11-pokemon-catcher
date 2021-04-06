import { getPokedex } from './local-storage-utils.js';

const pokedex = getPokedex();

for (let item of pokedex) {
    const pokemonItem = document.createElement('div');
    const pokedexWrap = document.getElementById('pokedex-wrap');
    pokemonItem.textContent = item.id;
    pokedexWrap.append(pokemonItem);
}