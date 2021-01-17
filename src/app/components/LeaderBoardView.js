export function generateLeaderBoard() {
    let leaderBoardDiv = document.createElement('div');
    leaderBoardDiv.classList.add('leaderboard-container');
    let rankingDiv = document.createElement('div');

    leaderBoardDiv.appendChild(rankingDiv);

    let view = {
        element: leaderBoardDiv,
        buttons: null,
        selectedRanking: rankingDiv,
        selectRanking: (rankingView) => {
            let rankingClone = rankingView.element.cloneNode(true);
            view.selectedRanking.replaceWith(rankingClone);
            view.selectedRanking = rankingClone;
        },
        addLevelsButtons: (buttonsViews) => {
            let categoriesDiv = document.createElement('div');
            categoriesDiv.classList.add('categories-container');
            let categoriesName = document.createElement('span');
            categoriesName.classList.add('categories-name');
            categoriesName.textContent = 'categories';
            categoriesDiv.appendChild(categoriesName);

            buttonsViews.forEach((difficultLevelButton) => {
                categoriesDiv.appendChild(difficultLevelButton.element);
            });

            view.buttons = buttonsViews;

            leaderBoardDiv.insertBefore(categoriesDiv, rankingDiv);
        },
    };
    return view;
}
