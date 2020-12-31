import { Data } from './fetchApi';

class PrepareData {
    static async preprocessPeople() {
        const peopleJsonData = await Data.getPeopleJsonData();
        for (const charactersArray of peopleJsonData) {
            for (const character of charactersArray.results) {
                console.log(character);
            }
        }
    }
}

export { PrepareData };
