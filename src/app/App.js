import { Data } from './infrastructure/fetchApi';

export const App = () => {
    const dataProvider = new Data();
    [
        dataProvider.getPeopleJsonData,
        dataProvider.getStarshipsJsonData,
        dataProvider.getVehiclesJsonData,
    ].forEach((fn) => fn().then((data) => console.log(data)));
};
