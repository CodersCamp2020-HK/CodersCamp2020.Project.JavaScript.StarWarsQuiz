const changeChosenAnswerColor = (ev) => {
    let previousSelected = document.querySelector('selected');
    if (previousSelected) {
        previousSelected.isSelectedAnswer = false;
        ev.currentTarget.classList.remove('selected');
    }
    ev.currentTarget.isSelectedAnswer = true;
    ev.currentTarget.classList.add('selected');
};

export const markCorrectAndWrongAnswers = (arrayOfButtons) => {
    arrayOfButtons.forEach((el) => {
        if (el.isCorrectAnswer) {
            el.classList.add('correct');
        }
        if (el.isSelectedAnswer && !el.isCorrectAnswer) {
            el.classList.add('wrong');
        }
    });
};

const changeHoveredButtonColor = (ev) => {
    if (!ev.currentTarget.isSelectedAnswer) {
        ev.currentTarget.classList.add('hovered');
    }
};

const changeUnhoveredButtonColor = (ev) => {
    if (!ev.currentTarget.isSelectedAnswer) {
        ev.currentTarget.classList.remove('hovered');
    }
};

export const generateAnswerButton = (button, isCorrectAnswer) => {
    button.classList.add('answer');

    button.isCorrectAnswer = isCorrectAnswer;
    button.isSelectedAnswer = false;
    button.addEventListener('click', changeChosenAnswerColor, false);
    button.addEventListener('mouseover', changeHoveredButtonColor, false);
    button.addEventListener('mouseout', changeUnhoveredButtonColor, false);

    return button;
};
