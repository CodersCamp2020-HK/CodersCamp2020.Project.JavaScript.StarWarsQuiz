import { Button } from './Button';
const fs = require('fs');

const generateCloseRulesButton = ({ modalDiv }) => {
    const button = new Button('Close');
    button.element.className = 'modal__button--close';
    button.element.onclick = () => {
        modalDiv.close();
    };

    return button.element;
};

export const generateRulesModal = () => {
    const rulesText = fs.readFileSync('./src/app/components/Rules.txt', { encoding: 'utf-8' });

    const dialog = document.createElement('dialog');
    dialog.className = 'modal';

    const header = document.createElement('h5');
    header.className = 'modal__header';
    header.textContent = 'MODE RULES';

    const closeButton = generateCloseRulesButton({ modalDiv: dialog });

    const p = document.createElement('p');
    p.className = 'modal__text';
    p.textContent = rulesText;

    const div = document.createElement('div');
    div.className = 'modal__wrapper';

    dialog.appendChild(div);
    div.appendChild(header);
    div.appendChild(p);
    div.appendChild(closeButton);

    return dialog;
};
