let pokemon = ['Arbok', 'Raichgu', 'Sandshrew'];


// Bad code

pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Wedle');


// Good code

pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Wedle'];