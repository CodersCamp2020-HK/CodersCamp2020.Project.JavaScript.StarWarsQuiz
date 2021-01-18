//import '../styles/AnswerButton.scss';

import audioUrl from '../../static/assets/audio/saberdown.wav';

export const generateAnswerButton = ({ text, onClick }) => {
    const state = { isSelectedAnswer: false, isCorrectAnswer: null };
    const audioPlayer = new Audio(audioUrl);
    audioPlayer.volume = 0.1;

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
        text: () => button.textContent,
        clearClasses: () => {
            button.className = 'answer-button';
            state.isSelectedAnswer = false;
            state.isCorrectAnswer = null;
        },
        setText: (newText) => (button.textContent = newText),
    };

    if (onClick) {
        view.element.addEventListener(
            'click',
            () => {
                audioPlayer.pause();
                audioPlayer.play();
                onClick(view);
            },
            false,
        );
    }
    return view;
};
