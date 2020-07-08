const API = {

    getAllDestinations() {
        return fetch("http://localhost:3000/destinations")
            .then(response => response.json())
    },

    //save and send new articles to json
    saveDestinationEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/destinations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());

    }}


export default API;