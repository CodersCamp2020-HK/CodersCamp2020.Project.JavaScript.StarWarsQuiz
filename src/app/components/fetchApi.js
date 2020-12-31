class Data {
    static async getPeopleJsonData() {
        const peopleEndpoints = [];
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
        ]);
    }

    static async getVehiclesJsonData() {
        const vehicleEndpoints = [];
        for (let i = 1; i < 5; i++) {
            vehicleEndpoints.push(`https://swapi.dev/api/vehicles/?page=${i}`);
        }
        return await Promise.all([
            (await fetch(vehicleEndpoints[0])).json(),
            (await fetch(vehicleEndpoints[1])).json(),
            (await fetch(vehicleEndpoints[2])).json(),
            (await fetch(vehicleEndpoints[3])).json(),
        ]);
    }

    static async getStarshipsJsonData() {
        const starshipsEndpoints = [];
        for (let i = 1; i < 5; i++) {
            starshipsEndpoints.push(`https://swapi.dev/api/starships/?page=${i}`);
        }
        return await Promise.all([
            (await fetch(starshipsEndpoints[0])).json(),
            (await fetch(starshipsEndpoints[1])).json(),
            (await fetch(starshipsEndpoints[2])).json(),
            (await fetch(starshipsEndpoints[3])).json(),
        ]);
    }
}

export { Data };
