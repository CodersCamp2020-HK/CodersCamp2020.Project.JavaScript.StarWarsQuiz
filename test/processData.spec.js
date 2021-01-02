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
});
