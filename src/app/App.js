import { Data } from './infrastructure/fetchApi';
import { PrepareData } from './infrastructure/processData';

export const App = () => {
    // Dane przygotowane do pytań
    const data = new Data();
    const process = new PrepareData();
    data.getPeopleJsonData().then((questions) => console.log(process.preprocessData(questions)));
    data.getVehiclesJsonData().then((questions) => console.log(process.preprocessData(questions)));
    data.getStarshipsJsonData().then((questions) => console.log(process.preprocessData(questions)));
};
