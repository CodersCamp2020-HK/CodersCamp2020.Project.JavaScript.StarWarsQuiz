import {} from '';

const generatePicture = (questionCategory = 'people', pictureNumber = 1) => {
    const picture = document.createElement('img');
    picture.src = `./src/static/assets/img/modes/${questionCategory}/${pictureNumber}.jpg`;
};

export { generatePicture };
