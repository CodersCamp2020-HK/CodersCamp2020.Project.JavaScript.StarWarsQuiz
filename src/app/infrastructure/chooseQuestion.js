import { async } from 'regenerator-runtime'
import {RandData} from './RandData'

export const chooseQuestions = async (num) => {
    const inputData = await RandData.randData()
    const question = {
        correctAnswer: inputData.questions[num],
        answers: inputData.answers[num]
    }
    console.log(question)
    return question
}