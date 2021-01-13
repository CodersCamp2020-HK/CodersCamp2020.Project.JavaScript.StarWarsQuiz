import { Button } from './Button';

export const generateRulesButton = ({ text, modalDiv }) => {
    const button = new Button(text);
    button.className = 'mainpage-button-rules';
    button.element.onclick = () => {
        modalDiv.showModal();
    };

    return button.element;
};

const generateCloseRulesButton = ({ modalDiv }) => {
    const button = new Button('x');
    button.element.classList = 'rules-modal-close';
    button.element.onclick = () => {
        modalDiv.close();
    };

    return button.element;
};

export const generateRulesModal = () => {
    const rulesText = `You have one minute (1m) to answer 10 questions. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options, or select that the character is none of above.`;

    const dialog = document.createElement('dialog');
    dialog.className = 'rules-modal';

    const header = document.createElement('h5');
    header.className = 'rules-modal-header';
    header.textContent = 'MODE RULES';

    const closeButton = generateCloseRulesButton({ modalDiv: dialog });

    const p = document.createElement('p');
    p.className = 'rules-modal-text';
    p.textContent = rulesText;

    dialog.appendChild(header);
    dialog.appendChild(closeButton);
    dialog.appendChild(p);

    return dialog;
};
