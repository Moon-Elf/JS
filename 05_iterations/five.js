const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {console.log(val);})

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe)

const myObject = [
    {
        languageName: "JavaScript",
        laguageFileName: "js"
    },
    {
        languageName: "Python",
        laguageFileName: "py"
    },
    {
        languageName: "Ruby",
        laguageFileName: "rb"
    },
]

myObject.forEach( (item) => {
    console.log(item.languageName);
})