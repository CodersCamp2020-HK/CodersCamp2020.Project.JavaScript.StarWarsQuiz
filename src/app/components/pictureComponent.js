// import {} from '';

let generatePictureQuestion = function (questionCategory = 'people', pictureNumber = 1) {
    const picture = document.createElement('img');
    picture.src = `./src/static/assets/img/modes/${questionCategory}/${pictureNumber}.jpg`;
    picture.className = 'picture-question';
    return picture;
};

export { generatePictureQuestion };
