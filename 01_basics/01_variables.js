const accountId = 12342
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;


console.log(accountId);

/*
    Prefer not to use var
    because of functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);