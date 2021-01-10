export const convertSeconds = (sec) => {
    let minutes = Math.floor(sec / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = sec % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return { minutes, seconds };
};

export const generateTimer = ({ timeleftInSeconds, onTimerEnd }) => {
    if (timeleftInSeconds < 0) throw new Error('Time can not be negative!');
    const timerDiv = document.createElement('div');
    timerDiv.classList.add('timer-to-zero');
    const { minutes, seconds } = convertSeconds(timeleftInSeconds);
    timerDiv.appendChild(document.createTextNode(`${minutes}:${seconds}`));

    if (timeleftInSeconds == 0) {
        onTimerEnd();
        return timerDiv;
    }

    const interval = setInterval(() => {
        timeleftInSeconds--;
        const { minutes, seconds } = convertSeconds(timeleftInSeconds);
        timerDiv.textContent = `${minutes}:${seconds}`;
        if (timeleftInSeconds == 0) {
            clearInterval(interval);
            return onTimerEnd();
        }
    }, 1000);

    return timerDiv;
};
