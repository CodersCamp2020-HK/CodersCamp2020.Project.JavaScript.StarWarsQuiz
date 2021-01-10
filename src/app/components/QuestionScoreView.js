export class QuestionScoreComponent {
    constructor(numOfAllAns) {
        this.numOfAllAns = numOfAllAns;
        this.numofCorrectAns = 0;
        this.numofIncorrectAns = 0;
    }

    generateViewDiv() {
        this.view = document.createElement('div');
        this.view.className = 'QuestionScoreComponent';
        this.numofCorrectAnsView = document.createElement('span');
        this.numofCorrectAnsView.className = 'display-num-of-good';
        this.numofCorrectAnsView.textContent = this.numofCorrectAns.toString();
        this.view.appendChild(this.numofCorrectAnsView);

        this.view.appendChild(document.createTextNode('/'));

        this.numofIncorrectAnsView = document.createElement('span');
        this.numofIncorrectAnsView.className = 'display-num-of-wrong';
        this.numofIncorrectAnsView.textContent = this.numofIncorrectAns.toString();
        this.view.appendChild(this.numofIncorrectAnsView);

        this.view.appendChild(document.createTextNode('/'));

        this.numOfAllAnsView = document.createElement('span');
        this.numOfAllAnsView.className = 'display-num-of-all';

        this.numOfAllAnsView.textContent = this.numOfAllAns.toString();
        this.view.appendChild(this.numOfAllAnsView);

        return this.view;
    }

    setCorrectAns(value) {
        this.numofCorrectAns = value;
        this.numofCorrectAnsView.textContent = this.numofCorrectAns.toString();
    }

    setIncorrectAns(value) {
        this.numofIncorrectAns = value;
        this.numofIncorrectAnsView.textContent = this.numofIncorrectAns.toString();
    }
}
