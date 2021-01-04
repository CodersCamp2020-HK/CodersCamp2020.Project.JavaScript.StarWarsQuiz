import { PrepareData } from '../src/app/infrastructure/processData';
import { Question } from '../src/app/domain/question';

// const peopleData = require('./peopleData.json');
// const vehiclesData = require('./vehiclesData.json');
// const starshipsData = require('./starshipsData.json');

describe('Fetching data from API', () => {
    describe('check if people data', () => {
        it('preprocess properly', () => {
            const samplePerson1 = {
                name: 'Luke Skywalker',
                url: 'http://swapi.dev/api/people/1/',
            };
            const samplePerson2 = {
                name: 'C-3PO',
                url: 'http://swapi.dev/api/people/2/',
            };
            const samplePerson3 = {
                name: 'Chewbacca',
                url: 'http://swapi.dev/api/people/14/',
            };
            const sampleResults1 = {
                results: [samplePerson1, samplePerson2],
            };
            const sampleResults2 = {
                results: [samplePerson3],
            };
            const samplePeopleData = [sampleResults1, sampleResults2];
            const expected = [
                new Question('Luke Skywalker', '1'),
                new Question('C-3PO', '2'),
                new Question('Chewbacca', '14'),
            ];

            const preprocess = new PrepareData();
            const result = preprocess.preprocessData(samplePeopleData);
            expect(result).toStrictEqual(expected);
        });
    });
    describe('check if vehicles data', () => {
        it('preprocess properly', () => {
            const sampleVehicle1 = {
                name: 'Sand Crawler',
                url: 'http://swapi.dev/api/vehicles/4/',
            };
            const sampleVehicle2 = {
                name: 'Storm IV Twin-Pod cloud car',
                url: 'http://swapi.dev/api/vehicles/20/',
            };
            const sampleVehicle3 = {
                name: 'AT-AT',
                url: 'http://swapi.dev/api/vehicles/18/',
            };
            const sampleResults1 = {
                results: [sampleVehicle1, sampleVehicle2],
            };
            const sampleResults2 = {
                results: [sampleVehicle3],
            };
            const sampleVehiclesData = [sampleResults1, sampleResults2];
            const expected = [
                new Question('Sand Crawler', '4'),
                new Question('Storm IV Twin-Pod cloud car', '20'),
                new Question('AT-AT', '18'),
            ];
            const preprocess = new PrepareData();
            const result = preprocess.preprocessData(sampleVehiclesData);
            expect(result).toStrictEqual(expected);
        });
    });
    describe('check if starships data', () => {
        it('preprocess properly', () => {
            const sampleStarship1 = {
                name: 'Star Destroyer',
                url: 'http://swapi.dev/api/starships/3/',
            };
            const sampleStarship2 = {
                name: 'Death Star',
                url: 'http://swapi.dev/api/starships/9/',
            };
            const sampleStarship3 = {
                name: 'Millennium Falcon',
                url: 'http://swapi.dev/api/starships/10/',
            };
            const sampleResults1 = {
                results: [sampleStarship1, sampleStarship2],
            };
            const sampleResults2 = {
                results: [sampleStarship3],
            };
            const sampleStarshipsData = [sampleResults1, sampleResults2];
            const expected = [
                new Question('Star Destroyer', '3'),
                new Question('Death Star', '9'),
                new Question('Millennium Falcon', '10'),
            ];
            const preprocess = new PrepareData();
            const result = preprocess.preprocessData(sampleStarshipsData);
            expect(result).toStrictEqual(expected);
        });
    });
});
