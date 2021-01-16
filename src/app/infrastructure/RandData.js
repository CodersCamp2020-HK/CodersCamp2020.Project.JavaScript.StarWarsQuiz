import _ from 'lodash';

class RandData {
    async randData(categoryArr, num) {
        const questionsArr = _.sampleSize(categoryArr, num);
        const answers = [];
        for (let i = 0; i < num; i++) {
            const diffArr = categoryArr.filter((item) => item.index !== questionsArr[i]);
            const wrongAwnswers = _.sampleSize(diffArr, 3);
            const answer = [
                { ...questionsArr[i], correct: true },
                wrongAwnswers[0],
                wrongAwnswers[1],
                wrongAwnswers[2],
            ];
            answers.push(_.shuffle(answer));
        }
        const output = {
            questionsArr,
            answers,
        };
        console.log(output);
        return output;
    }
}
export { RandData };
