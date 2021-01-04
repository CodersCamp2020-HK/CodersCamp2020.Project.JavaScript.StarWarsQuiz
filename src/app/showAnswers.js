const markAnswers = (answers, views) => {
    views = views.map((el, index) => {
        answers[index].isCorrect ? el.markAsCorrect() : el.markAsWrong();
        return el;
    });
    return views;
};

const createButtonsWithText = (answers, generateButton) => {
    let views = answers.map((answer) => {
        let view = generateButton({ text: answer.text });
        return view;
    });
    return views;
};

const showAnswers = (answers, generateButton) => {
    let views = createButtonsWithText(answers, generateButton);
    views = markAnswers(answers, views);

    let containerWithButtons = document.createElement('div');
    views.forEach((view) => {
        containerWithButtons.appendChild(view.element);
    });

    return {
        element: containerWithButtons,
        views: views,
    };
};

export { showAnswers, createButtonsWithText, markAnswers };
