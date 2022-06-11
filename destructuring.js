const turtle = {
    name: 'Bob turtle',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}


// Bad code

function feed(animal) {
    return `Feed ${animal.name} ${animal.meal}} kilos of ${animal.diet}`;
}


// Good Code

function feed2({ name, meal, diet }) {
    return `Feed ${name} ${meal}} kilos of ${diet}`;
}

    // Or

    function feed3(animal) {
        const { name, meal, diet } = animal;
        return `Feed ${name} ${meal}} kilos of ${diet}`;
    }