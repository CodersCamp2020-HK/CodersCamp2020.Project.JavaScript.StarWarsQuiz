import { Data } from './fetchApi';
import { Question } from './question';

class PrepareData {
    static async preprocessPeople() {
        const regexForEndpoint = /\d+\/$/;
        const peopleJsonData = await Data.getPeopleJsonData();
        const peopleDataQuestions = [];

        for (const charactersArray of peopleJsonData) {
            for (const character of charactersArray.results) {
                const name = character.name;
                const indexEndpoint = character.url.match(regexForEndpoint)[0].toString();
                const index = indexEndpoint.slice(0, -1);
                peopleDataQuestions.push(new Question(name, index));
            }
        }
        return peopleDataQuestions;
    }

    static async preprocessVehicles() {
        const regexForEndpoint = /\d+\/$/;
        const vehiclesJsonData = await Data.getVehiclesJsonData();
        const vehiclesDataQuestions = [];

        for (const vehiclesArray of vehiclesJsonData) {
            for (const vehicle of vehiclesArray.results) {
                const name = vehicle.name;
                const indexEndpoint = vehicle.url.match(regexForEndpoint)[0].toString();
                const index = indexEndpoint.slice(0, -1);
                vehiclesDataQuestions.push(new Question(name, index));
            }
        }
        return vehiclesDataQuestions;
    }

    static async preprocessStarships() {
        const regexForEndpoint = /\d+\/$/;
        const starshipsJsonData = await Data.getStarshipsJsonData();
        const starshipsDataQuestions = [];

        for (const starshipsArray of starshipsJsonData) {
            for (const starship of starshipsArray.results) {
                const name = starship.name;
                const indexEndpoint = starship.url.match(regexForEndpoint)[0].toString();
                const index = indexEndpoint.slice(0, -1);
                starshipsDataQuestions.push(new Question(name, index));
            }
        }
        return starshipsDataQuestions;
    }
}

export { PrepareData };
