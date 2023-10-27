// Array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr)
// console.log(myArr[1])
// console.log(myArr[1, 3])
// console.log(myArr[13])

// const myHeros = ['Iron Man', 'Black Panther']
// console.log(myHeros);

// const myArr2 = new Array(1, 2, 3, 'Umang')
// console.log(myArr2);

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(10)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(3));
// console.log(myArr);

// const newArr = myArr.join()
// console.log(newArr);

// Slice, Splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

let myn2 = myArr.splice(1, 4)
console.log("B ", myArr);
console.log(myn2);
myn2 = myArr.splice(0, 5)
console.log("C ", myArr);
console.log(myn2);