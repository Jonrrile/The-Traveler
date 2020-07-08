import makeTravelerHTML from "./travelerDom.js"
import travelerFactory from "./travelerFactory.js"
import API from "./data.js"
import makeDestinationList from "./TravelerList.js"

API.getAllDestinations().then((response) => makeDestinationList(response));