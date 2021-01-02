import { queries } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { generateAnswerButton, markCorrectAndWrongAnswers } from '../src/app/AnswerButton.js';

describe('generate answer states', () => {
    test('return button', () => {
        let div = document.createElement('div');
        let button = document.createElement('button');
        button = generateAnswerButton(button, true);
        button.dataset.testid = 'normal';
        div.appendChild(button);
        expect(queries.getByTestId(div, 'normal').tagName).toBe('BUTTON');
    });
    test('hovered button', () => {
        let div = document.createElement('div');
        let button = document.createElement('button');
        button = generateAnswerButton(button, true);
        button.dataset.testid = 'hovered';
        div.appendChild(button);
        userEvent.hover(button);
        expect(queries.getByTestId(div, 'hovered').classList.contains('hovered')).toBe(true);
    });
    test('not hovered button', () => {
        let div = document.createElement('div');
        let button = document.createElement('button');
        button = generateAnswerButton(button, true);
        button.dataset.testid = 'unhovered';
        div.appendChild(button);
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(queries.getByTestId(div, 'unhovered').classList.contains('hovered')).toBe(false);
    });
    test('hovered choosen answer', () => {
        let div = document.createElement('div');
        let button = document.createElement('button');
        button = generateAnswerButton(button, true);
        button.dataset.testid = 'hovered-selected';
        div.appendChild(button);
        button.click();
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(queries.getByTestId(div, 'hovered-selected').classList.contains('hovered')).toBe(false);
        expect(queries.getByTestId(div, 'hovered-selected').classList.contains('selected')).toBe(true);
    });
    test('hovered out choosen answer', () => {
        let div = document.createElement('div');
        let button = document.createElement('button');
        button = generateAnswerButton(button, false);
        button.dataset.testid = 'unhovered-selected';
        div.appendChild(button);
        button.click();
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(queries.getByTestId(div, 'unhovered-selected').classList.contains('hovered')).toBe(false);
        expect(queries.getByTestId(div, 'unhovered-selected').classList.contains('selected')).toBe(true);
    });
    test('mark only correct answer', () => {
        let div = document.createElement('div');

        let correctAnswer = document.createElement('button');
        correctAnswer = generateAnswerButton(correctAnswer, true);
        correctAnswer.dataset.testid = 'selected-correct';

        let wrongAnswer = document.createElement('button');
        wrongAnswer = generateAnswerButton(wrongAnswer, true);

        const arrayOfButtons = [wrongAnswer, correctAnswer, wrongAnswer, wrongAnswer];

        arrayOfButtons.forEach((el) => {
            div.appendChild(el);
        });

        correctAnswer.click();
        markCorrectAndWrongAnswers(arrayOfButtons);

        expect(queries.getByTestId(div, 'selected-correct').classList.contains('correct')).toBe(true);
    });

    test('mark wrong and correct answer', () => {
        let div = document.createElement('div');

        let correctAnswer = document.createElement('button');
        correctAnswer = generateAnswerButton(correctAnswer, true);
        correctAnswer.dataset.testid = 'notselected-correct';

        let wrongAnswer = document.createElement('button');
        wrongAnswer = generateAnswerButton(wrongAnswer, false);

        let wrongAnswerSelected = document.createElement('button');
        wrongAnswerSelected = generateAnswerButton(wrongAnswerSelected, false);
        wrongAnswerSelected.dataset.testid = 'selected-wrong';

        const arrayOfButtons = [wrongAnswer, correctAnswer, wrongAnswerSelected, wrongAnswer];

        arrayOfButtons.forEach((el) => {
            div.appendChild(el);
        });

        wrongAnswerSelected.click();
        markCorrectAndWrongAnswers(arrayOfButtons);

        expect(queries.getByTestId(div, 'notselected-correct').classList.contains('correct')).toBe(true);
        expect(queries.getByTestId(div, 'selected-wrong').classList.contains('wrong')).toBe(true);
    });
});
