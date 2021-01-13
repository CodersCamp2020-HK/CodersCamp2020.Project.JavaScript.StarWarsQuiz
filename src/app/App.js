// import { QuizGame } from './domain/quiz-game';
import { generateRulesButton, generateRulesModal } from './components/Rules';

export const App = () => {
    // const obj = new QuizGame();
    // obj.main({ numberOfQuestions: 5, category: 'people', timeInSeconds: 20 }).then((div) => {
    //     document.querySelector('#swquiz-app').appendChild(div);
    // });
    const modal = generateRulesModal();
    const rulesButton = generateRulesButton({ text: 'Rules', modalDiv: modal });
    document.querySelector('#swquiz-app').appendChild(modal);
    document.querySelector('#swquiz-app').appendChild(rulesButton);
};
