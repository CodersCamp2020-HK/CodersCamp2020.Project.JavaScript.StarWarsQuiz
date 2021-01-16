const getRandomNumberGeneratorByLevel = {
    1: () => Math.floor(Math.random() * 34), //0-33
    2: () => 34 + Math.floor(Math.random() * 33), //34-66
    3: () => 67 + Math.floor(Math.random() * 34), //67-100
};

export const computerScore = (level, numberOfQuestions) => {
    if (numberOfQuestions <= 0) throw new Error('NumberOfQuestions should to be greater than 0');
    if (!(level in getRandomNumberGeneratorByLevel)) throw new Error('Argument level should to be a number 1,2 or 3');
    const randomNumber = getRandomNumberGeneratorByLevel[level]();
    return Math.floor(numberOfQuestions * (randomNumber / 100)) * 5;
};
