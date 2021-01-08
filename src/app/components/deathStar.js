export const deathStar = ({ sec }) => {
    const deathStarDiv = document.createElement('div');
    const image = document.createElement('img');
    console.log(sec);

    deathStarDiv.className = 'deathStarDiv';
    image.className = 'deathStar';
    image.src = '../static/assets/img/modes/deathStar/deathstar.png';
    deathStarDiv.appendChild(image);
    const animation = deathStarDiv.animate(
        [
            { clipPath: 'polygon(50% 0%, 50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0)' },
            { clipPath: 'polygon(50% 0%, 50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)' },
            { clipPath: 'polygon(50% 0%, 50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)' },
            { clipPath: 'polygon(50% 0%, 50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)' },
            { clipPath: 'polygon(50% 0%, 50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)' },
            { clipPath: 'polygon(50% 0%, 50% 50%, 50% 0, 50% 0, 50% 0, 50% 0, 50% 0)' },
        ],
        {
            duration: sec * 1000,
        },
    );
    return { animation, element: deathStarDiv };
};
