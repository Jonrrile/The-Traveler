const makeTravelerHTML = (TravelObj) => {
    const domElement = `
    <div class="traveler__card">
    <h2>${TravelObj.name}</h2>
    <p>${TravelObj.description}</p>
    <p>${TravelObj.cost}</p>
    `
    return domElement
}

export default makeTravelerHTML