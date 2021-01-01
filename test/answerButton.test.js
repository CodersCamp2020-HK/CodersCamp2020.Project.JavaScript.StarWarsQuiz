import { queries } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { generateAnswerButton } from '../src/app/AnswerButton.js';

describe('generate answer button', () => {
    test('return button', () => {
        let div = document.createElement('div');
        let button = generateAnswerButton(true);
        button.dataset.testid = 'normal';
        div.appendChild(button);
        expect(queries.getByTestId(div, 'normal').tagName).toBe('BUTTON');
    });
    test('hovered button', () => {
        let div = document.createElement('div');
        let button = generateAnswerButton(true);
        button.dataset.testid = 'hovered';
        div.appendChild(button);
        userEvent.hover(button);
        expect(queries.getByTestId(div, 'hovered').classList.contains('hovered')).toBe(true);
    });
    test('not hovered button', () => {
        let div = document.createElement('div');
        let button = generateAnswerButton(true);
        button.dataset.testid = 'unhovered';
        div.appendChild(button);
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(queries.getByTestId(div, 'unhovered').classList.contains('hovered')).toBe(false);
    });
    test('clicked correct answer', () => {
        let div = document.createElement('div');
        let button = generateAnswerButton(true);
        button.dataset.testid = 'clicked-correct';
        div.appendChild(button);
        button.click();
        expect(queries.getByTestId(div, 'clicked-correct').classList.contains('correct')).toBe(true);
    });
    test('clicked wrong answer', () => {
        let div = document.createElement('div');
        let button = generateAnswerButton(false);
        button.dataset.testid = 'clicked-wrong';
        div.appendChild(button);
        button.click();
        expect(queries.getByTestId(div, 'clicked-wrong').classList.contains('wrong')).toBe(true);
    });
    test('hovered choosen answer', () => {
        let div = document.createElement('div');
        let button = generateAnswerButton(true);
        button.dataset.testid = 'hovered-correct';
        div.appendChild(button);
        button.click();
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(queries.getByTestId(div, 'hovered-correct').classList.contains('hovered')).toBe(false);
        expect(queries.getByTestId(div, 'hovered-correct').classList.contains('correct')).toBe(true);
    });
    test('hovered out choosen answer', () => {
        let div = document.createElement('div');
        let button = generateAnswerButton(false);
        button.dataset.testid = 'unhovered-wrong';
        div.appendChild(button);
        button.click();
        userEvent.hover(button);
        userEvent.unhover(button);
        expect(queries.getByTestId(div, 'unhovered-wrong').classList.contains('hovered')).toBe(false);
        expect(queries.getByTestId(div, 'unhovered-wrong').classList.contains('wrong')).toBe(true);
    });
});
