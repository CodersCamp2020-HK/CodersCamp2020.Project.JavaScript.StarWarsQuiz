import { queries } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { generateAnswerButton } from '../src/app/AnswerButton.js';

const setupDOM = (isCorrectAnswer) => {
    const testid = 'answer-button';
    let button = null;
    beforeEach(() => {
        button = document.createElement('button');
        button = generateAnswerButton(button, isCorrectAnswer);
        button.dataset.testid = testid;
        document.body.appendChild(button);
    });
    afterEach(() => {
        document.body.removeChild(button);
        button = null;
    });
    return testid;
};

describe('generate answer states', () => {
    let testId = setupDOM(true);
    test('return button', () => {
        const button = queries.getByTestId(document, testId);
        expect(button.tagName).toBe('BUTTON');
    });
    test('hovered button', () => {
        const button = queries.getByTestId(document, testId);
        userEvent.hover(button);
        expect(button.classList.contains('hovered')).toBe(true);
    });
    test('not hovered button', () => {
        const button = queries.getByTestId(document, testId);
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(button.classList.contains('hovered')).toBe(false);
    });
    test('hovered choosen answer', () => {
        const button = queries.getByTestId(document, testId);
        button.click();
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(button.classList.contains('hovered')).toBe(false);
        expect(button.classList.contains('selected')).toBe(true);
    });
    test('hovered out choosen answer', () => {
        const button = queries.getByTestId(document, testId);
        button.click();
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(button.classList.contains('hovered')).toBe(false);
        expect(button.classList.contains('selected')).toBe(true);
    });

    // test('mark only correct answer', () => {
    //     let div = document.createElement('div');

    //     let correctAnswer = document.createElement('button');
    //     correctAnswer = generateAnswerButton(correctAnswer, true);
    //     correctAnswer.dataset.testid = 'selected-correct';

    //     let wrongAnswer = document.createElement('button');
    //     wrongAnswer = generateAnswerButton(wrongAnswer, true);

    //     const arrayOfButtons = [wrongAnswer, correctAnswer, wrongAnswer, wrongAnswer];

    //     arrayOfButtons.forEach((el) => {
    //         div.appendChild(el);
    //     });

    //     correctAnswer.click();
    //     markCorrectAndWrongAnswers(arrayOfButtons);

    //     expect(queries.getByTestId(div, 'selected-correct').classList.contains('correct')).toBe(true);
    // });

    // test('mark wrong and correct answer', () => {
    //     let div = document.createElement('div');

    //     let correctAnswer = document.createElement('button');
    //     correctAnswer = generateAnswerButton(correctAnswer, true);
    //     correctAnswer.dataset.testid = 'notselected-correct';

    //     let wrongAnswer = document.createElement('button');
    //     wrongAnswer = generateAnswerButton(wrongAnswer, false);

    //     let wrongAnswerSelected = document.createElement('button');
    //     wrongAnswerSelected = generateAnswerButton(wrongAnswerSelected, false);
    //     wrongAnswerSelected.dataset.testid = 'selected-wrong';

    //     const arrayOfButtons = [wrongAnswer, correctAnswer, wrongAnswerSelected, wrongAnswer];

    //     arrayOfButtons.forEach((el) => {
    //         div.appendChild(el);
    //     });

    //     wrongAnswerSelected.click();
    //     markCorrectAndWrongAnswers(arrayOfButtons);

    //     expect(queries.getByTestId(div, 'notselected-correct').classList.contains('correct')).toBe(true);
    //     expect(queries.getByTestId(div, 'selected-wrong').classList.contains('wrong')).toBe(true);
    // });
});
