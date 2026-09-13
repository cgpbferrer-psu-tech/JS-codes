function first() {
    console.log('first');
    second();
}

function second() {
    console.log('second');
    setTimeout(() => {
        console.log('second - delayed (async)');
    }, 1000);
    third();
}

function third() {
    console.log('third');
}

first();
