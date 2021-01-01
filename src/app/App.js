import { PrepareData } from './components/processData';

export const App = () => {
    // Dane przygotowane do pytań
    PrepareData.preprocessPeople().then((data) => console.log(data));

    PrepareData.preprocessVehicles().then((data) => console.log(data));

    PrepareData.preprocessStarships().then((data) => console.log(data));
};
