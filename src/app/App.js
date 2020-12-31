import { Data } from './components/fetchApi';
import { PrepareData } from './components/processData';

export const App = () => {
    const people = Data.getPeopleJsonData();
    people.then((response) => console.log(response));

    const vehicles = Data.getVehiclesJsonData();
    vehicles.then((response) => console.log(response));

    const starships = Data.getStarshipsJsonData();
    starships.then((response) => console.log(response));

    PrepareData.preprocessPeople().then((data) => console.log(data));
};
