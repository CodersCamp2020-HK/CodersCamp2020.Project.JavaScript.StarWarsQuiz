const changeChosenAnswerColor = (ev) => {
    if (ev.currentTarget.isCorrectAnswer) {
        ev.currentTarget.classList.add('correct');
    } else {
        ev.currentTarget.classList.add('wrong');
    }
    ev.currentTarget.isSelectedAnswer = true;
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

export const generateAnswerButton = (isCorrectAnswer) => {
    const button = document.createElement('button');
    button.classList.add('answer');

    button.isCorrectAnswer = isCorrectAnswer;
    button.isSelectedAnswer = false;
    button.addEventListener('click', changeChosenAnswerColor, false);
    button.addEventListener('mouseover', changeHoveredButtonColor, false);
    button.addEventListener('mouseout', changeUnhoveredButtonColor, false);

    return button;
};
