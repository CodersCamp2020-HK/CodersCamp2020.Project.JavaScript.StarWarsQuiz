import { DisplayQuestion } from '../src/app/components/displayQuestion';

describe('Creating question element', () => {
    describe('check if wrapper', () => {
        it('is <div>', () => {
            const displayQuestion = new DisplayQuestion();
            expect(displayQuestion.generateQuestion().tagName).toBe('DIV');
        });
        it('has a class display-question-wrapper', () => {
            const displayQuestion = new DisplayQuestion();
            const question = displayQuestion.generateQuestion();
            expect(question.className).toBe('display-question-wrapper');
        });
    });
    describe('check if question', () => {
        it('has message for characters', () => {
            const displayQuestion = new DisplayQuestion();
            const div = displayQuestion.generateQuestion('people');
            const p = div.querySelector('.display-question-text');
            expect(p.textContent).toBe('1. Who is this character?');
        });
        it('has message for vehicles', () => {
            const displayQuestion = new DisplayQuestion();
            const div = displayQuestion.generateQuestion('vehicles');
            const p = div.querySelector('.display-question-text');
            expect(p.textContent).toBe('1. What is this vehicle?');
        });
        it('has message for starships', () => {
            const displayQuestion = new DisplayQuestion();
            const div = displayQuestion.generateQuestion('starships');
            const p = div.querySelector('.display-question-text');
            expect(p.textContent).toBe('1. What is this starship?');
        });
        it('has default message', () => {
            const displayQuestion = new DisplayQuestion();
            const div = displayQuestion.generateQuestion();
            const p = div.querySelector('.display-question-text');
            expect(p.textContent).toBe('1. Who/What is this character/vehicle/starship?');
        });
    });
});
