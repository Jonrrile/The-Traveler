import makeTravelerHTML from "./travelerDom.js"
import destinations from "./data.js"
import travelerFactory from "./travelerFactory.js"

let newDestination = travelerFactory("Canada", "Never been", 1000);
console.log(newDestination)
destinations.push(newDestination);

for (const destination of destinations) {

    const destinationHTML = makeTravelerHTML(destination)

    const travelerContainer = document.querySelector(".travelerContainer");

    travelerContainer.innerHTML += destinationHTML
    
}