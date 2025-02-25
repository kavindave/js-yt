const accountId = 144553
let accountEmail = "kavin@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed because it is const

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "kavin2@google.com"
accountPassword = "20"
accountCity = "ahmedabad"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])
