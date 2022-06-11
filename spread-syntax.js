const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defense: 45 }


// Bad code

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

    // Or
    let lv10 = Object.assign(pikachu, stats);
    let lv11 = Object.assign(pikachu, { hp: 45 });


// Good code

lv10 = { ...pikachu, ...stats };
lv11 = { ...pikachu, hp: 45 };