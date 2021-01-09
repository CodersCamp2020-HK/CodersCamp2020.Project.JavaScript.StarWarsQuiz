import { pointsCounter } from '../src/app/components/PointsCounter';
import { queries } from '@testing-library/dom';

describe('Given: PointsCounter object named pointsCounter', () => {
    test.each([
        [6, '6'],
        [101, '101'],
    ])(
        `When: Invokes on it method createPointsCounter with (pkt = %s)
         Then: It should creates div element with (text = 'Points %s')`,
        async (param, expected) => {
            const element = pointsCounter(param);
            expect(element.tagName).toEqual('DIV');
            await queries.findByText(element, 'Points');
            await queries.findByText(element, expected);
        },
    );
});
