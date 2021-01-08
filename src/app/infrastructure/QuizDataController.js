import { Data } from './fetchApi';
import { PrepareData } from './processData';
import { RandData } from './RandData';

export class QuizDataController {
    constructor({ category, answers }) {
        this.__category = category;
        this.__answers = answers;
    }

    static async createController(category) {
        const jsonData = new Data();
        const processedData = new PrepareData();
        const randData = new RandData();
        let data;

        switch (category) {
            case 'people':
                data = await jsonData.getPeopleJsonData();
                break;
            case 'vehicles':
                data = await jsonData.getStarshipsJsonData();
                break;
            case 'starships':
                data = await jsonData.getStarshipsJsonData();
                break;
            default:
                throw new Error('Category should be people, vehicles or starships');
        }

        data = processedData.preprocessData(data);

        const answers = await randData.randData(data, 10);

        return new QuizDataController({ category, answers });
    }

    get category() {
        return this.__category;
    }

    get answers() {
        return this.__answers;
    }
}
