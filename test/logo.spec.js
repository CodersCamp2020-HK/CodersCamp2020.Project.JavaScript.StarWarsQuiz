import { logoPicture } from '../src/app/components/logo';

describe('generateLogo', () => {
    const element = logoPicture();

    it('should create IMG element', () => {
        expect(element.tagName).toEqual('IMG');
    });

    it('should assign correct class name', () => {
        expect(element.className).toEqual('Logo');
    });
});
