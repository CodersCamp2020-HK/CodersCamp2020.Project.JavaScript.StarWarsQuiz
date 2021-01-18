import { QuizGame } from './domain/quiz-game';
import { Mainpage } from './components/Mainpage';
import { Summary } from './components/Summary';

export const App = () => {
    const swquizz = document.querySelector('#swquiz-app');
    const mainpage = new Mainpage();
    const numberOfQuestions = 5;
    const timeInSeconds = 3;
    const onClickStart = () => {
        const category = mainpage.categoriesBtns.level;
        const level = mainpage.levelsBtns.level;
        const input = mainpage.userInput.lastChild;
        const userName = input.value;
        if (userName.trim().length <= 0) {
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
        swquizz.removeChild(mainpage.mainpageDiv);
        const quizGame = new QuizGame();
        const onEnd = (points, correctAnswers) => {
            swquizz.removeChild(swquizz.firstChild);
            const summary = new Summary(
                userName,
                points,
                level,
                numberOfQuestions,
                correctAnswers,
                () => {
                    swquizz.removeChild(summary.summaryDiv);
                    swquizz.appendChild(mainpage.generateMainpage({ onClickStart }));
                },
                () => {
                    swquizz.removeChild(summary.summaryDiv);
                    quizGame.main({ numberOfQuestions, category, timeInSeconds, onEnd }).then((div) => {
                        swquizz.appendChild(div);
                    });
                },
            );
            summary.generateSummary();
            swquizz.appendChild(summary.summaryDiv);
        };
        quizGame
            .main({
                numberOfQuestions,
                category,
                timeInSeconds,
                onEnd,
            })
            .then((div) => {
                swquizz.appendChild(div);
            });
    };
    swquizz.appendChild(
        mainpage.generateMainpage({
            onClickStart,
        }),
    );
};
