import { QuizDataController } from './infrastructure/QuizDataController';

export const App = () => {
    QuizDataController.createController('people').then((controller) => {
        console.log(controller.answers);
        console.log(controller.category);
    });
};
