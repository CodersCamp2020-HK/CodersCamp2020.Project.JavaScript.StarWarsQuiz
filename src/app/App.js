import {RandData} from './infrastructure/RandData'
import {Data} from './infrastructure/fetchApi'
import {PrepareData} from './infrastructure/processData'

export const App = async () => {
    const data = new Data();
    const prepareData = new PrepareData();
    const categoryArr = await data.getPeopleJsonData().then(res => prepareData.preprocessData(res) )
    const randData = new RandData()
    randData.randData(categoryArr, 2).then(res => console.log(res))
};
