import { generateAnswerButton } from '../components/AnswerButton';
import { pointsCounter } from '../components/PointsCounter';
import { buttonNextQuestion } from '../components/buttonNextQuestion';
import { deathStar } from '../components/deathStar';
import { DisplayQuestion } from '../components/displayQuestion';
import { logoPicture } from '../components/logo';
import { generatePictureQuestion } from '../components/pictureComponent';
import { createController } from '../infrastructure/createController';
import { QuestionScoreComponent } from '../components/QuestionScoreView';

export class QuizGame {
    async main() {
        const mainDiv = await createController({ category: 'people', numberOfQuestions: 5 }).then((controller) => {
            const pointsController = new QuestionScoreComponent(controller.answers.length);
            const questionIndex = controller.currentQuestionNumber - 1;
            // console.log(controller.answers[0]);
            // console.log(controller.currentQuestionNumber);
            // console.log(controller.correctAnswer);
            const pointsDiv = pointsController.generateViewDiv();
            const mainDiv = document.createElement('div');
            const logo = logoPicture();
            const question = new DisplayQuestion(controller.category);
            const points = pointsCounter(1);
            const questionPicture = generatePictureQuestion(
                controller.category,
                controller.correctAnswer[questionIndex].index,
            );
            let currentSelected = null;

            const answer1 = generateAnswerButton({
                text: controller.answers[questionIndex][0].name,
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
                text: controller.answers[questionIndex][1].name,
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
                text: controller.answers[questionIndex][2].name,
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
                text: controller.answers[questionIndex][3].name,
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
            mainDiv.appendChild(question.generateQuestion({ questionNumber: controller.currentQuestionNumber }));
            mainDiv.appendChild(pointsDiv);
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
