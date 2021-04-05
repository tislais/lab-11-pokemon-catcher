# Pokemon Catcher App Plan

### HTML Setup
    - Radio buttons for each of the three pokemon
        - Label and Image elements too
    - Button to capture pokemon

### State
    - Encounters
        - for each pokemon
        - if no pokedex then const pokedex = []
    - Capture
        - let captures = 0

### Events
    - On Load:
        - Generate three random pokemon
        - Add them as "encountered" in pokedex 
    - On Click:
        - Send captured pokemon to pokedex 
            - Which pokemon is captured?
            - get pokedex from localstorage
            - Is the captured pokemon in the pokedex yet?
                - if no, { pokemon, captured: 1, encountered: 1}
        - show three new pokemon
            - add them as encountered in the pokedex

### Functions
    - generateThreePokemon
        - raw array of pokemon data
        - Math.floor(Math.random() * 3) for 3 random array indexes
            - check if they are unique
            - while theyre not unique get 3 new indexes
        - once we have our three uniques, get the three pokemon associated with those indexes
        - increment those pokemon's encounter properties
            - ask if it's in the pokedex already
            - if not, make it. { pokemon: 'name', captured: 0, encountered: 1}
            - if so, increment encounter
        - populate the DOM with this data

### Data model for pokedex array
```
[
    {
        pokemon: 'magikarp',
        encountered: 1,
        captured: 1,
    },
        {
        pokemon: 'charizard',
        encountered: 3,
        captured: 1,
    }
        {
        pokemon: 'squirtle',
        encountered: 2,
        captured: 0,
    },
    {
        pokemon: 'weedle',
        encountered: 1,
        captured: 1,
    }
]
```