import { generatePictureQuestion, pictureClassName } from '../src/app/components/pictureComponent';

describe('generatePictureQuestion', () => {
    const questionCategory = 'people';
    const pictureNumber = 1;
    const element = generatePictureQuestion(questionCategory, pictureNumber);

    it('should create IMG element', () => {
        expect(element.tagName).toEqual('IMG');
    });

    it('should assign correct class name', () => {
        expect(element.className).toEqual(pictureClassName);
    });

    it('should set correct src attribute', () => {
        const expectedSrc = `./static/assets/img/modes/${questionCategory}/${pictureNumber}.jpg`;
        expect(element.getAttribute('src')).toEqual(expectedSrc);
    });
});
