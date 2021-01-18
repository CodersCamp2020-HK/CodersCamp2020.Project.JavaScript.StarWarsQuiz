import { generateRanking } from './RankingView';
import { generatePlayAgainButton } from './generatePlayAgainButton';
import { logoPicture } from './logo';
import { GameOver } from './GameOver';
import { generateReturnButton } from './generateReturnButton';
import { ComputerScore } from './ComputerScore';
import { computerScore } from '../infrastructure/computerScore';
import { updateRanking } from '../infrastructure/updateRanking';
import { viewScore } from './viewScore';

export class Summary {
    constructor(name, points, level, numberOfQuestion, correctAnswers, onReturn, hereWeGoAgain) {
        this.playAgainBtn = generatePlayAgainButton({ text: 'Play again', onClick: hereWeGoAgain });
        this.logo = logoPicture();
        this.returnBtn = generateReturnButton({ text: 'Return', onClick: onReturn });
        this.gameOver = new GameOver('game over');
        this.rankingData = updateRanking({ name, points, difficultyLevel: level });
        this.ranking = generateRanking({
            rankingObject: this.rankingData,
            rankingName: 'ranking',
            currentPlayerName: name,
        });
        this.opponent = ComputerScore(computerScore(level, numberOfQuestion), 'The opponent');
        this.score = viewScore({ correctAnswers: correctAnswers, points: points });
        this.summaryDiv = document.createElement('div');
    }

    generateSummary(seconds) {
        this.p = document.createElement('p');
        this.p.className = 'padawan-text';
        this.p.textContent = `The force is strong in you young Padawan! During ${seconds} seconds :`;

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'result-wrapper';

        this.wrapper.append(this.p, this.score, this.opponent, this.ranking.element);

        this.summaryDiv.append(
            this.logo,
            this.wrapper,
            this.gameOver.elemnt,
            this.returnBtn.element,
            this.playAgainBtn.element,
        );
    }
}
