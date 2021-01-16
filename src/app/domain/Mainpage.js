import { Button } from '../components/Button';
import { logoPicture } from '../components/logo';
import { buttonCreated } from '../components/CategoriesButtons';
import { InputName } from '../components/UserName';
import { generateRanking } from '../components/RankingView';
import { generateLeaderBoard } from '../components/LeaderBoardView';
import { generateRankingButton, generateRulesButton, generateStartButton } from '../components/RulesRankingStart';
import { generateRulesModal } from '../components/Rules';

export class Mainpage {
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
    main() {
        const logo = logoPicture();
        const userInput = InputName();
        const categoriesBtns = buttonCreated('categories');
        const levelsBtns = buttonCreated('levels');
        const categoryLevelWrapper = document.createElement('div');
        for (const element of categoriesBtns.elements) {
            categoryLevelWrapper.appendChild(element);
        }
        for (const element of levelsBtns.elements) {
            categoryLevelWrapper.appendChild(element);
        }
        const rulesModal = generateRulesModal();
        const rankingBtn = generateRankingButton({ onClick: () => console.log('Ranking click') });
        const rulesBtn = generateRulesButton({ modalDiv: rulesModal });
        const startBtn = generateStartButton({ onClick: () => console.log('Start click') });
        const mainpageDiv = document.createElement('div');
        const rankingDiv = this.ranking();

        mainpageDiv.append(
            logo,
            userInput,
            categoryLevelWrapper,
            rankingBtn,
            rulesBtn,
            startBtn,
            rulesModal,
            rankingDiv,
        );

        return mainpageDiv;
    }
}
