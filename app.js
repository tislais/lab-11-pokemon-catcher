import { generateThreePokemon } from './data-utils.js';
import { findByName } from './utils.js';
import { capturePokemon } from './local-storage-utils.js';

const pokeButton = document.getElementById('poke-button');

let totalCaptures = 0;

function createDom() {
    const poke1Radio = document.getElementById('poke1-radio');
    const poke2Radio = document.getElementById('poke2-radio');
    const poke3Radio = document.getElementById('poke3-radio');

    const poke1Label = document.getElementById('poke1-label');
    const poke2Label = document.getElementById('poke2-label');
    const poke3Label = document.getElementById('poke3-label');

    const poke1Image = document.querySelector('#poke1-image');
    const poke2Image = document.querySelector('#poke2-image');
    const poke3Image = document.querySelector('#poke3-image');
    
    const poke1StatsName = document.getElementById('poke1-stats-name');
    const poke2StatsName = document.getElementById('poke2-stats-name');
    const poke3StatsName = document.getElementById('poke3-stats-name');

    const threePokemonLineup = generateThreePokemon();

    poke1Radio.value = threePokemonLineup[0].pokemon;
    poke2Radio.value = threePokemonLineup[1].pokemon;
    poke3Radio.value = threePokemonLineup[2].pokemon;

    poke1Label.append(poke1Image);
    poke2Label.append(poke2Image);
    poke3Label.append(poke3Image);

    poke1Image.src = threePokemonLineup[0].url_image;
    poke2Image.src = threePokemonLineup[1].url_image;
    poke3Image.src = threePokemonLineup[2].url_image;

    poke1StatsName.textContent = threePokemonLineup[0].pokemon;
    poke2StatsName.textContent = threePokemonLineup[1].pokemon;
    poke3StatsName.textContent = threePokemonLineup[2].pokemon;

    poke1Label.append(poke1Image);
    poke2Label.append(poke2Image);
    poke3Label.append(poke3Image);
    
    const encountersCount = document.getElementById('encounters-count');
    encountersCount.textContent = 'Total Captures: ' + totalCaptures;
}

createDom();

pokeButton.addEventListener('click', () => {
    const selectedPokemon = document.querySelector('input:checked');
    const pokeObject = findByName(selectedPokemon.value);

    if (totalCaptures < 9) {
        totalCaptures++;
        createDom();
        capturePokemon(pokeObject);
    } else {
        capturePokemon(pokeObject);
        window.location.href = './results.html';
    }
});

