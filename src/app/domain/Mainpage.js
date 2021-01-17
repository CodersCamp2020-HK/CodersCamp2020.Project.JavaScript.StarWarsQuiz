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

    ranking() {
        let leaderBoard = generateLeaderBoard();
        let currentSelected = null;
        let button1 = new Button('Padawan', () => {
            if (currentSelected) {
                currentSelected.element.classList.remove('button-selected');
            }
            currentSelected = button1;
            currentSelected.element.classList.add('button-selected');
            let rankingObject = JSON.parse(localStorage.getItem('padawan'));
            let generatedRanking = generateRanking({
                rankingObject,
                rankingName: 'padawan',
                currentPlayerName: undefined,
            });
            leaderBoard.selectRanking(generatedRanking);
        });
        let button2 = new Button('Jedi Knight', () => {
            if (currentSelected) {
                currentSelected.element.classList.remove('button-selected');
            }
            currentSelected = button2;
            currentSelected.element.classList.add('button-selected');
            let rankingObject = JSON.parse(localStorage.getItem('jedi knight'));
            let generatedRanking = generateRanking({
                rankingObject,
                rankingName: 'jedi knight',
                currentPlayerName: undefined,
            });
            leaderBoard.selectRanking(generatedRanking);
        });
        let button3 = new Button('Jedi Master', () => {
            if (currentSelected) {
                currentSelected.element.classList.remove('button-selected');
            }
            currentSelected = button3;
            currentSelected.element.classList.add('button-selected');
            let rankingObject = JSON.parse(localStorage.getItem('jedi master'));
            let generatedRanking = generateRanking({
                rankingObject,
                rankingName: 'jedi master',
                currentPlayerName: undefined,
            });
            leaderBoard.selectRanking(generatedRanking);
        });
        let categoriesButtons = [button1, button2, button3];
        leaderBoard.addLevelsButtons(categoriesButtons);
        return leaderBoard.element;
    }

    generateMainpage({ onClickStart }) {
        this.mainpageDiv = document.createElement('div');
        this.mainpageDiv.className = 'mainpage-wrapper';
        this.menuBtn = generateMenuButton({
            onClick: () => {
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
            },
        });
        this.rankingBtn = generateRankingButton({
            onClick: () => {
                this.rankingDiv.style.gridArea = 'categories';
                this.rankingDiv.style.display = 'flex';
                this.categoryLevelWrapper.style.display = 'none';
                this.categoryLevelWrapper.innerHTML = '';
                this.rankingBtn.replaceWith(this.menuBtn);
            },
        });
        this.rulesBtn = generateRulesButton({ modalDiv: this.rulesModal });
        this.startBtn = generateStartButton({
            onClick: onClickStart,
        });

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
