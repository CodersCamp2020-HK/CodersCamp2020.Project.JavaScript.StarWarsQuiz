import { Data } from './fetchApi';
import { PrepareData } from './processData';
import { RandData } from './RandData';
import { QuizDataController } from '../domain/QuizDataController';

let isPeopleCached = false;
let isVehiclesCached = false;
let isStarshipsCached = false;
let peopleData;
let vehiclesData;
let starshipsData;

export const createController = async ({ category, numberOfQuestions }) => {
    const processedData = new PrepareData();
    const randData = new RandData();
    const jsonData = new Data();

    let data;
    switch (category) {
        case 'people':
            if (isPeopleCached) {
                data = peopleData;
            } else {
                data = await jsonData.getPeopleJsonData();
                peopleData = data;
                isPeopleCached = true;
            }
            break;
        case 'vehicles':
            if (isVehiclesCached) {
                data = vehiclesData;
            } else {
                data = await jsonData.getVehiclesJsonData();
                vehiclesData = data;
                isVehiclesCached = true;
            }
            break;
        case 'starships':
            if (isStarshipsCached) {
                data = starshipsData;
            } else {
                data = await jsonData.getStarshipsJsonData();
                starshipsData = data;
                isStarshipsCached = true;
            }
            break;
        default:
            throw new Error('Category should be people, vehicles or starships');
    }

    data = processedData.preprocessData(data);

    const answers = await randData.randData(data, numberOfQuestions);

    return new QuizDataController({ category, answers, numberOfQuestions });
};
