// import {} from '';

const pictureClassName = 'picture-question';

const generatePictureQuestion = (questionCategory = 'people', pictureNumber = 1) => {
    const picture = document.createElement('img');
    picture.src = `/static/assets/img/modes/${questionCategory}/${pictureNumber}.jpg`;
    picture.className = pictureClassName;
    return picture;
};

export { generatePictureQuestion, pictureClassName };
