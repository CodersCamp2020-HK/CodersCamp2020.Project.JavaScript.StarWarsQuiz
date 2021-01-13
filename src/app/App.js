import { QuizGame } from './domain/quiz-game';

export const App = () => {
    const obj = new QuizGame();
    obj.main({ numberOfQuestions: 5, category: 'people', timeInSeconds: 20 }).then((div) => {
        document.querySelector('#swquiz-app').appendChild(div);
    });
};
