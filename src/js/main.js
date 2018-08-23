let db = require("./datamanager.js");
let logIn = require("./Domthings");
let loginDamnit = require("./loginFunctions");

// let userName = JSON.parse(sessionStorage.users).username;
// console.log(userName);
function funHouse () {
    let userName = JSON.parse(sessionStorage.users).username
     document.querySelector(".container").innerHTML = `You have logged in ${userName}`
}
function unFunHouse (){document.querySelector(".container").innerHTML = logIn()
 loginDamnit();}
 
sessionStorage.users ? funHouse() : unFunHouse();








