console.log("loginFunctions is here");

let db = require("./datamanager.js");

function loginDamnit () {

document.querySelector(".loginButton").addEventListener("click", ()=>{

    const newUser = {
        username: document.querySelector("#username").value,
        email: document.querySelector("#Email").value,
        zipcodeId: 1
    }
    db.saveData(newUser);
    sessionStorage.setItem("users", JSON.stringify(newUser));
    
     });
  
}

module.exports = loginDamnit