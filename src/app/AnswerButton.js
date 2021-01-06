//import '../styles/AnswerButton.scss';
export const generateAnswerButton = ({ text, onClick }) => {
    const state = { isSelectedAnswer: false, text: text, isCorrectAnswer: null };

    const button = document.createElement('button');
    button.classList.add('answer-button');
    button.appendChild(document.createTextNode(text));

    const view = {
        element: button,
        select: () => {
            state.isSelectedAnswer = true;
            button.classList.add('answer-button-selected');
        },
        unselect: () => {
            state.isSelectedAnswer = false;
            button.classList.remove('answer-button-selected');
        },
        markAsCorrect: () => {
            state.isCorrectAnswer = true;
            button.classList.remove('answer-button-selected');
            button.classList.add('answer-button-correct');
        },
        markAsWrong: () => {
            state.isCorrectAnswer = false;
            button.classList.remove('answer-button-selected');
            button.classList.add('answer-button-wrong');
        },
        isSelectedAnswer: () => state.isSelectedAnswer,
        isCorrectAnswer: () => state.isCorrectAnswer,
        text: () => state.text,
    };

    if (onClick) {
        view.element.addEventListener(
            'click',
            () => {
                onClick(view);
            },
            false,
        );
    }
    return view;
};
