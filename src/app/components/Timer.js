export const convertSeconds = (sec) => {
    const minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return { minutes, seconds };
};

export const generateTimer = ({ timeleft, onTimerEnd }) => {
    if (timeleft < 0) throw new Error('Time can not be negative!');
    if (timeleft == 0) return onTimerEnd();
    const timerDiv = document.createElement('div');
    timerDiv.classList.add('timer-to-zero');
    const { minutes, seconds } = convertSeconds(timeleft);
    timerDiv.appendChild(document.createTextNode(`${minutes}M ${seconds}S`));

    const interval = setInterval(() => {
        timeleft--;
        const { minutes, seconds } = convertSeconds(timeleft);
        timerDiv.textContent = `${minutes}:${seconds}`;
        if (timeleft == 0) {
            clearInterval(interval);
            return onTimerEnd();
        }
    }, 1000);

    return timerDiv;
};
