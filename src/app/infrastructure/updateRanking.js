export function updateRanking({ name, points, difficultyLevel }) {
    let rankingStorage = localStorage.getItem(difficultyLevel);
    if (!rankingStorage) {
        let rankingObject = {
            difficultyLevel: difficultyLevel,
            scores: [
                {
                    name: name,
                    score: points,
                },
            ],
        };
        localStorage.setItem(difficultyLevel, JSON.stringify(rankingObject));
        return rankingObject;
    }

    let rankingData = JSON.parse(rankingStorage);
    let isPlayerInRanking = rankingData.scores.some((player) => {
        return player.name == name;
    });
    if (isPlayerInRanking) {
        let currentPlayerIndex = rankingData.scores.findIndex((player) => {
            return player.name == name;
        });
        if (rankingData.scores[currentPlayerIndex].score <= points) {
            rankingData.scores[currentPlayerIndex].score = points;
        }
    } else {
        rankingData.scores.push({ name: name, score: points });
    }

    rankingData.scores.sort((player1, player2) => {
        return player2.score - player1.score;
    });

    localStorage.setItem(difficultyLevel, JSON.stringify(rankingData));

    console.log(rankingData.scores);
    return rankingData;
}
