import { Button } from './Button';
import { generateRanking } from './RankingView';

export function generateLeaderBoard() {
    let leaderBoardDiv = document.createElement('div');
    let rankingDiv = document.createElement('div');

    leaderBoardDiv.appendChild(rankingDiv);

    let view = {
        element: leaderBoardDiv,
        buttons: null,
        selectedRanking: rankingDiv,
        selectRanking: (rankingView) => {
            // view.selectedRanking.innerHTML = rankingView.element.innerHTML;
            // view.selectedRanking.classList = rankingView.element.classList;

            let rankingClone = rankingView.element.cloneNode(true);
            view.selectedRanking.replaceWith(rankingClone);
            view.selectedRanking = rankingClone;
        },
        addLevelsButtons: (buttonsViews) => {
            let categoriesDiv = document.createElement('div');
            let categoriesName = document.createElement('span');
            categoriesName.textContent = 'CATEGORIES';
            categoriesDiv.appendChild(categoriesName);

            buttonsViews.forEach((difficultLevelButton) => {
                categoriesDiv.appendChild(difficultLevelButton.element);
            });

            view.buttons = buttonsViews;

            leaderBoardDiv.insertBefore(categoriesDiv, rankingDiv);
        },
        // displaySelectedRanking: () => {
        //     view.selectedRanking.innerHTML = rankingDiv.innerHTML;
        // },
    };
    return view;
}
