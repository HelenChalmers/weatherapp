

function logIn () {

    return `<fieldset class="eventsField">
    <label for="username">Username</label>
    <input required type="text" id="username" placeholder="Event Title">
    </fieldset>
    <fieldset class="eventsField">
                <label for="Email">Email</label>
                <input required type="text" id="Email" placeholder="Email">
            </fieldset>
            <button class="loginButton">Login/Register</button>
    `

}

module.exports = logIn