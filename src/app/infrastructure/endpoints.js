const getPeopleEndpoints = () => {
    const endpoints = [];
    for (let i = 1; i < 10; i++) {
        endpoints.push(`https://swapi.dev/api/people/?page=${i}`);
    }
    return endpoints;
};

const getVehiclesEndpoints = () => {
    const endpoints = [];
    for (let i = 1; i < 5; i++) {
        endpoints.push(`https://swapi.dev/api/vehicles/?page=${i}`);
    }
    return endpoints;
};

const getStarshipsEndpoints = () => {
    const endpoints = [];
    for (let i = 1; i < 5; i++) {
        endpoints.push(`https://swapi.dev/api/starships/?page=${i}`);
    }
    return endpoints;
};

export const peopleEndpoints = getPeopleEndpoints();
export const vehiclesEndpoints = getVehiclesEndpoints();
export const starshipsEndpoints = getStarshipsEndpoints();