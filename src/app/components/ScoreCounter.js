export function scoreCounter(numofCorrectAns, timeToEndInSeconds) {
    return timeToEndInSeconds > 0 ? numofCorrectAns * 10 + timeToEndInSeconds : numofCorrectAns * 10;
}
