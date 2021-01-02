//import '../styles/AnswerButton.scss';
export const generateAnswerButton = ({ text, onClick, onHover, onUnhover }) => {
    const state = { isSelectedAnswer: false, text: text, isCorrectAnswer: null };

    const button = document.createElement('button');
    button.classList.add('answer-button');
    button.appendChild(document.createTextNode(text));

    const view = {
        element: button,
        select: () => {
            state.isSelectedAnswer = true;
            button.removeEventListener('mouseover', onHover, false);
            button.removeEventListener('mouseover', onUnhover, false);
        },
        unselect: () => {
            state.isSelectedAnswer = false;
            button.removeEventListener('mouseover', onHover, false);
            button.removeEventListener('mouseover', onUnhover, false);
        },
        markAsCorrect: () => {
            state.isCorrectAnswer = true;
            button.removeEventListener('mouseover', onHover, false);
            button.removeEventListener('mouseover', onUnhover, false);
        },
        markAsWrong: () => {
            state.isCorrectAnswer = false;
            button.removeEventListener('mouseover', onHover, false);
            button.removeEventListener('mouseover', onUnhover, false);
        },
        isSelectedAnswer: () => state.isSelectedAnswer,
        isCorrectAnswer: () => state.isCorrectAnswer,
        text: () => state.text,
    };

    button.addEventListener('click', onClick, false);
    button.addEventListener('mouseover', onHover, false);
    button.addEventListener('mouseout', onUnhover, false);

    return view;
};
