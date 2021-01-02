import { PrepareData } from '../src/app/components/processData';

const peopleData = require('./peopleData.json');
const vehiclesData = require('./vehiclesData.json');
const starshipsData = require('./starshipsData.json');

describe('Fetching data from API', () => {
    describe('check if people data', () => {
        test('has 82 objects', () => {
            return PrepareData.preprocessData(peopleData).then((data) => {
                expect(data.length).toBe(82);
            });
        });
    });
    describe('check if vehicles data', () => {
        test('has 39 objects', () => {
            return PrepareData.preprocessData(vehiclesData).then((data) => {
                expect(data.length).toBe(39);
            });
        });
    });
    describe('check if starships data', () => {
        test('has 36 objects', () => {
            return PrepareData.preprocessData(starshipsData).then((data) => {
                expect(data.length).toBe(36);
            });
        });
    });
});
