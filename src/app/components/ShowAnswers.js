const showAnswers = (views) => {
    let containerWithButtons = document.createElement('div');
    containerWithButtons.classList.add('answers-container');
    views.forEach((view) => {
        containerWithButtons.appendChild(view.element);
    });

    return {
        element: containerWithButtons,
        views: views,
    };
};

export { showAnswers };
