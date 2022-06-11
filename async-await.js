const random = () => {
    return Promise.resolve(Math.random());
}

// Bad code

const sumRandomAsyncNumbs = () => {
    let first,
        second,
        third;

    return random()
        .then(v => {
            first = v;
            return random()
        })
        .then(v => {
            second = v;
            return random()
        })
        .then(v => {
            third = v;
            return first + second + third;
        })
        .then(v => {
            console.log(`Result is ${v}`);
        })
}

sumRandomAsyncNumbs()

// Good code

const sumRandomAsyncNumbs2 = async () => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result is ${first + second + third}`);
}

sumRandomAsyncNumbs2()
