const accountId = 144543
let accountEmail = "faizan@google.com"
var accountPaasword = "12345"
accountCity = "ManikBagh"
let accountState;

// accountId = 2;
// account Id change not allowed because of const

accountEmail = "Faizan@amazon.com"
accountPaasword = "12212"
accountCity = "Indore"

console.log(accountId);

/*
Prefer Not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPaasword,accountCity,accountState]);
