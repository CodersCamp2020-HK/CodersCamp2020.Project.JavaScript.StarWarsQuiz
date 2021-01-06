const convertSeconds = (sec) => {
    let minutes = Math.floor(sec / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = sec % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return { minutes, seconds };
};

export const generateTimer = ({ timeleft }) => {
    const timerDiv = document.createElement('div');
    const { minutes, seconds } = convertSeconds(timeleft);
    timerDiv.appendChild(document.createTextNode(`${minutes}:${seconds}`));

    setInterval(() => {
        timeleft--;
        const { minutes, seconds } = convertSeconds(timeleft);
        timerDiv.textContent = `${minutes}:${seconds}`;
        if (timeleft == 0) {
            console.log('skończone');
        }
    }, 1000);

    return timerDiv;
};
