import { Button } from './Button.js';
const generateReturnButton = ({ text, onClick }) => {
    let buttonComponent = new Button(text, onClick);
    buttonComponent.element.classList.add('button-return');

    return buttonComponent;
};

export { generateReturnButton };
