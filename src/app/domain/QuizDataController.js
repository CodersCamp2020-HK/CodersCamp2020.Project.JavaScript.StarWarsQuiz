export class QuizDataController {
    constructor({ category, answers }) {
        this.__category = category;
        this.__answers = answers;
        this.__currentQuestionNumber = 1;
    }

    get category() {
        return this.__category;
    }

    get answers() {
        return this.__answers['answers'];
    }

    get currentQuestionNumber() {
        return this.__currentQuestionNumber;
    }

    get correctAnswer() {
        return this.__answers['questionsArr'];
    }

    set currentQuestionNumber(val) {
        this.__currentQuestionNumber = val;
    }
}
