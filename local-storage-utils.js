import { findById, findByName } from './utils.js';

const POKEDEX = 'POKEDEX';


export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    if (!stringyPokedex) return [];
    const parsedPokedex = JSON.parse(stringyPokedex);
    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
} 

export function encounterPokemon(pokemon) {
    const pokedex = getPokedex();
    const matchingPokedexItem = findById(pokedex, pokemon.id);

    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;
    } else {
        const newPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexItem);
    }

    setPokedex(pokedex);
    return pokedex;
}

export function capturePokemon(pokemon) {
    const pokedex = getPokedex();
    const matchingPokedexItem = findByName(pokemon.pokemon);
    matchingPokedexItem.captured++;
    setPokedex(pokedex);
    return pokedex;
}