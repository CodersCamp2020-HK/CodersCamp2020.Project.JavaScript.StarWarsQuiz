import { generateAnswerButton } from '../components/AnswerButton';
import { pointsCounter } from '../components/PointsCounter';
import { buttonNextQuestion } from '../components/buttonNextQuestion';
import { deathStar } from '../components/deathStar';
import { DisplayQuestion } from '../components/displayQuestion';
import { logoPicture } from '../components/logo';
import { generatePictureQuestion } from '../components/pictureComponent';
import { createController } from '../infrastructure/createController';

export class QuizGame {
    async main() {
        const mainDiv = await createController({ category: 'people', numberOfQuestions: 5 }).then((controller) => {
            const mainDiv = document.createElement('div');
            const logo = logoPicture();
            const question = new DisplayQuestion('people');
            const points = pointsCounter(1);
            const questionPicture = generatePictureQuestion('people', 1);
            let currentSelected = null;
            const answer1 = generateAnswerButton({
                text: 'Luke Skywalker',
                onClick: () => {
                    if (currentSelected) {
                        currentSelected.unselect();
                        currentSelected = answer1;
                        currentSelected.select();
                    } else {
                        currentSelected = answer1;
                        currentSelected.select();
                    }
                },
            });
            const answer2 = generateAnswerButton({
                text: 'Yoda',
                onClick: () => {
                    if (currentSelected) {
                        currentSelected.unselect();
                        currentSelected = answer2;
                        currentSelected.select();
                    } else {
                        currentSelected = answer2;
                        currentSelected.select();
                    }
                },
            });
            const answer3 = generateAnswerButton({
                text: 'R2D2',
                onClick: () => {
                    if (currentSelected) {
                        currentSelected.unselect();
                        currentSelected = answer3;
                        currentSelected.select();
                    } else {
                        currentSelected = answer3;
                        currentSelected.select();
                    }
                },
            });
            const answer4 = generateAnswerButton({
                text: 'C3PO',
                onClick: () => {
                    if (currentSelected) {
                        currentSelected.unselect();
                        currentSelected = answer4;
                        currentSelected.select();
                    } else {
                        currentSelected = answer4;
                        currentSelected.select();
                    }
                },
            });
            const answerDiv = document.createElement('div');
            const deathStarDiv = deathStar({ sec: 10 });
            const buttonNext = buttonNextQuestion;

            answerDiv.appendChild(answer1.element);
            answerDiv.appendChild(answer2.element);
            answerDiv.appendChild(answer3.element);
            answerDiv.appendChild(answer4.element);

            mainDiv.appendChild(logo);
            mainDiv.appendChild(question.generateQuestion({ questionNumber: 1 }));
            mainDiv.appendChild(questionPicture);
            mainDiv.appendChild(answerDiv);
            mainDiv.appendChild(deathStarDiv.element);
            mainDiv.appendChild(points);
            mainDiv.appendChild(buttonNext.element);

            return mainDiv;
        });
        return mainDiv;
    }
}
