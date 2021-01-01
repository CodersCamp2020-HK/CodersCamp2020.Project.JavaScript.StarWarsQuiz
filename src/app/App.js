import { Data } from './components/fetchApi';
import { PrepareData } from './components/processData';

export const App = () => {
    // Pobieranie rekordów z API
    // const people = Data.getPeopleJsonData();
    // people.then((response) => console.log(response));

    // const vehicles = Data.getVehiclesJsonData();
    // vehicles.then((response) => console.log(response));

    // const starships = Data.getStarshipsJsonData();
    // starships.then((response) => console.log(response));

    // Dane przygotowane do pytań
    PrepareData.preprocessPeople().then((data) => console.log(data));

    PrepareData.preprocessVehicles().then((data) => console.log(data));

    PrepareData.preprocessStarships().then((data) => console.log(data));
};
