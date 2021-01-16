// import { QuizGame } from './domain/quiz-game';
import { Mainpage } from './domain/Mainpage';

export const App = () => {
    // const obj = new QuizGame();
    // obj.main({ numberOfQuestions: 5, category: 'people', timeInSeconds: 20 }).then((div) => {
    //     document.querySelector('#swquiz-app').appendChild(div);
    // });
    const objMainpage = new Mainpage();
    document.querySelector('#swquiz-app').appendChild(objMainpage.main());
};
