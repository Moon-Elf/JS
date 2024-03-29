// title        if

// const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log(`Welcome User.`)
// } else {
//     console.log(`Please Sign in first`);
// }

// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("Less Than 500");
// } else if (balance < 750) {
//     console.log("Less Than 750");
// } else if (balance < 900) {
//     console.log("Less Than 900");
// } else {
//     console.log("Less Than 1200");
// }

const userLoggedIn         = true
const debitCard            = true
const loggedInFromGoogle   = false
const loggedInFromEmail    = true


if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}