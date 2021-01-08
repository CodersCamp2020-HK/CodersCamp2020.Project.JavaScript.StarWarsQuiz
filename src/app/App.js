import { createController } from './infrastructure/createController';

export const App = () => {
    createController({ category: 'starships' }).then((controller) => {
        console.log(controller.answers);
        console.log(controller.category);
    });
};
