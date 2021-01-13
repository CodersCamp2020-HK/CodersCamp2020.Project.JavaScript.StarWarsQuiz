import { Button } from './Button.js';
const generateReturnButton = ({ text, onClick }) => {
    let buttonComponent = new Button(text, onClick);
    buttonComponent.element.classlist.add('button-return');

    return buttonComponent;
};

export { generateReturnButton };
