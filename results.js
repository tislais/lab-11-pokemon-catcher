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

const pokeNames = [];
const pokeCaptured = [];
const pokeEncountered = [];

for (let item of pokedex) {
    pokeNames.push(item.id);
    pokeCaptured.push(item.captured);
    pokeEncountered.push(item.encountered);
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeNames,
        datasets: [{
            label: 'Captured',
            data: pokeCaptured,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Encountered',
            data: pokeEncountered,
            backgroundColor: [
                'rgba(171, 255, 87, 0.2)'
            ],
            borderColor: [
                'rgba(92, 167, 17, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});