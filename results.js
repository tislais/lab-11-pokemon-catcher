import { getPokedex } from './local-storage-utils.js';

const pokedex = getPokedex();

const resetButton = document.getElementById('reset-button');
//const pokedexWrap = document.getElementById('pokedex-wrap');
const pokeTableBody = document.getElementById('poke-table-body');

for (let item of pokedex) {
    //const pokemonItem = document.createElement('div');
    //pokemonItem.textContent = item.id;
    //pokedexWrap.append(pokemonItem);
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdCaptured = document.createElement('td');
    const tdEncountered = document.createElement('td');

    tdName.textContent = item.id;
    tdName.classList.add('td-name');
    tdCaptured.textContent = item.captured;
    tdCaptured.classList.add('td-captured');
    tdEncountered.textContent = item.encountered;
    tdEncountered.classList.add('td-encountered');

    tr.append(tdName, tdCaptured, tdEncountered);
    pokeTableBody.append(tr);


}

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = './index.html';
});