// import { QuizGame } from './domain/quiz-game';
import { opponentLevel } from './components/opponentLevel';

export const App = () => {
    // const obj = new QuizGame();
    // obj.main({ numberOfQuestions: 5, category: 'people', timeInSeconds: 20 }).then((div) => {
    //     document.querySelector('#swquiz-app').appendChild(div);
    // });
    const xxx = opponentLevel();
    document.querySelector('#swquiz-app').appendChild(xxx.element);
    console.log(xxx.level);
};
