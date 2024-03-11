function sayMyName() {
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("G");   
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)


function addTwoNumbers(num1, num2) {
    return num1 + num2
}

// const result = addTwoNumbers(1, 23)
// console.log(`Result: ${result}`);

function logInUserMessage (username) {
    // if (username === undefined) {
    //     return "Please enter a username."
    // }
    if (!username) {
        return "Please enter a username."
    }
    return `${username} just logged in.`
}

// console.log(logInUserMessage())
// console.log(logInUserMessage(""))
// console.log(logInUserMessage("Umang"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Umang",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

const myNewArray = [200, 400, 100, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))