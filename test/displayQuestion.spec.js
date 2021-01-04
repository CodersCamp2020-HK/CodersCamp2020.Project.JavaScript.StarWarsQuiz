import { DisplayQuestion } from '../src/app/components/displayQuestion';

describe('Creating question element', () => {
    describe('check if wrapper', () => {
        it('is <div>', () => {
            const displayQuestion = new DisplayQuestion('people');
            const tagName = displayQuestion.generateQuestion({ questionNumber: 1 }).tagName;
            expect(tagName).toBe('DIV');
        });
        it('has a class display-question-wrapper', () => {
            const displayQuestion = new DisplayQuestion('starships');
            const question = displayQuestion.generateQuestion(1);
            expect(question.className).toBe('display-question-wrapper');
        });
    });
    describe('check if question', () => {
        it('has message for characters', () => {
            const displayQuestion = new DisplayQuestion('people');
            const div = displayQuestion.generateQuestion({ questionNumber: 1 });
            const p = div.querySelector('.display-question-text');
            expect(p.textContent).toBe('1. Who is this character?');
        });
        it('has message for vehicles', () => {
            const displayQuestion = new DisplayQuestion('vehicles');
            const div = displayQuestion.generateQuestion({ questionNumber: 1 });
            const p = div.querySelector('.display-question-text');
            expect(p.textContent).toBe('1. What is this vehicle?');
        });
        it('has message for starships', () => {
            const displayQuestion = new DisplayQuestion('starships');
            const div = displayQuestion.generateQuestion({ questionNumber: 1 });
            const p = div.querySelector('.display-question-text');
            expect(p.textContent).toBe('1. What is this starship?');
        });
        it('throws error for wrong category', () => {
            expect(() => {
                const displayQuestion = new DisplayQuestion('Darth Vader');
                displayQuestion.generateQuestion({ questionNumber: 90 });
            }).toThrow('Category should be people, vehicles or starships');
        });
        it('numbers change properly', () => {
            const displayQuestion = new DisplayQuestion('people');
            const div = displayQuestion.generateQuestion({ questionNumber: 7 });
            const p = div.querySelector('.display-question-text');
            expect(p.textContent[0]).toBe('7');
        });
    });
});
