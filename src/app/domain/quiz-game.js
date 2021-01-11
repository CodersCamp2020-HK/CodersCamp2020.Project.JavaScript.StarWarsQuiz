import { generateAnswerButton } from '../components/AnswerButton';
import { pointsCounter } from '../components/PointsCounter';
import { deathStar } from '../components/deathStar';
import { DisplayQuestion } from '../components/displayQuestion';
import { logoPicture } from '../components/logo';
import { generatePictureQuestion } from '../components/pictureComponent';
import { createController } from '../infrastructure/createController';
import { QuestionScoreComponent } from '../components/QuestionScoreView';
import { Button } from '../components/Button';
import { generateTimer } from '../components/Timer';

export class QuizGame {
    constructor() {
        this.questionIndex = 0;
    }

    async main({ category, numberOfQuestions, timeInSeconds }) {
        const mainDiv = await createController({ category: category, numberOfQuestions: numberOfQuestions }).then(
            (controller) => {
                const pointsController = new QuestionScoreComponent(controller.numberOfQuestions);
                const pointsDiv = pointsController.generateViewDiv();
                const mainDiv = document.createElement('div');
                const logo = logoPicture();
                const question = new DisplayQuestion(controller.category);
                let pointsWrapper = pointsCounter(0);
                let points = pointsWrapper.querySelector('.pointsCounter_points').textContent;
                const questionPicture = generatePictureQuestion(
                    controller.category,
                    controller.correctAnswer[this.questionIndex].index,
                );
                let currentSelected = null;

                const answer1 = generateAnswerButton({
                    text: controller.answers[this.questionIndex][0].name,
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
                    text: controller.answers[this.questionIndex][1].name,
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
                    text: controller.answers[this.questionIndex][2].name,
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
                    text: controller.answers[this.questionIndex][3].name,
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

                const answersArray = [answer1, answer2, answer3, answer4];

                const timerAndDeathStarDiv = document.createElement('div');
                const answerDiv = document.createElement('div');
                answerDiv.className = 'answers-wrapper';
                const deathStarDiv = deathStar({ sec: timeInSeconds });
                const timer = generateTimer({
                    timeleftInSeconds: timeInSeconds,
                    onTimerEnd: () => {
                        console.log('Koniec czasu');
                        return;
                    },
                });
                timerAndDeathStarDiv.appendChild(deathStarDiv.element);
                timerAndDeathStarDiv.appendChild(timer);

                const buttonNext = new Button('NEXT', () => {
                    // Poprawna odpowiedz
                    if (currentSelected.text() == controller.correctAnswer[this.questionIndex].name) {
                        currentSelected.markAsCorrect();
                        pointsController.numofCorrectAns++;
                        pointsController.setCorrectAns(pointsController.numofCorrectAns);
                        points = parseInt(points);
                        points += 10;
                        pointsWrapper.querySelector('.pointsCounter_points').textContent = points;
                    } else {
                        // Niepoprawna odpowiedz
                        const correctAnswer = answersArray.filter(
                            (answer) => answer.text() == controller.correctAnswer[this.questionIndex].name,
                        )[0];
                        correctAnswer.markAsCorrect();
                        currentSelected.markAsWrong();
                        pointsController.numofIncorrectAns++;
                        pointsController.setIncorrectAns(pointsController.numofIncorrectAns);
                    }
                    controller.currentQuestionNumber++;
                    this.questionIndex++;
                    if (controller.currentQuestionNumber > controller.numberOfQuestions) {
                        console.log('Koniec pytań');
                        return;
                    }

                    setTimeout(() => {
                        questionPicture.src = `/static/assets/img/modes/${controller.category}/${
                            controller.correctAnswer[this.questionIndex].index
                        }.jpg`;
                        answersArray.forEach((but) => {
                            but.clearClasses();
                        });
                        answersArray.forEach((answer, index) => {
                            answer.setText(controller.answers[this.questionIndex][index].name);
                        });
                    }, 2000);
                });

                buttonNext.element.classList.add('button-next');

                answerDiv.appendChild(answer1.element);
                answerDiv.appendChild(answer2.element);
                answerDiv.appendChild(answer3.element);
                answerDiv.appendChild(answer4.element);

                mainDiv.appendChild(logo);
                mainDiv.appendChild(question.generateQuestion({ questionNumber: controller.currentQuestionNumber }));
                mainDiv.appendChild(pointsDiv);
                mainDiv.appendChild(questionPicture);
                mainDiv.appendChild(answerDiv);
                mainDiv.appendChild(timerAndDeathStarDiv);
                mainDiv.appendChild(pointsWrapper);
                mainDiv.appendChild(buttonNext.element);

                mainDiv.classList = 'quiz-game-wrapper';

                buttonNext.element.onclick;

                return mainDiv;
            },
        );
        return mainDiv;
    }
}
