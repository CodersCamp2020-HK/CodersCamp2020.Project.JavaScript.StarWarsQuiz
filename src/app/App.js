import { createController } from './infrastructure/createController';

export const App = () => {
    createController({ category: 'starships', numberOfQuestions: 10 }).then((controller) => {
        console.log(controller.answers);
        console.log(controller.category);
        for (let answer of controller.answers) {
            console.log(answer);
        }
    });
};
