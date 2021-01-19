let book1 = {
    name : 'c book',
    price: 234
}
let book2 = {
    name : 'c++ book',
    price: 342
}

let lib = new Map()
lib.set('b1', book1)
lib.set('b2', book2)
console.log(lib.get('b2'))
    console.log(lib.size)