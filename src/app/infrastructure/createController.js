import { Data } from './fetchApi';
import { PrepareData } from './processData';
import { RandData } from './RandData';
import { QuizDataController } from '../domain/QuizDataController';

export const createController = async ({ category, numberOfQuestions }) => {
    const processedData = new PrepareData();
    const randData = new RandData();
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

    data = processedData.preprocessData(data);

    const answers = await randData.randData(data, numberOfQuestions);

    return new QuizDataController({ category, answers, numberOfQuestions });
};
