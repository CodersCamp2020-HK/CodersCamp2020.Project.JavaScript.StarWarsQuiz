export function ComputerScore(score) {
    if (score >= 0) {
        const wrapperElement = document.createElement('div');
        const descElement = document.createElement('div');
        const scoreElement = document.createElement('div');
        const pointsWordElement = document.createElement('div');
        wrapperElement.className = 'computerScore_wrapper';
        descElement.className = 'computerScore_desc';
        scoreElement.className = 'computerScore_score';
        pointsWordElement.className = 'computerScore_pointsWord';

        const getData = async () => {
            const randomPage = Math.floor(Math.random() * 8) + 1;
            const randomPerson = Math.floor(Math.random() * 11);
            await fetch(`https://swapi.dev/api/people/?page=${randomPage}`)
                .then((res) => res.json())
                .then((data) =>
                    descElement.appendChild(
                        document.createTextNode(`${data.results[randomPerson].name} gained in total:`),
                    ),
                );
        };
        getData();

        scoreElement.appendChild(document.createTextNode(`${score}`));
        pointsWordElement.appendChild(document.createTextNode(`Points`));
        wrapperElement.appendChild(descElement);
        wrapperElement.appendChild(scoreElement);
        wrapperElement.appendChild(pointsWordElement);
        return wrapperElement;
    } else {
        throw new Error('Argument score should be grater or equal of 0');
    }
}
