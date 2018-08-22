console.log("BLOOP")

const dataManager = Object.create(null, {

    getData: {
        value: () => {
            return fetch("http://localhost:8088/").then(r => r.json())
        }
    },

    getSingleData: {
        value: (id) => {
            return fetch(`http://localhost:8088/${id}`).then(r => r.json())
        }
    },

    deleteData: {
        value: (id) => {
            return fetch(`http://localhost:8088/place/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        }},
        saveData: {
            value: (taco) => {
                return fetch(`http://localhost:8088/users`, {
                    method: "POST",
                    headers: {

                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(taco)
                }).then(r => r.json)
            }
        },
        replaceData: {
            value: (entryId, entry) => {
                return fetch(`http://localhost:8088/${entryId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(entry)
                })
                .then(result => result.json())
            }
        }


 })

 module.exports = dataManager