import { QuizGame } from './domain/quiz-game';
import { Mainpage } from './domain/Mainpage';
import { Summary } from './domain/Summary';

export const App = () => {
    const swquizz = document.querySelector('#swquiz-app');
    const objMainpage = new Mainpage();
    const numberOfQuestions = 5;
    const timeInSeconds = 3;
    const onClickStart = () => {
        const category = objMainpage.categoriesBtns.level;
        const level = objMainpage.levelsBtns.level;
        const input = objMainpage.userInput.lastChild;
        const name = input.value;
        if (name.trim().length <= 0) {
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
        const onEnd = (points, correctAnswers) => {
            swquizz.removeChild(swquizz.firstChild);
            const summaryDiv = new Summary(
                name,
                points,
                level,
                numberOfQuestions,
                correctAnswers,
                () => {
                    swquizz.removeChild(summaryDiv.summaryDiv);
                    swquizz.appendChild(objMainpage.main({ onClickStart }));
                },
                () => {
                    swquizz.removeChild(summaryDiv.summaryDiv);
                    obj.main({ numberOfQuestions, category, timeInSeconds, onEnd }).then((div) => {
                        swquizz.appendChild(div);
                    });
                },
            );
            summaryDiv.main();
            swquizz.appendChild(summaryDiv.summaryDiv);
        };
        obj.main({
            numberOfQuestions: numberOfQuestions,
            category: category,
            timeInSeconds: timeInSeconds,
            onEnd,
        }).then((div) => {
            swquizz.appendChild(div);
        });
    };
    swquizz.appendChild(
        objMainpage.main({
            onClickStart,
        }),
    );
};
