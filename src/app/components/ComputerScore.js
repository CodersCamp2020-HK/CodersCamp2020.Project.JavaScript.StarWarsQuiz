import '../../styles/ComputerScore'
export function ComputerScore(score, name) {
    if (score >= 0 && typeof name === 'string') {
        const wrapperElement = document.createElement('div');
        const descElement = document.createElement('div');
        const scoreElement = document.createElement('div');
        const pointsWordElement = document.createElement('div');
        wrapperElement.className = 'computerScore_wrapper';
        descElement.className = 'computerScore_desc';
        scoreElement.className = 'computerScore_score';
        pointsWordElement.className ='computerScore_pointsWord';
        descElement.appendChild(document.createTextNode(`${name} gained in total:`));
        scoreElement.appendChild(document.createTextNode(`${score}`));
        pointsWordElement.appendChild(document.createTextNode(`Points`));
        wrapperElement.appendChild(descElement);
        wrapperElement.appendChild(scoreElement);
        wrapperElement.appendChild(pointsWordElement);
        return wrapperElement;
    }
    else {
        if (score < 0) {
            throw new Error('Argument score should be grater or equal of 0');
        }
        if (typeof name !== 'string') {
            throw new Error('Argument name should to be string type');
        }
        
    }
}