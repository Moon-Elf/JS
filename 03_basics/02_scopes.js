
// let c = 300
let a = 300
if (true) {
    let a = 10
    // console.log(a);
} 
// console.log(a);


function one() {
    const username = "Umang"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}

// one()

if (true) {
    const username = "Umang"
    if (username === "Umang") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// * ++++++++++++++++++++ interseting +++++++++++++++++

// console.log(addone(5));
// addone(5)
function addone(num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))

