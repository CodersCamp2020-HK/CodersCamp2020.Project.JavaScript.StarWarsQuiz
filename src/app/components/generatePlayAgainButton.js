import { Button } from './Button';

const generatePlayAgainButton = ({ text, onClick }) => {
    const buttonComponent = new Button(text, onClick);
    buttonComponent.element.classList.add('play-again-button');
    return buttonComponent;
};

export { generatePlayAgainButton };
