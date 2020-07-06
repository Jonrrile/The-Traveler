const travelerFactory = (name, cost, description) => {
    const travelerObj = {
        "name": name,
        "cost": cost,
        "description": description
    };
    return travelerObj
};

export default travelerFactory;