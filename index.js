// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat (name) {
    const copyCat = [...cats, name]
    return copyCat;
}

function prependCat (name) {
    const copyCat = [name, ...cats]
    return copyCat;
}

function removeLastCat() {
    const copyCat = cats.slice(0, cats.length -1)
    return copyCat;
}

function removeFirstCat() {
    const copyCat = cats.slice(1)
    return copyCat;
}