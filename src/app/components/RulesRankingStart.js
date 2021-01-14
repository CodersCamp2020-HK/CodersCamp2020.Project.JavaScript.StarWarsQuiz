import { Button } from './Button';

const generateRulesButton = ({ modalDiv }) => {
    const button = new Button('Rules');
    button.element.className = 'mainpage-button mainpage-button-rules';
    button.element.onclick = () => {
        modalDiv.showModal();
    };

    return button.element;
};

const generateRankingButton = ({ onClick }) => {
    const button = new Button('Ranking', onClick);
    button.element.className = 'mainpage-button mainpage-button-ranking';

    return button.element;
};

const generateStartButton = ({ onClick }) => {
    const button = new Button('Play', onClick);
    button.element.className = 'mainpage-button mainpage-button-start';

    return button.element;
};

export const generateRulesRankingStartButtons = ({ modalDiv, rankingOnClick, startOnClick }) => {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'mainpage-wrapper-rules-ranking-start';

    const rulesButton = generateRulesButton({ modalDiv: modalDiv });
    const rankingButton = generateRankingButton({ onClick: rankingOnClick });
    const startButton = generateStartButton({ onClick: startOnClick });

    buttonsDiv.append(rulesButton, rankingButton, startButton);

    return buttonsDiv;
};
