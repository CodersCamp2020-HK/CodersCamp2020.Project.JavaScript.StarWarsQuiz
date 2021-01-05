import { ButtonNext } from '.components/ButtonNext';

export const App = () => {
    const nextButton = new ButtonNext('NEXT', nowaZagadka);
    document.querySelector("body").appendChild(nextButton.element);
};
