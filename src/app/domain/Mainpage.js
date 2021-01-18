import { Button } from '../components/Button';
import { logoPicture } from '../components/logo';
import { buttonCreated } from '../components/CategoriesButtons';
import { InputName } from '../components/UserName';
import { generateRanking } from '../components/RankingView';
import { generateLeaderBoard } from '../components/LeaderBoardView';
import {
    generateRankingButton,
    generateRulesButton,
    generateStartButton,
    generateMenuButton,
} from '../components/RulesRankingStart';
import { generateRulesModal } from '../components/Rules';

export class Mainpage {
    constructor() {
        this.logo = logoPicture();
        this.userInput = InputName();
        this.categoriesBtns = buttonCreated('categories');
        this.levelsBtns = buttonCreated('levels');
        this.categoryLevelWrapper = document.createElement('div');
        this.categoryLevelWrapper.className = 'category-level-wrapper';
        for (const element of this.categoriesBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        for (const element of this.levelsBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        this.rulesModal = generateRulesModal();
        this.rankingDiv = this.ranking();
        this.mainpageDiv = document.createElement('div');
        this.rankingDiv.style.display = 'none';
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

    generateRankingLevelButton(buttonText, currentSelected, leaderBoard) {
        const button = new Button(this.titleCase(buttonText), () => {
            if (currentSelected) {
                currentSelected.element.classList.remove('button-selected');
            }
            currentSelected = button;
            currentSelected.element.classList.add('button-selected');
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
        let currentSelected = null;
        let button1 = this.generateRankingLevelButton('padawan', currentSelected, leaderBoard);
        let button2 = this.generateRankingLevelButton('jedi knight', currentSelected, leaderBoard);
        let button3 = this.generateRankingLevelButton('jedi master', currentSelected, leaderBoard);
        let categoriesButtons = [button1, button2, button3];
        leaderBoard.addLevelsButtons(categoriesButtons);
        return leaderBoard.element;
    }

    generateMainpage({ onClickStart }) {
        this.mainpageDiv = document.createElement('div');
        this.mainpageDiv.className = 'mainpage-wrapper';
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
