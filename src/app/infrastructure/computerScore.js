export const computerScore = (level, numberOfQuestions) => {
    if (numberOfQuestions > 0) {
        let score;
        let randomNumber;
        switch (level) {
            case 1:
                randomNumber = Math.floor(Math.random() * 34); //0-33
                score = Math.floor(numberOfQuestions * (randomNumber / 100)) * 10;
                break;
            case 2:
                randomNumber = 34 + Math.floor(Math.random() * 33); //34-66
                score = Math.floor(numberOfQuestions * (randomNumber / 100)) * 10;
                break;
            case 3:
                randomNumber = 67 + Math.floor(Math.random() * 34); //67-100
                score = Math.floor(numberOfQuestions * (randomNumber / 100)) * 10;
                break;
            default:
                throw new Error('Argument level should to be a number 1,2 or 3');
        }
        return score;
    } else {
        throw new Error('NumberOfQuestions should to be greater than 0');
    }
};
