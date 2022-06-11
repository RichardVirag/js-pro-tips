const horse = {
    name: 'Topher horse',
    size: 'large',
    skills: ['justing', 'racing'],
    age: 7
}


// Bad code

let bio = horse.name + 'is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');


// Good code

const { name, size, skills } = horse;
bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`;

    //Advanced

    function horseAge(str, age) {
        const ageStr = age > 5 ? 'old' : 'young';
        return `${str[0]}${ageStr} at ${age} years`;
    }

    const bio2 = horseAge`This horse is ${horse.age}`;