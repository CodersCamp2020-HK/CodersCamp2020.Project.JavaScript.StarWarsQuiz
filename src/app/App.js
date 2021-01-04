import {RandData} from './infrastructure/RandData'

export const App = () => {
    const randData = new RandData()
    randData.randData('people').then(res => console.log(res))
    
};