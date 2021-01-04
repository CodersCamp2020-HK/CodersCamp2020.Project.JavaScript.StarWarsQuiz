export const deathStar = () => {
    const deathStarDiv = document.createElement('div');
    const image = document.createElement('img');

    deathStarDiv.className = 'deathStarDiv';
    image.className = 'deathStar';
    image.src = '../static/assets/img/modes/deathStar/deathstar.png';
    deathStarDiv.appendChild(image);
    document.body.appendChild(deathStarDiv);
    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0, 50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)';
    }, 1 * 1000);
    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0%, 50% 50%, 100% 50%, 100% 100%, 0 100%, 0 0)';
    }, 2 * 1000);

    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0%, 50% 50%, 100% 100%, 0 100%, 0 100%, 0 0)';
    }, 3 * 1000);

    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0%, 50% 50%, 50% 100%, 0 100%, 0 100%, 0 0)';
    }, 4 * 1000);

    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0%, 50% 50%, 0 100%, 50% 100%, 0 100%, 0 0)';
    }, 5 * 1000);

    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0, 50% 50%, 0 100%, 50% 100%, 0 100%, 0 0)';
    }, 6 * 1000);

    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0, 50% 50%, 0 50%, 0 50%, 0 50%, 0 0)';
    }, 7 * 1000);

    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0, 50% 50%, 0 0, 0 0, 0 0, 0 0)';
    }, 8 * 1000);

    setTimeout(function () {
        deathStarDiv.style.clipPath = 'polygon(50% 0, 50% 50%, 50% 0, 50% 0, 50% 0, 50% 0)';
    }, 9 * 1000);
    return deathStarDiv;
};
