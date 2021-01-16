import { QuizGame } from './domain/quiz-game';
import { Mainpage } from './domain/Mainpage';

export const App = () => {
    const swquizz = document.querySelector('#swquiz-app');
    const objMainpage = new Mainpage();
    document.querySelector('#swquiz-app').appendChild(
        objMainpage.main({
            onClickStart: () => {
                const category = objMainpage.categoriesBtns.level;
                const level = objMainpage.levelsBtns.level;
                const input = objMainpage.userInput.lastChild;
                if (input.value.trim().length <= 0) {
                    input.classList.add('inputName_input-empty');
                    input.value = '';
                    return;
                }
                if (!['people', 'vehicles', 'starships'].includes(category)) {
                    throw new Error('Category must be people, vehicles or starships');
                }
                if (!['padawan', 'jedi knight', 'jedi master'].includes(level)) {
                    throw new Error('Level must be padawan, jedi knight or jedi master');
                }
                swquizz.removeChild(objMainpage.mainpageDiv);
                const obj = new QuizGame();
                obj.main({ numberOfQuestions: 5, category: category, timeInSeconds: 20 }).then((div) => {
                    document.querySelector('#swquiz-app').appendChild(div);
                });
            },
        }),
    );
};
