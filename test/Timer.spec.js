import { generateTimer } from '../src/app/components/Timer';
import { queries } from '@testing-library/dom';

jest.useFakeTimers();

const advanceTime = (seconds) => {
    beforeAll(() => {
        jest.advanceTimersByTime(seconds * 1000);
    });
};

const setuptSut = (timeleft) => {
    const sut = { timer: null, onTimerEndMock: null };
    beforeAll(() => {
        sut.onTimerEndMock = jest.fn(() => {});
        sut.timer = generateTimer({ timeleft, onTimerEnd: sut.onTimerEndMock });
    });
    afterAll(() => {
        jest.clearAllTimers();
        jest.clearAllMocks();
    });
    return sut;
};

describe('Test generateTimer', () => {
    const anyTimeleftSeconds = 4 * 60 + 30;
    describe(`Given: timer generated with parameters (timeleft = ${anyTimeleftSeconds}s)`, () => {
        const sut = setuptSut(anyTimeleftSeconds);

        describe(`When: timer have not started yet`, () => {
            const expectedText = '04:30';
            test('Then: timer should be a div element', () => {
                expect(sut.timer.tagName).toEqual('DIV');
            });
            test(`Then: timer should display '${expectedText}'`, async () => {
                await queries.findByText(sut.timer, expectedText);
            });
            test(`Then: timer should start interval`, async () => {
                expect(setInterval).toBeCalledTimes(1);
            });
        });

        const anyElapsedTime1 = 2 * 60 + 12;
        describe(`When: time was advanced by ${anyElapsedTime1}s`, () => {
            const expectedText = '02:18';

            advanceTime(anyElapsedTime1);
            test(`Then: timer should display '${expectedText}'`, async () => {
                await queries.findByText(sut.timer, expectedText);
            });
            test('Then: onTimerEnd should not be called', () => {
                expect(sut.onTimerEndMock).not.toBeCalled();
            });
        });

        const anyElapsedTime2 = 2 * 60 + 7;
        describe(`When: time was advanced second time by ${anyElapsedTime2}s`, () => {
            const expectedText = '00:11';

            advanceTime(anyElapsedTime2);
            test(`Then: timer should display '${expectedText}'`, async () => {
                await queries.findByText(sut.timer, expectedText);
            });
            test('Then: onTimerEnd should not be called', () => {
                expect(sut.onTimerEndMock).not.toBeCalled();
            });
        });

        const restTime = anyTimeleftSeconds - anyElapsedTime1 - anyElapsedTime2;
        const zeroTimeText = '00:00';
        describe(`When: timer was expired by advancing the time by ${restTime}s`, () => {
            advanceTime(restTime);
            test(`Then: timer should display '${zeroTimeText}'`, async () => {
                await queries.findByText(sut.timer, zeroTimeText);
            });
            test('Then: onTimerEnd should be invoked only once', () => {
                expect(sut.onTimerEndMock).toBeCalledTimes(1);
            });
            test(`Then: timer should stop interval`, async () => {
                expect(setInterval).toBeCalledTimes(1);
                expect(clearInterval).toBeCalledTimes(1);
            });
        });
    });

    const anyNegativeTime = -1;
    describe(`When: call generateTimer with (negative time = ${anyNegativeTime})`, () => {
        const errorMessage = 'Time can not be negative!';
        test(`Then: generateTimer should throw Error with message '${errorMessage}'`, () => {
            expect(() => generateTimer({ timeleft: anyNegativeTime })).toThrow(errorMessage);
        });
    });

    const zeroTimeleft = 0;
    describe(`Given: timer generated with parameters (timeleft = ${zeroTimeleft}s)`, () => {
        const sut = setuptSut(zeroTimeleft);
        test('Then: timer should not be created', () => {
            expect(sut.timer).toBeUndefined();
        });
        test(`Then: timer should not start interval`, () => {
            expect(setInterval).not.toBeCalled();
        });
        test(`Then: onTimerEnd should be invoked once`, () => {
            expect(sut.onTimerEndMock).toBeCalledTimes(1);
        });
    });
});
