const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push("Ralph");
  }

  function destructivelyPrependCat() {
    cats.unshift("Bob")
  }

function destructivelyRemoveLastCat() {
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
}

function appendCat(name) {
    let newCats = [...cats]
    newCats.push(name)
    return newCats
}

function prependCat(name) {
    let newCats = [...cats]
    newCats.unshift(name)
    return newCats
}

function removeLastCat() {
    const newCats = cats.slice(0, -1)
    newCats.shift
    return newCats
}

function removeFirstCat() {
    const newCats = cats.slice(1)
    newCats.shift
    return newCats
}

