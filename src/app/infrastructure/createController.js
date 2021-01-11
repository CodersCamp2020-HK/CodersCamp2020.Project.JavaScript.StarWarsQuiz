// import { Data } from './fetchApi';
import { PrepareData } from './processData';
import { RandData } from './RandData';
import { QuizDataController } from '../domain/QuizDataController';
const peopleData = require('./peopleData.json');
const vehiclesData = require('./vehiclesData.json');
const starshipsData = require('./starshipsData.json');

export const createController = async ({ category, numberOfQuestions }) => {
    // const jsonData = new Data();
    const processedData = new PrepareData();
    const randData = new RandData();

    let data;

    switch (category) {
        case 'people':
            data = peopleData;
            break;
        case 'vehicles':
            data = vehiclesData;
            break;
        case 'starships':
            data = starshipsData;
            break;
        default:
            throw new Error('Category should be people, vehicles or starships');
    }

    data = processedData.preprocessData(data);

    const answers = await randData.randData(data, numberOfQuestions);

    return new QuizDataController({ category, answers, numberOfQuestions });
};
