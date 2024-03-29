// !        for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(`${val}`)
}

const greeting = "Hello World!"

for (const ch of greeting) {
    // console.log(ch);
}

const map = new Map()

map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ' :- ', value);
}

const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }