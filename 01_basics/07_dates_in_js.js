// Date

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())

// let myCreatedDate = new Date(2023, 9, 27)
// let myCreatedDate = new Date(2023, 9, 27, 5, 3)
let myCreatedDate = new Date("09-23-2023")
// console.log(myCreatedDate.toLocaleString())  

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
newDate = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate);