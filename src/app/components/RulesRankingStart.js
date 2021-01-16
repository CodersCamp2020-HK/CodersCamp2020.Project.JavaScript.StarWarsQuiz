import { Button } from './Button';

export const generateRulesButton = ({ modalDiv }) => {
    const button = new Button('Rules');
    button.element.className = 'mainpage__button mainpage__button--rules';
    button.element.onclick = () => {
        modalDiv.showModal();
    };

    return button.element;
};

export const generateRankingButton = ({ onClick }) => {
    const button = new Button('Ranking', onClick);
    button.element.className = 'mainpage__button mainpage__button--ranking';

    return button.element;
};

export const generateStartButton = ({ onClick }) => {
    const button = new Button('Play', onClick);
    button.element.className = 'mainpage__button mainpage__button--start';

    return button.element;
};
