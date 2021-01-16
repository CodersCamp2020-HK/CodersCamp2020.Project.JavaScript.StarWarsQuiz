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
        for (const element of this.categoriesBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        for (const element of this.levelsBtns.elements) {
            this.categoryLevelWrapper.appendChild(element);
        }
        this.rulesModal = generateRulesModal();
        this.rankingDiv = this.ranking();
        this.rankingDiv.style.display = 'none';
        this.mainpageDiv = document.createElement('div');
    }

    ranking() {
        let leaderBoard = generateLeaderBoard();
        let currentSelected = null;
        let button1 = new Button('easy', () => {
            if (currentSelected) {
                currentSelected.element.classList.remove('button-selected');
            }
            currentSelected = button1;
            currentSelected.element.classList.add('button-selected');
            let rankingObject = {
                name: 'easy',
                scores: [
                    { name: 'asd', score: 12 },
                    { name: 'zxc', score: 10 },
                ],
            };
            let generatedRanking = generateRanking({
                rankingObject: rankingObject,
                rankingName: 'easy',
                currentPlayerName: 'asd',
            });
            leaderBoard.selectRanking(generatedRanking);
        });
        let button2 = new Button('normal', () => {
            if (currentSelected) {
                currentSelected.element.classList.remove('button-selected');
            }
            currentSelected = button2;
            currentSelected.element.classList.add('button-selected');
            let rankingObject = {
                name: 'normal',
                scores: [
                    { name: 'bcc', score: 35 },
                    { name: 'nbn', score: 9 },
                ],
            };
            let generatedRanking = generateRanking({
                rankingObject: rankingObject,
                rankingName: 'normal',
                currentPlayerName: 'bcc',
            });
            leaderBoard.selectRanking(generatedRanking);
        });
        let button3 = new Button('hard', () => {
            if (currentSelected) {
                currentSelected.element.classList.remove('button-selected');
            }
            currentSelected = button3;
            currentSelected.element.classList.add('button-selected');
            let rankingObject = {
                name: 'hard',
                scores: [
                    { name: 'nbb', score: 6 },
                    { name: 'uio', score: 2 },
                ],
            };
            let generatedRanking = generateRanking({
                rankingObject: rankingObject,
                rankingName: 'hard',
                currentPlayerName: 'nbb',
            });
            leaderBoard.selectRanking(generatedRanking);
        });
        let categoriesButtons = [button1, button2, button3];
        leaderBoard.addLevelsButtons(categoriesButtons);
        return leaderBoard.element;
    }

    main({ onClickStart }) {
        this.menuBtn = generateMenuButton({
            onClick: () => {
                this.rankingDiv.style.display = 'none';
                this.menuBtn.replaceWith(this.rankingBtn);
            },
        });
        this.rankingBtn = generateRankingButton({
            onClick: () => {
                this.rankingDiv.style.display = 'block';
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
