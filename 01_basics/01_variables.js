const accountId = 12324
let accountEmail = "umang@google.in"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 123 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "23123"
accountCity = "Mumbai"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])