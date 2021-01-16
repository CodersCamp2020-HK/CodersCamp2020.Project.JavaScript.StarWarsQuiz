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
import { showAnswers } from '../components/ShowAnswers';

export class QuizGame {
    constructor() {
        this.questionIndex = 0;
        this.points = 0;
        this.currentSelectedAnswer = null;
        this.numOfCorrectAnswers = 0;
        this.numofIncorrectAns = 0;
        this.currentQuestionNumber = 1;
        this.isCbCalled = false;
    }

    updateElement(CSSselector, updatedText) {
        const element = document.querySelector(CSSselector);
        if (element) {
            element.textContent = updatedText;
        } else {
            throw new Error(`Element with selector ${CSSselector} does not exist (is undefined).`);
        }
    }

    createAnswersArray({ answerObjects, onClick }) {
        const views = [];
        for (let i = 0; i < 4; i++) {
            views.push(generateAnswerButton({ text: answerObjects[i].name, onClick: onClick }));
        }
        return showAnswers(views);
    }

    updateCorrectAnswer({ pointsController }) {
        this.currentSelectedAnswer.markAsCorrect();
        this.numOfCorrectAnswers++;
        this.points += 10;
        this.updateElement('.pointsCounter_points', this.points);
        pointsController.setCorrectAns(this.numOfCorrectAnswers);
    }

    updateWrongAnswer({ answersArray, quizController, pointsController }) {
        this.currentSelectedAnswer.markAsWrong();
        this.numofIncorrectAns++;
        const correctAnswer = answersArray.filter(
            (answer) => answer.text() == quizController.correctAnswer[this.questionIndex].name,
        )[0];
        correctAnswer.markAsCorrect();
        pointsController.setIncorrectAns(this.numofIncorrectAns);
    }

    async main({ category, numberOfQuestions, timeInSeconds, onEnd }) {
        const quizGameDiv = await createController({ category: category, numberOfQuestions: numberOfQuestions }).then(
            (quizController) => {
                const mainDiv = document.createElement('div');
                this.questionIndex = 0;
                this.points = 0;
                this.currentSelectedAnswer = null;
                this.numOfCorrectAnswers = 0;
                this.numofIncorrectAns = 0;
                this.currentQuestionNumber = 1;
                this.isCbCalled = false;
                mainDiv.classList = 'quiz-game-wrapper';

                const pointsController = new QuestionScoreComponent(numberOfQuestions);
                const pointsDiv = pointsController.generateViewDiv();
                const logo = logoPicture();
                const questionText = new DisplayQuestion(quizController.category);
                const pointsWrapper = pointsCounter(0);
                const questionPicture = generatePictureQuestion(
                    quizController.category,
                    quizController.correctAnswer[this.questionIndex].index,
                );

                const { element: answerDiv, views: answersArray } = this.createAnswersArray({
                    answerObjects: quizController.answers[this.questionIndex],
                    onClick: (answer) => {
                        if (this.currentSelectedAnswer) {
                            this.currentSelectedAnswer.unselect();
                        }

                        this.currentSelectedAnswer = answer;
                        this.currentSelectedAnswer.select();
                    },
                });

                const timerAndDeathStarDiv = document.createElement('div');
                timerAndDeathStarDiv.className = 'timerAndDeathStarDiv';
                const deathStarDiv = deathStar({ sec: timeInSeconds });

                const timer = generateTimer({
                    timeleftInSeconds: timeInSeconds,
                    onTimerEnd: () => {
                        if (!this.isCbCalled) {
                            this.isCbCalled = true;
                            onEnd(this.points, this.numOfCorrectAnswers);
                        }
                    },
                });
                timerAndDeathStarDiv.appendChild(deathStarDiv.element);
                const deathStarParagraph = document.createElement('p');
                deathStarParagraph.textContent = `Time left`;
                timerAndDeathStarDiv.appendChild(deathStarParagraph);
                timerAndDeathStarDiv.appendChild(timer);

                const buttonNext = new Button('NEXT', () => {
                    buttonNext.element.disabled = true;
                    if (this.currentSelectedAnswer.text() == quizController.correctAnswer[this.questionIndex].name) {
                        this.updateCorrectAnswer({ pointsController: pointsController });
                    } else {
                        this.updateWrongAnswer({
                            answersArray: answersArray,
                            quizController: quizController,
                            pointsController: pointsController,
                        });
                    }
                    this.currentQuestionNumber++;
                    this.questionIndex++;
                    if (this.currentQuestionNumber > numberOfQuestions && !this.isCbCalled) {
                        this.isCbCalled = true;
                        return onEnd(this.points, this.numOfCorrectAnswers);
                    }

                    setTimeout(() => {
                        if (!this.isCbCalled) {
                            questionPicture.src = `/static/assets/img/modes/${quizController.category}/${
                                quizController.correctAnswer[this.questionIndex].index
                            }.jpg`;
                            answersArray.forEach((but) => {
                                but.clearClasses();
                            });
                            answersArray.forEach((answer, index) => {
                                answer.setText(quizController.answers[this.questionIndex][index].name);
                            });
                            this.updateElement(
                                '.display-question-text',
                                `${this.currentQuestionNumber}. ${questionText.questionText}`,
                            );
                            buttonNext.element.disabled = false;
                        }
                    }, 2000);
                });

                buttonNext.element.classList.add('button-next');

                mainDiv.appendChild(logo);
                mainDiv.appendChild(questionText.generateQuestion({ questionNumber: this.currentQuestionNumber }));
                mainDiv.appendChild(pointsDiv);
                mainDiv.appendChild(questionPicture);
                mainDiv.appendChild(answerDiv);
                mainDiv.appendChild(timerAndDeathStarDiv);
                mainDiv.appendChild(pointsWrapper);
                mainDiv.appendChild(buttonNext.element);

                return mainDiv;
            },
        );
        return quizGameDiv;
    }
}
