export const deathStar = () => {
    const deathStarDiv = document.createElement('div');
    const image = document.createElement('img');

    deathStarDiv.className = 'deathStarDiv';
    image.className = 'deathStar';
    image.src = '../static/assets/img/modes/deathStar/deathstar.png';
    deathStarDiv.appendChild(image);
    document.body.appendChild(deathStarDiv);
};
