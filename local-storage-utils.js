import { findById } from './utils.js';

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

export function encounterPokemon(pokemon, index) {
    const pokedex = getPokedex();
    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);
    const poke1StatsEncountered = document.getElementById('poke1-stats-encountered');
    const poke2StatsEncountered = document.getElementById('poke2-stats-encountered');
    const poke3StatsEncountered = document.getElementById('poke3-stats-encountered');
    const poke1StatsName = document.getElementById('poke1-stats-name');
    const poke2StatsName = document.getElementById('poke2-stats-name');
    const poke3StatsName = document.getElementById('poke3-stats-name');
    const poke1StatsCaptured = document.getElementById('poke1-stats-captured');
    const poke2StatsCaptured = document.getElementById('poke2-stats-captured');
    const poke3StatsCaptured = document.getElementById('poke3-stats-captured');

    if (matchingPokedexItem) {
        if (index === 0) { 
            poke1StatsEncountered.textContent = matchingPokedexItem.encountered;
            poke1StatsName.textContent = matchingPokedexItem.id;
            poke1StatsCaptured.textContent = matchingPokedexItem.captured;
        }
        if (index === 1) {
            poke2StatsEncountered.textContent = matchingPokedexItem.encountered;
            poke2StatsName.textContent = matchingPokedexItem.id;
            poke2StatsCaptured.textContent = matchingPokedexItem.captured;
        }
        if (index === 2) { 
            poke3StatsEncountered.textContent = matchingPokedexItem.encountered;
            poke3StatsName.textContent = matchingPokedexItem.id;
            poke3StatsCaptured.textContent = matchingPokedexItem.captured;
        }
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
    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);
    matchingPokedexItem.captured++;
    setPokedex(pokedex);
    return pokedex;
}