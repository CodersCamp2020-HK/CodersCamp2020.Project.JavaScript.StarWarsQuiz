import { peopleEndpoints, vehiclesEndpoints, starshipsEndpoints } from './endpoints';

class Data {
    static async getPeopleJsonData() {
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
        return await Promise.all([
            (await fetch(vehiclesEndpoints[0])).json(),
            (await fetch(vehiclesEndpoints[1])).json(),
            (await fetch(vehiclesEndpoints[2])).json(),
            (await fetch(vehiclesEndpoints[3])).json(),
        ]);
    }

    static async getStarshipsJsonData() {
        return await Promise.all([
            (await fetch(starshipsEndpoints[0])).json(),
            (await fetch(starshipsEndpoints[1])).json(),
            (await fetch(starshipsEndpoints[2])).json(),
            (await fetch(starshipsEndpoints[3])).json(),
        ]);
    }
}

export { Data };
