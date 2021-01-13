export const viewScore = ({ correctAnswers, time, points }) => {
    const viewScoreDiv = document.createElement('div');
    const totalParagraph = document.createElement('p');
    const correctAnswersParagraph = document.createElement('p');
    const bonusTimeParagraph = document.createElement('p');
    const scoreParagraph = document.createElement('p');
    const wordPointsParagraph = document.createElement('p');
    viewScoreDiv.className = 'viewScoreDiv';
    scoreParagraph.className = 'fontScore';

    totalParagraph.innerHTML = `<span class="greenHighlight">you</span> gained in total:`;
    correctAnswersParagraph.innerHTML = `<span class="greenHighlight">${correctAnswers}</span> correct answers`;
    bonusTimeParagraph.innerHTML = `<span class="greenHighlight">${time}</span> bonus time points`;
    scoreParagraph.innerHTML = `<span class="greenHighlight fontHightlight">${points}</span>`;
    wordPointsParagraph.innerHTML = `<span class="greenHighlight">points</span>`;

    viewScoreDiv.appendChild(totalParagraph);
    viewScoreDiv.appendChild(correctAnswersParagraph);
    viewScoreDiv.appendChild(bonusTimeParagraph);
    viewScoreDiv.appendChild(scoreParagraph);
    viewScoreDiv.appendChild(wordPointsParagraph);

    return viewScoreDiv;
};
