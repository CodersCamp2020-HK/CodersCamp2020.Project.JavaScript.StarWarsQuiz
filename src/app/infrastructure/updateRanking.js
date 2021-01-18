export function updateRanking({ name, points, difficultyLevel: category }) {
    let rankingStorage = localStorage.getItem(category);
    if (!rankingStorage) {
        let rankingObject = {
            category: category,
            scores: [
                {
                    name: name,
                    score: points,
                },
            ],
        };
        localStorage.setItem(category, JSON.stringify(rankingObject));
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

    localStorage.setItem(category, JSON.stringify(rankingData));

    return rankingData;
}
