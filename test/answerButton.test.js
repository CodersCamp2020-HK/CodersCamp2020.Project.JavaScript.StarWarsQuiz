// import { queries } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import { generateAnswerButton } from '../src/app/AnswerButton.js';

describe('generate answer states', () => {
    test('element is button', () => {
        let view = generateAnswerButton({
            text: 'Example button',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        const button = view.element;
        expect(button.tagName).toBe('BUTTON');
    });
    test('select button', () => {
        let view = generateAnswerButton({
            text: 'Example button',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        view.select();
        expect(view.isSelectedAnswer()).toBe(true);
    });
    test('unselect button', () => {
        let view = generateAnswerButton({
            text: 'Example button',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        view.select();
        view.unselect();
        expect(view.isSelectedAnswer()).toBe(false);
    });
    test('hover button', () => {
        let view = generateAnswerButton({
            text: 'Example button',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        view.hover();
        expect(view.isHoveredAnswer()).toBe(true);
    });
    test('unhover button', () => {
        let view = generateAnswerButton({
            text: 'Example button',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        view.hover();
        view.unhover();
        expect(view.isHoveredAnswer()).toBe(false);
    });
    test('mark correct answer', () => {
        let view = generateAnswerButton({
            text: 'Example button',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        view.markAsCorrect();
        expect(view.isCorrectAnswer()).toBe(true);
    });
    test('mark wrong answer', () => {
        let view = generateAnswerButton({
            text: 'Example button',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        view.markAsWrong();
        expect(view.isCorrectAnswer()).toBe(false);
    });
    test('has correct text', () => {
        let view = generateAnswerButton({
            text: 'test',
            onClick: null,
            onHover: null,
            onUnhover: null,
        });
        expect(view.text()).toBe('test');
    });
});
