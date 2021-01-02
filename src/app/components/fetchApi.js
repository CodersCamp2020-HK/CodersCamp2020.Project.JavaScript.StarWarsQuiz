import { peopleEndpoints, vehiclesEndpoints, starshipsEndpoints } from './endpoints';

class Data {
    static async getPeopleJsonData() {
        return await Promise.all([
            fetch(peopleEndpoints[0]).then((response) => response.json()),
            fetch(peopleEndpoints[1]).then((response) => response.json()),
            fetch(peopleEndpoints[2]).then((response) => response.json()),
            fetch(peopleEndpoints[3]).then((response) => response.json()),
            fetch(peopleEndpoints[4]).then((response) => response.json()),
            fetch(peopleEndpoints[5]).then((response) => response.json()),
            fetch(peopleEndpoints[6]).then((response) => response.json()),
            fetch(peopleEndpoints[7]).then((response) => response.json()),
            fetch(peopleEndpoints[8]).then((response) => response.json()),
        ]);
    }

    static async getVehiclesJsonData() {
        return await Promise.all([
            fetch(vehiclesEndpoints[0]).then((response) => response.json()),
            fetch(vehiclesEndpoints[1]).then((response) => response.json()),
            fetch(vehiclesEndpoints[2]).then((response) => response.json()),
            fetch(vehiclesEndpoints[3]).then((response) => response.json()),
        ]);
    }

    static async getStarshipsJsonData() {
        return await Promise.all([
            fetch(starshipsEndpoints[0]).then((response) => response.json()),
            fetch(starshipsEndpoints[1]).then((response) => response.json()),
            fetch(starshipsEndpoints[2]).then((response) => response.json()),
            fetch(starshipsEndpoints[3]).then((response) => response.json()),
        ]);
    }
}

export { Data };
