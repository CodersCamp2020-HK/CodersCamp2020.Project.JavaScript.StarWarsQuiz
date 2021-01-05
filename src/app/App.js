import {QuestionScoreView} from './components/QuestionScoreView';
 
export const App = () => {
    const container = document.querySelector('#swquiz-app')
    const questionScoreView = new QuestionScoreView(valueAll)
    container.appendChild(questionScoreView.setCorrectAns(valueGood))
    container.appendChild(questionScoreView.setIncorrectAns(valueBad))
};
