//import '../styles/AnswerButton.scss';
export const generateAnswerButton = ({ text, onClick, onHover, onUnhover }) => {
    const state = { isSelectedAnswer: false, text: text, isCorrectAnswer: null, isHoveredAnswer: false };

    const button = document.createElement('button');
    button.classList.add('answer-button');
    button.appendChild(document.createTextNode(text));

    const view = {
        element: button,
        select: () => {
            state.isSelectedAnswer = true;
        },
        unselect: () => {
            state.isSelectedAnswer = false;
        },
        hover: () => {
            state.isHoveredAnswer = true;
        },
        unhover: () => {
            state.isHoveredAnswer = false;
        },
        markAsCorrect: () => {
            state.isCorrectAnswer = true;
        },
        markAsWrong: () => {
            state.isCorrectAnswer = false;
        },
        isSelectedAnswer: () => state.isSelectedAnswer,
        isCorrectAnswer: () => state.isCorrectAnswer,
        isHoveredAnswer: () => state.isHoveredAnswer,
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
    if (onHover) {
        view.element.addEventListener(
            'mouseover',
            () => {
                onHover(view);
            },
            false,
        );
    }
    if (onUnhover) {
        view.element.addEventListener(
            'mouseout',
            () => {
                onUnhover(view);
            },
            false,
        );
    }

    return view;
};
