export class DisplayQuestion {
    constructor(category) {
        this.questionWrapper;
        this.questionParagraph;

        switch (category) {
            case 'people':
                this.questionText = `Who is this character?`;
                break;
            case 'vehicles':
                this.questionText = `What is this vehicle?`;
                break;
            case 'starships':
                this.questionText = `What is this starship?`;
                break;
            default:
                throw new Error('Category should be people, vehicles or starships');
        }
    }

    generateQuestion({ questionNumber }) {
        this.questionWrapper = document.createElement('div');
        this.questionWrapper.className = 'display-question-wrapper';

        this.questionParagraph = document.createElement('p');
        this.questionParagraph.className = 'display-question-text';
        this.questionParagraph.textContent = `${questionNumber}. ${this.questionText}`;

        this.questionWrapper.appendChild(this.questionParagraph);

        return this.questionWrapper;
    }
}
