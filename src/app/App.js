import { ButtonNext } from '.components/ButtonNext';

export const App = () => {
    const nextButton = new ButtonNext('NEXT', toTheNextQuestion);
    document.querySelector('body').appendChild(nextButton.element);
};
