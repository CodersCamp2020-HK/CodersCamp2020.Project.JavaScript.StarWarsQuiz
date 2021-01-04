import {PrepareData} from './processData'
import {Data} from './fetchApi'
import _ from 'lodash'

const num = 10

class RandData {
     async randData(category) {
        const data = new Data();
        const prepareData = new PrepareData();
        let categoryArr = []
        switch (category) {
            case 'people':
                categoryArr = await data.getPeopleJsonData().then(res => prepareData.preprocessData(res) )
                break;
            case 'starships':
                categoryArr = await data.getStarshipsJsonData().then(res => prepareData.preprocessData(res) )
                break;
            case 'vehicles':
                categoryArr = await data.getVehiclesJsonData().then(res => prepareData.preprocessData(res) )
            default:
                categoryArr = await data.getPeopleJsonData().then(res => prepareData.preprocessData(res) )
                break;
        }
        const questionsArr = _.sampleSize(categoryArr, num);
        const diffArr = categoryArr.filter(item => !questionsArr.some(x => x.index === item.index) )
        const answers = []
        for (let i = 0; i < num; i++) {
            const wrongAwnswers =  _.sampleSize(diffArr, 3);
            const answer = [
                {...questionsArr[i], correct: true},
                wrongAwnswers[0],
                wrongAwnswers[1],
                wrongAwnswers[2]
            ]
            answers.push(_.shuffle(answer))
        }
        const output = {
            questionsArr,
            answers
        }
        return output
       
    }
}

export {RandData}