import { generateRulesButton, generateRulesModal } from '../src/app/components/Rules';
import { queries } from '@testing-library/dom';

describe('Test generateRulesButton', () => {
    const modal = document.createElement('dialog');
    const button = generateRulesButton({ text: 'RULES', modalDiv: modal });
    describe(`Given: button created with parameters ({ text: ${button.textContent}, modalDiv: modal })`, () => {
        describe('When: button is created', () => {
            it(`Then: it has text = ${button.textContent}`, async () => {
                await queries.findByText(button, 'RULES');
            });
        });
        describe('When: button is clicked', () => {
            it('Then: modal is opened', () => {});
        });
    });
});
