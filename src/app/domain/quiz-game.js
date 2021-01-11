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
        this.points = 0;
        this.currentSelectedAnswer = null;
        this.numOfCorrectAnswers = 0;
        this.numofIncorrectAns = 0;
        this.currentQuestionNumber = 1;
    }

    updateElement(CSSselector, updatedText) {
        const element = document.querySelector(CSSselector);
        if (element) {
            element.textContent = updatedText;
        } else {
            throw new Error(`Element with selector ${CSSselector} does not exist (is undefined).`);
        }
    }

    async main({ category, numberOfQuestions, timeInSeconds }) {
        const mainDiv = await createController({ category: category, numberOfQuestions: numberOfQuestions }).then(
            (quizController) => {
                const pointsController = new QuestionScoreComponent(numberOfQuestions);
                const pointsDiv = pointsController.generateViewDiv();
                const mainDiv = document.createElement('div');
                const logo = logoPicture();
                const questionText = new DisplayQuestion(quizController.category);
                const pointsWrapper = pointsCounter(0);
                const questionPicture = generatePictureQuestion(
                    quizController.category,
                    quizController.correctAnswer[this.questionIndex].index,
                );

                const answer1 = generateAnswerButton({
                    text: quizController.answers[this.questionIndex][0].name,
                    onClick: () => {
                        if (this.currentSelectedAnswer) {
                            this.currentSelectedAnswer.unselect();
                            this.currentSelectedAnswer = answer1;
                            this.currentSelectedAnswer.select();
                        } else {
                            this.currentSelectedAnswer = answer1;
                            this.currentSelectedAnswer.select();
                        }
                    },
                });
                const answer2 = generateAnswerButton({
                    text: quizController.answers[this.questionIndex][1].name,
                    onClick: () => {
                        if (this.currentSelectedAnswer) {
                            this.currentSelectedAnswer.unselect();
                            this.currentSelectedAnswer = answer2;
                            this.currentSelectedAnswer.select();
                        } else {
                            this.currentSelectedAnswer = answer2;
                            this.currentSelectedAnswer.select();
                        }
                    },
                });
                const answer3 = generateAnswerButton({
                    text: quizController.answers[this.questionIndex][2].name,
                    onClick: () => {
                        if (this.currentSelectedAnswer) {
                            this.currentSelectedAnswer.unselect();
                            this.currentSelectedAnswer = answer3;
                            this.currentSelectedAnswer.select();
                        } else {
                            this.currentSelectedAnswer = answer3;
                            this.currentSelectedAnswer.select();
                        }
                    },
                });
                const answer4 = generateAnswerButton({
                    text: quizController.answers[this.questionIndex][3].name,
                    onClick: () => {
                        if (this.currentSelectedAnswer) {
                            this.currentSelectedAnswer.unselect();
                            this.currentSelectedAnswer = answer4;
                            this.currentSelectedAnswer.select();
                        } else {
                            this.currentSelectedAnswer = answer4;
                            this.currentSelectedAnswer.select();
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
                    if (this.currentSelectedAnswer.text() == quizController.correctAnswer[this.questionIndex].name) {
                        this.currentSelectedAnswer.markAsCorrect();
                        this.numOfCorrectAnswers++;
                        pointsController.setCorrectAns(this.numOfCorrectAnswers);
                        this.points += 10;
                        this.updateElement('.pointsCounter_points', this.points);
                    } else {
                        // Niepoprawna odpowiedz
                        const correctAnswer = answersArray.filter(
                            (answer) => answer.text() == quizController.correctAnswer[this.questionIndex].name,
                        )[0];
                        correctAnswer.markAsCorrect();
                        this.currentSelectedAnswer.markAsWrong();
                        this.numofIncorrectAns++;
                        pointsController.setIncorrectAns(this.numofIncorrectAns);
                    }
                    this.currentQuestionNumber++;
                    this.questionIndex++;
                    if (this.currentQuestionNumber > numberOfQuestions) {
                        console.log('Koniec pytań');
                        return;
                    }

                    setTimeout(() => {
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
                    }, 2000);
                });

                buttonNext.element.classList.add('button-next');

                answerDiv.appendChild(answer1.element);
                answerDiv.appendChild(answer2.element);
                answerDiv.appendChild(answer3.element);
                answerDiv.appendChild(answer4.element);

                mainDiv.appendChild(logo);
                mainDiv.appendChild(questionText.generateQuestion({ questionNumber: this.currentQuestionNumber }));
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
