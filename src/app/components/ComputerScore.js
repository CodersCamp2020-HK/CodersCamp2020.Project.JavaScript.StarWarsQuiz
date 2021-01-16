export function ComputerScore(score, name) {
    if (typeof score !== 'number') throw new Error(`score should to be greater than 0`);
    if (typeof name !== 'string') throw new Error(`name should to be string type`);
    const wrapperElement = document.createElement('div');
    const descElement = document.createElement('div');
    const scoreElement = document.createElement('div');
    const pointsWordElement = document.createElement('div');
    wrapperElement.className = 'computerScore_wrapper';
    descElement.className = 'computerScore_desc';
    scoreElement.className = 'computerScore_score';
    pointsWordElement.className = 'computerScore_pointsWord';
    descElement.appendChild(document.createTextNode(`${name} gained in total:`));
    scoreElement.appendChild(document.createTextNode(`${score}`));
    pointsWordElement.appendChild(document.createTextNode(`Points`));
    wrapperElement.appendChild(descElement);
    wrapperElement.appendChild(scoreElement);
    wrapperElement.appendChild(pointsWordElement);
    return wrapperElement;
}
