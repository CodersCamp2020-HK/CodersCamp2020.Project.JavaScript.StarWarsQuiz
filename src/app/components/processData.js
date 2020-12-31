import { Data } from './fetchApi';

class PrepareData {
    static async preprocessPeople() {
        const regexForEndpoint = /\d+\/$/;
        const peopleJsonData = await Data.getPeopleJsonData();
        for (const charactersArray of peopleJsonData) {
            for (const character of charactersArray.results) {
                const name = character.name;
                const indexEndpoint = character.url.match(regexForEndpoint)[0].toString();
                const index = indexEndpoint.slice(0, -1);
                console.log(name, index);
            }
        }
    }
}

export { PrepareData };
