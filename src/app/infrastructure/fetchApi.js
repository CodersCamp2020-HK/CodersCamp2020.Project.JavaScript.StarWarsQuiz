import { peopleEndpoints, vehiclesEndpoints, starshipsEndpoints } from './endpoints';

class Data {
    async getPeopleJsonData() {
        return await Promise.all(peopleEndpoints.map((url) => fetch(url).then((resp) => resp.json())));
    }

    async getVehiclesJsonData() {
        return await Promise.all(vehiclesEndpoints.map((url) => fetch(url).then((resp) => resp.json())));
    }

    async getStarshipsJsonData() {
        return await Promise.all(starshipsEndpoints.map((url) => fetch(url).then((resp) => resp.json())));
    }
}

export { Data };
