import API from "./data.js"
import makeDestinationHTML from "./travelerDom.js"

const destinationContainer = document.querySelector(".travelerContainer");
//Getting the data from the json then activating my event listeners such as delete
const makeDestinationList = () => {
    destinationContainer.innerHTML = "";
    API.getAllDestinations()
        .then((destinationArray) => {
         
            destinationArray.forEach(item => {
                destinationContainer.innerHTML += makeDestinationHTML(item);

            });

        })
}


export default makeDestinationList;