let data = [
    { id: 'animals', 'parent': null},
    { id: 'mammals', 'parent': 'animals'},
    { id: 'cats', 'parent': 'mammals'},
    { id: 'dogs', 'parent': 'mammals'},
    { id: 'labrador', 'parent': 'dogs'},
    { id: 'chihuahua', 'parent': 'dogs'},
    { id: 'persian', 'parent': 'cats'},
    { id: 'siamese', 'parent': 'cats'}
]

function makeTree(data, parent){
    let node = {};
    data
        .filter(c => c.parent === parent )
        .forEach(c => {
            node[c.id] = makeTree(data, c.id)
        })

    return node
}

let value = makeTree(data, null);
console.log(JSON.stringify(value, null, 2))
