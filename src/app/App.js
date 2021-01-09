import { QuizGame } from './domain/quiz-game';

export const App = () => {
    const obj = new QuizGame();
    obj.main().then((div) => {
        document.querySelector('#swquiz-app').appendChild(div);
    });
};
