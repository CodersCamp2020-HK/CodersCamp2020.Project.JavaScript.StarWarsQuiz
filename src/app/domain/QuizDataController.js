export class QuizDataController {
    constructor({ category, answers }) {
        this.__category = category;
        this.__answers = answers;
    }

    get category() {
        return this.__category;
    }

    get answers() {
        return this.__answers;
    }
}
