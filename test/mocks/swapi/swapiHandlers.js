import { rest } from 'msw';
import peopleMockData from './peopleData.json';
import vehiclesMockData from './vehiclesData.json';
import starshipsMockData from './starshipsData.json';

const mockDataByCategory = {
    people: peopleMockData,
    vehicles: vehiclesMockData,
    starships: starshipsMockData,
};

const swapiHandlers = [
    rest.get('https://swapi.dev/api/*', (req, res, ctx) => {
        try {
            const category = req.url.pathname.match(/^\/api\/(people|vehicles|starships)\/$/)[1];
            const pageNumber = req.url.search.match(/^\?page=(\d+)$/)[1];
            const mockData = mockDataByCategory[category][pageNumber - 1];
            return res(ctx.status(200), ctx.json(mockData));
        } catch (e) {
            return res(ctx.status(404), ctx.json(e));
        }
    }),
];

export { swapiHandlers };
