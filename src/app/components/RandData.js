import { PrepareData } from '../infrastructure/processData';
import { Data } from '../infrastructure/fetchApi';

const n = 10 // Liczba pytań w Quiz

class RandData {
      static async randData() {

        //Funkcja zwracajaca określoną liczbę (count) indeksów z tablicy arr
        const randElementsfromArr = (count, arr) => {
            const localArr = []
            while (localArr.length < count) {
                let randomNumber = Math.floor(Math.random() * arr.length);
                if (!localArr.some(item => item.index === arr[randomNumber].index)) {
                    localArr.push(arr[randomNumber])
                }     
            }
            return localArr
        }


        const peopleData = await Data.getPeopleJsonData()

        
        const categoryArr = await PrepareData.preprocessData(peopleData); //Tablica wszystkich obiektów z danej kategori
        const questionsArr = randElementsfromArr(n, categoryArr) // Tablica poprawnych odpowiedzi
        const diffArr = categoryArr.filter(item => !questionsArr.some(x => x.index === item.index) ) // Tablica będąca różnicą pomiędzy categoryArr a questionsArr || categoryArr = questionsArr + diffArr

        // Tworzenie tablicay odpowiedzi (odpowiedż A jest poprawna)
        const answers = [] 
        for (let i = 0; i < n; i++) {
            const fakeAnswers = randElementsfromArr(3, diffArr)
            let answer = {
                answerA: {...questionsArr[i], correct: true},
                answerB: {...fakeAnswers[0], correct: false},
                answerC: {...fakeAnswers[1], correct: false},
                answerD: {...fakeAnswers[2], correct: false},
            }
            answers.push(answer)
        }
        const output = {
            questions: questionsArr,
            answers: answers
        }
        console.log(output)
        return output
    }
}

 export {RandData}

