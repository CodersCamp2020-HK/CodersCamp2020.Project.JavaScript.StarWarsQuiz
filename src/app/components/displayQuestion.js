export class DisplayQuestion {
    constructor() {
        this.questionNumber = 1;
        this.questionWrapper;
        this.questionParagraph;
    }

    generateQuestion(category) {
        this.questionWrapper = document.createElement('div');
        this.questionWrapper.className = 'display-question-wrapper';

        this.questionParagraph = document.createElement('p');
        this.questionParagraph.className = 'display-question-text';

        switch (category) {
            case 'people':
                this.questionParagraph.textContent = `${this.questionNumber}. Who is this character?`;
                break;
            case 'vehicles':
                this.questionParagraph.textContent = `${this.questionNumber}. What is this vehicle?`;
                break;
            case 'starships':
                this.questionParagraph.textContent = `${this.questionNumber}. What is this starship?`;
                break;
            default:
                this.questionParagraph.textContent = `${this.questionNumber}. Who/What is this character/vehicle/starship?`;
                break;
        }

        this.questionWrapper.appendChild(this.questionParagraph);
        this.questionNumber++;

        return this.questionWrapper;
    }
}
