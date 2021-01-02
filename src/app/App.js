import { Data } from '../app/components/fetchApi';
import { PrepareData } from './components/processData';

export const App = () => {
    // Dane przygotowane do pytań
    Data.getPeopleJsonData()
        .then((data) => PrepareData.preprocessData(data))
        .then((questions) => console.log(questions));
    Data.getVehiclesJsonData()
        .then((data) => PrepareData.preprocessData(data))
        .then((questions) => console.log(questions));
    Data.getStarshipsJsonData()
        .then((data) => PrepareData.preprocessData(data))
        .then((questions) => console.log(questions));
};
