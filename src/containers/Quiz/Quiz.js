
import './Quiz.css'
import {useState} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

function Quiz () {
    const [quiz, setQuiz] = useState(
        [
            {
                question: 'Is this the way',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Yes', id: 1},
                    {text: 'No', id: 2},
                    {text: 'What?', id: 3},
                    {text: 'I don\'t know', id: 4},
                    {text: 'This is the way', id: 5},
                ]},
            {
                question: 'How many years Ukraine have independence',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '45', id: 1},
                    {text: '12', id: 2},
                    {text: '30', id: 3},
                    {text: 'I don\'t know', id: 4},
                    {text: '120', id: 5},
                ]},
        ]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answerState, setAnswerState] = useState(null);

    const isQuizFinished = () => {
        return (activeQuestion+1 === quiz.length);
    }

    const onAnswerClickHandler = (answerId) => {
        if(quiz[activeQuestion].rightAnswerId === answerId) {
            const timeout = window.setTimeout(() => {
                if(isQuizFinished()) {
                    console.log("Finished")
                } else {
                    setActiveQuestion(activeQuestion+1)
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {

        }
    }
    return (
        <div className={'Quiz'}>
            <div className={'QuizWrapper'}>
            <h1>Answer all questions</h1>
                <ActiveQuiz
                    question={quiz[activeQuestion].question}
                    answers={quiz[activeQuestion].answers}
                    onAnswerClick={onAnswerClickHandler}
                    quizLength={quiz.length}
                    answerNumber={activeQuestion + 1}
                />
            </div>
        </div>
    )
}

export default Quiz;