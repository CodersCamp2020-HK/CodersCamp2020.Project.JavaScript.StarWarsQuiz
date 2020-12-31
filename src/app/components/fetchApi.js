class Data {
    static async getPeopleData() {
        const peopleEndpoints = ['https://swapi.dev/api/people/'];
        for (let i = 1; i < 10; i++) {
            peopleEndpoints.push(`https://swapi.dev/api/people/?page=${i}`);
        }
        return await Promise.all([
            fetch(peopleEndpoints[0]),
            fetch(peopleEndpoints[1]),
            fetch(peopleEndpoints[2]),
            fetch(peopleEndpoints[3]),
            fetch(peopleEndpoints[4]),
            fetch(peopleEndpoints[5]),
            fetch(peopleEndpoints[6]),
            fetch(peopleEndpoints[7]),
            fetch(peopleEndpoints[8]),
            fetch(peopleEndpoints[9]),
        ]);
    }

    getVehiclesData() {
        fetch('https://swapi.dev/api/vehicles/')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    getStarshipsData() {
        fetch('https://swapi.dev/api/starships/')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
}

export { Data };
