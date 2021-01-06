import { Button } from '../src/app/components/Button';

describe('generate button', () => {
    const buttonClassName = 'button';
    const alertFunction = () => new Error('Button clicked');
    const sample = new ButtonNext('Blablabla', alertFunction);

    it('should create button element', () => {
        expect(sample.element.tagName).toEqual('BUTTON');
    });

    it('should assign correct class name', () => {
        expect(sample.element.className).toEqual(buttonClassName);
    });

    it('should call a function', () => {
        expect(sample.element.onclick).toEqual(alertFunction);
    });

    it('should disable button on deactivate', () => {
        sample.deactivate();
        expect(sample.element.disabled).toEqual(true);
    });

    it('should ensable button on activate', () => {
        sample.activate();
        expect(sample.element.disabled).toEqual(false);
    });

});
