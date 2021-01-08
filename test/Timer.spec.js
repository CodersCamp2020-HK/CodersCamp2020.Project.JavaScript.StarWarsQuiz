import { generateTimer, convertSeconds } from '../src/app/components/Timer';

describe('Checking Timer', () => {
    it('is wrapped in <div>', () => {
        const timer = generateTimer({ timeleft: 100, onTimerEnd: () => true });
        const tagName = timer.tagName;
        expect(tagName).toBe('DIV');
    });
    it('60 seconds is 1 minute', () => {
        const { minutes, seconds } = convertSeconds(60);
        const time = minutes + ':' + seconds;
        expect(time).toBe('01:00');
    });
    it('2399 is 39 minutes', () => {
        const { minutes, seconds } = convertSeconds(2399);
        const time = minutes + ':' + seconds;
        expect(time).toBe('39:59');
    });
    it('returns callback if time ends', () => {
        generateTimer({
            timeleft: 0,
            onTimerEnd: () => {
                const newSpan = document.createElement('span');
                newSpan.className = 'just-created';
                document.body.appendChild(newSpan);
            },
        });
        const span = document.querySelector('.just-created');
        const spanClass = span.className;
        expect(spanClass).toBe('just-created');
    });
});
