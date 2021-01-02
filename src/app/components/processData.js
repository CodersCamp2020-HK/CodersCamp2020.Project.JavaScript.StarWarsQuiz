import { Question } from './question';

class PrepareData {
    static async preprocessData(jsonData) {
        const regexForEndpoint = /\d+\/$/;
        const dataQuestions = [];

        for (const objectsArray of jsonData) {
            for (const singleObject of objectsArray.results) {
                const name = singleObject.name;
                const indexEndpoint = singleObject.url.match(regexForEndpoint)[0].toString();
                const index = indexEndpoint.slice(0, -1);
                dataQuestions.push(new Question(name, index));
            }
        }
        return dataQuestions;
    }
}

export { PrepareData };
