import { generateAnswerButton } from '../src/app/AnswerButton';
import { markAnswers, showAnswers, createButtonsWithText } from '../src/app/showAnswers';

let threeAnswers = [
    { text: 'Example1', isCorrect: false },
    { text: 'Example2', isCorrect: true },
    { text: 'Example3', isCorrect: false },
];
let fourAnswers = [
    { text: 'Example1', isCorrect: false },
    { text: 'Example2', isCorrect: true },
    { text: 'Example3', isCorrect: false },
    { text: 'Example4', isCorrect: false },
];

let answerButtons = [generateAnswerButton('text'), generateAnswerButton('text'), generateAnswerButton('text')];

describe('show answers', () => {
    test('return div', () => {
        expect(showAnswers(threeAnswers, generateAnswerButton).element.tagName).toBe('DIV');
    });
    test('answer is button', () => {
        let div = showAnswers(threeAnswers, generateAnswerButton).element;
        let button = div.children[0];
        expect(button.tagName).toBe('BUTTON');
    });
    test('div has 4 answers', () => {
        let div = showAnswers(fourAnswers, generateAnswerButton).element;
        let divLength = div.children.length;
        expect(divLength).toBe(4);
    });
    test('div has 3 answers', () => {
        let div = showAnswers(threeAnswers, generateAnswerButton).element;
        let divLength = div.children.length;
        expect(divLength).toBe(3);
    });
});

describe('mark as correct/wrong answer', () => {
    test('mark correct answer', () => {
        expect(markAnswers(threeAnswers, answerButtons)[1].isCorrectAnswer()).toBe(true);
    });
    test('mark wrong answer', () => {
        expect(markAnswers(threeAnswers, answerButtons)[0].isCorrectAnswer()).toBe(false);
    });
    test('mark correct and wrong answers', () => {
        expect(markAnswers(threeAnswers, answerButtons)[0].isCorrectAnswer()).toBe(false);
        expect(markAnswers(threeAnswers, answerButtons)[1].isCorrectAnswer()).toBe(true);
        expect(markAnswers(threeAnswers, answerButtons)[2].isCorrectAnswer()).toBe(false);
    });
});

describe('add proper text to buttons', () => {
    test('button has example1', () => {
        let view = createButtonsWithText(threeAnswers, generateAnswerButton)[0];
        let text = view.text();
        expect(text).toBe('Example1');
    });
    test('button has example2', () => {
        let view = createButtonsWithText(threeAnswers, generateAnswerButton)[1];
        let text = view.text();
        expect(text).toBe('Example2');
    });
});
