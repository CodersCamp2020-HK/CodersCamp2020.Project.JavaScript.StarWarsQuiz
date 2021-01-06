import { generateTimer } from './components/Timer';

export const App = () => {
    const timer = generateTimer({ timeleft: 100 });
    document.body.appendChild(timer);
};
