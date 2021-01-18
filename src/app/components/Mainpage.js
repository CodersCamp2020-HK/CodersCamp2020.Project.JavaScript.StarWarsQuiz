import { Button } from './Button';
import { logoPicture } from './logo';
import { buttonCreated } from './CategoriesButtons';
import { InputName } from './UserName';
import { generateRanking } from './RankingView';
import { generateLeaderBoard } from './LeaderBoardView';
import {
    generateRankingButton,
    generateRulesButton,
    generateStartButton,
    generateMenuButton,
} from './RulesRankingStart';
import { generateRulesModal } from './Rules';

export class Mainpage {
    constructor() {
        this.logo = logoPicture();
        this.userInput = InputName();
        this.categoriesBtns = buttonCreated('categories');
        this.levelsBtns = buttonCreated('levels');
        this.categoryLevelWrapper = document.createElement('div');
        this.categoryLevelWrapper.className = 'category-level-wrapper';
        this.rankingDiv = this.ranking();
        this.rankingDiv.style.display = 'none';
        for (const element of this.categoriesBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        for (const element of this.levelsBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        this.rulesModal = generateRulesModal();
        this.mainpageDiv = document.createElement('div');
    }

    replaceRankingWithCategories() {
        this.rankingDiv.style.display = 'none';
        this.categoryLevelWrapper.style.display = 'flex';
        this.categoryLevelWrapper.innerHTML = '';
        for (const element of this.categoriesBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        for (const element of this.levelsBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        this.menuBtn.replaceWith(this.rankingBtn);
    }

    replaceCategoriesWithRanking() {
        this.rankingDiv.style.gridArea = 'categories';
        this.rankingDiv.style.display = 'flex';
        this.categoryLevelWrapper.style.display = 'none';
        this.categoryLevelWrapper.innerHTML = '';
        this.rankingBtn.replaceWith(this.menuBtn);
    }

    titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    generateRankingLevelButton(buttonText, leaderBoard) {
        const button = new Button(this.titleCase(buttonText), () => {
            if (this.currentSelected) {
                this.currentSelected.element.classList.remove('button-selected');
            }
            this.currentSelected = button;
            this.currentSelected.element.classList.add('button-selected');
            let rankingObject = JSON.parse(localStorage.getItem(buttonText));
            let generatedRanking = generateRanking({
                rankingObject,
                rankingName: buttonText,
                currentPlayerName: undefined,
            });
            leaderBoard.selectRanking(generatedRanking);
        });
        return button;
    }

    ranking() {
        let leaderBoard = generateLeaderBoard();
        this.currentSelected = null;
        let button1 = this.generateRankingLevelButton('people', leaderBoard);
        let button2 = this.generateRankingLevelButton('vehicles', leaderBoard);
        let button3 = this.generateRankingLevelButton('starships', leaderBoard);
        let categoriesButtons = [button1, button2, button3];
        leaderBoard.addLevelsButtons(categoriesButtons);
        return leaderBoard.element;
    }

    generateMainpage({ onClickStart }) {
        this.mainpageDiv = document.createElement('div');
        this.mainpageDiv.className = 'mainpage-wrapper';

        if (this.currentSelected) {
            this.rankingDiv.querySelector('.button-selected').click();
        }

        this.menuBtn = generateMenuButton({
            onClick: () => {
                this.replaceRankingWithCategories();
            },
        });
        this.rankingBtn = generateRankingButton({
            onClick: () => {
                this.replaceCategoriesWithRanking();
            },
        });
        this.rulesBtn = generateRulesButton({ modalDiv: this.rulesModal });
        this.startBtn = generateStartButton({
            onClick: onClickStart,
        });

        this.replaceRankingWithCategories();

        this.mainpageDiv.append(
            this.logo,
            this.userInput,
            this.categoryLevelWrapper,
            this.rankingBtn,
            this.rulesBtn,
            this.startBtn,
            this.rulesModal,
            this.rankingDiv,
        );

        return this.mainpageDiv;
    }
}
