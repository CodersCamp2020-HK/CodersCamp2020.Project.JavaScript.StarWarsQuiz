class Data {
    getPeopleData() {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    getVehiclesData() {
        fetch('https://swapi.dev/api/starships/')
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
