// title        Singleton
// notes        Object.create

// title        Object Literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Umang",
    age: 21,
    [mySym]: "myKey1",
    location: "Mumbai",
    email: "umang@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);

jsUser["email"] = "umang@chatgpt.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser["email"] = "umang@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting2());