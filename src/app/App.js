import { pointsCounter } from './components/PointsCounter';

export const App = () => {
    const pointsCounterDiv = pointsCounter(10);
    const container = document.querySelector('#swquiz-app');
    container.appendChild(pointsCounterDiv);
};
