const array1 = [1, 2, 3, 4]

// const initialValue = 0
// const sumWithInitial = array1.reduce(
//     (acc, curr) => acc + curr, initialValue
// )

// console.log(sumWithInitial);

// const myTotal = array1.reduce(function (acc, curval) {
//     console.log(acc , curval);
//     return acc + curval
// }, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "PY Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0 )

console.log(totalPrice);