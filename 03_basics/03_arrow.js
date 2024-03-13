const user = {
    username: "Umang",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this)

// function chai() {
    //     let username = "Umang"
    //     console.log(this.username);
    // console.log(this);
// }

// chai()

const chai = () => {
    let username = "Umang"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => {username: "Umang"}
const addTwo = (num1, num2) => ({username: "Umang"})


// console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]