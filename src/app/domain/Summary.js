import { generateRanking } from '../components/RankingView';
import { generatePlayAgainButton } from '../components/generatePlayAgainButton';
import { logoPicture } from '../components/logo';
import { GameOver } from '../components/GameOver';
import { generateReturnButton } from '../components/generateReturnButton';
import { ComputerScore } from '../components/ComputerScore';
import { computerScore } from '../infrastructure/computerScore';
import { updateRanking } from '../infrastructure/updateRanking';
import { viewScore } from '../components/viewScore';

export class Summary {
    constructor(name, points, level, numberOfQuestion, correctAnswers, onReturn, hereWeGoAgain) {
        this.playAgainBtn = generatePlayAgainButton({ text: 'Play again', onClick: hereWeGoAgain });
        this.logo = logoPicture();
        this.returnBtn = generateReturnButton({ text: 'Return', onClick: onReturn });
        this.gameOver = new GameOver('game over');
        this.summaryDiv = document.createElement('div');
        this.summaryDiv.classList.add('summary-container');
        this.rankingData = updateRanking({ name, points, difficultyLevel: level });
        this.ranking = generateRanking({
            rankingObject: this.rankingData,
            rankingName: 'ranking',
            currentPlayerName: name,
        });
        this.opponent = ComputerScore(computerScore(level, numberOfQuestion), 'The opponent');
        this.score = viewScore({ correctAnswers: correctAnswers, points: points });
    }

    main(seconds) {
        this.p = document.createElement('p');
        this.p.className = 'padawan-text';
        this.p.textContent = `The force is strong in you young Padawan! During ${seconds} seconds:`;

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
