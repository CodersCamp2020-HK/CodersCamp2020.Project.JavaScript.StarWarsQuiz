import _ from 'lodash';

class RandData {
    async randData(categoryArr, num) {
        console.log(categoryArr);
        const questionsArr = _.sampleSize(categoryArr, num);
        const diffArr = categoryArr.filter((item) => !questionsArr.some((x) => x.index === item.index));
        const answers = [];
        for (let i = 0; i < num; i++) {
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
        return output;
    }
}
export { RandData };
