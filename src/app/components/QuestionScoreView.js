export class QuestionScoreComponent {
    constructor(numOfAllAns) {
      this.numOfAllAns = numOfAllAns;
      this.numofCorrectAns = 0
      this.numofIncorrectAns = 0

      this.view = document.createElement("div")
      this.numofCorrectAnsView = document.createElement("span")
      this.numofCorrectAnsView.style.color = "green"
      this.numofCorrectAnsView.textContent = this.numofCorrectAns.toString()
      this.view.appendChild(this.numofCorrectAnsView);

      document.createTextNode("/") 

      this.numofIncorrectAnsView = document.createElement("span")
      this.numofIncorrectAnsView.style.color = "red"
      this.numofIncorrectAnsView.textContent = this.numofIncorrectAns.toString()
      this.view.appendChild(this.numofIncorrectAnsView);

      document.createTextNode("/") 

      this.numOfAllAnsView = document.createElement("span")
      this.numOfAllAnsView.style.color = "white"
      this.numOfAllAnsView.textContent = this.numOfAllAns.toString()
      this.view.appendChild(this.numOfAllAnsView);
    }

    setCorrectAns(value) {
      this.numofCorrectAns = value
      this.numofCorrectAnsView.textContent = this.numofCorrectAns.toString()
    }

    setIncorrectAns(value) {
      this.numofIncorrectAns = value
      this.numofIncorrectAnsView.textContent = this.numofCorrectAns.toString()
    }
  }


