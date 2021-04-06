import pokeData from './data.js';

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) return item;
    }
}

export function findByName(name) {
    for (let item of pokeData) {
        if (item.pokemon === name) return item;
    }
}