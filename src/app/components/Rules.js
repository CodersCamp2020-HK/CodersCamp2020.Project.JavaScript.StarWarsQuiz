import { Button } from './Button';

const generateCloseRulesButton = ({ modalDiv }) => {
    const button = new Button('Close');
    button.element.className = 'rules-modal-close';
    button.element.onclick = () => {
        modalDiv.close();
    };

    return button.element;
};

export const generateRulesModal = () => {
    const rulesText = `You have one minute (1m) to answer 10 questions. During the game on each question you need to select who or what from Star Wars is showed on the left from available options.`;

    const dialog = document.createElement('dialog');
    dialog.className = 'rules-modal';

    const header = document.createElement('h5');
    header.className = 'rules-modal-header';
    header.textContent = 'MODE RULES';

    const closeButton = generateCloseRulesButton({ modalDiv: dialog });

    const p = document.createElement('p');
    p.className = 'rules-modal-text';
    p.textContent = rulesText;

    const div = document.createElement('div');
    div.className = 'rules-modal-wrapper';

    dialog.appendChild(div);
    div.appendChild(header);
    div.appendChild(p);
    div.appendChild(closeButton);

    return dialog;
};
