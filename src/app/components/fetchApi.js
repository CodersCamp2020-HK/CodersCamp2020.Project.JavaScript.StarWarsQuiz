class Data {
    static async getPeopleData() {
        const peopleEndpoints = ['https://swapi.dev/api/people/'];
        for (let i = 1; i < 10; i++) {
            peopleEndpoints.push(`https://swapi.dev/api/people/?page=${i}`);
        }
        return await Promise.all([
            (await fetch(peopleEndpoints[0])).json(),
            (await fetch(peopleEndpoints[1])).json(),
            (await fetch(peopleEndpoints[2])).json(),
            (await fetch(peopleEndpoints[3])).json(),
            (await fetch(peopleEndpoints[4])).json(),
            (await fetch(peopleEndpoints[5])).json(),
            (await fetch(peopleEndpoints[6])).json(),
            (await fetch(peopleEndpoints[7])).json(),
            (await fetch(peopleEndpoints[8])).json(),
            (await fetch(peopleEndpoints[9])).json(),
        ]);
    }

    static async getVehiclesData() {
        const vehicleEndpoints = ['https://swapi.dev/api/vehicles/'];
        for (let i = 1; i < 5; i++) {
            vehicleEndpoints.push(`https://swapi.dev/api/vehicles/?page=${i}`);
        }
        return await Promise.all([
            (await fetch(vehicleEndpoints[0])).json(),
            (await fetch(vehicleEndpoints[1])).json(),
            (await fetch(vehicleEndpoints[2])).json(),
            (await fetch(vehicleEndpoints[3])).json(),
            (await fetch(vehicleEndpoints[4])).json(),
        ]);
    }

    getStarshipsData() {
        fetch('https://swapi.dev/api/starships/')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
}

export { Data };
