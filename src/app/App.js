import {QuestionScoreView} from './components/QuestionScoreView';
 
export const App = () => {
    const container = document.querySelector('#swquiz-app')
    const questionScoreView = new QuestionScoreView()
    container.appendChild(questionScoreView)
};
