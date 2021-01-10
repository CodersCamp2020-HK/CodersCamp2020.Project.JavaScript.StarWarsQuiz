import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';
import { setupWorker } from 'msw';
import { swapiHandlers } from '../test/mocks/swapi/swapiHandlers';

const NODE_ENV = process.env.NODE_ENV || 'development';

const main = async () => {
    if (NODE_ENV === 'development') {
        const worker = setupWorker(...swapiHandlers);
        worker.printHandlers();
        await worker.start();
    }

    App({});
};

main();
