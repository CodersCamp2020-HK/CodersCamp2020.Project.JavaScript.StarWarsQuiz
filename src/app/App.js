import {PointsCounter} from './components/PointsCounter'

export const App = () => {
    const container = document.querySelector('#swquiz-app')
    const pointsCounter = new PointsCounter()
    container.appendChild(pointsCounter.createPointsCounter())
};
