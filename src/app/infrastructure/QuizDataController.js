import { Data } from './fetchApi';
// import { PrepareData } from './processData';
// import { RandData } from './RandData';

export class QuizDataController {
    constructor({ category, data }) {
        this.category = category;
        this.data = data;
    }

    static async createController(category) {
        const jsonData = new Data();
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

        return new QuizDataController({ category, data });
    }
}
