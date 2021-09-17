
import './Quiz.css'
import {useState} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

function Quiz () {
    const [quiz, setQuiz] = useState(
        [
            {
                question: 'Is this the way',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Yes', id: 1, state: null},
                    {text: 'No', id: 2, state: null},
                    {text: 'What?', id: 3, state: null},
                    {text: 'I don\'t know', id: 4, state: null},
                    {text: 'This is the way', id: 5, state: null},
                ]},
            {
                question: 'How many years Ukraine have independence',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '45', id: 1, state: null},
                    {text: '12', id: 2, state: null},
                    {text: '30', id: 3, state: null},
                    {text: 'I don\'t know', id: 4, state: null},
                    {text: '120', id: 5, state: null},
                ]},
        ]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answerState, setAnswerState] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const isQuizFinished = () => {
        if(activeQuestion+1 === quiz.length) {
            setIsFinished(true);
        }
        return isFinished;
    }

    const onAnswerClickHandler = (answerId) => {
        if(answerState) {
            return;
        }
        const updateAnswerState = (newState) => {
            // if(answerId < quiz[activeQuestion].answers.length)
                quiz[activeQuestion].answers[answerId-1].state=newState;
                setAnswerState(true);
                return quiz
        };
        const timeout = window.setTimeout(() => {
            if(isQuizFinished()) {
                console.log("Finished")
            } else {
                setActiveQuestion(activeQuestion+1)
            }
            setAnswerState(false)
            window.clearTimeout(timeout);
        }, 1000);
        if(quiz[activeQuestion].rightAnswerId === answerId) {
            console.log("clicked")
            setQuiz(updateAnswerState('success'))
            setAnswerState('success');
        } else {
            setQuiz(updateAnswerState('error'))
        }
    }
    return (
        <div className={'Quiz'}>
            <div className={'QuizWrapper'}>
            <h1>Answer all questions</h1>
                {isFinished ?
                    <FinishedQuiz />
                    :
                    <ActiveQuiz
                        question={quiz[activeQuestion].question}
                        answers={quiz[activeQuestion].answers}
                        onAnswerClick={onAnswerClickHandler}
                        quizLength={quiz.length}
                        answerNumber={activeQuestion + 1}
                        // state={answerState}
                    />}

            </div>
        </div>
    )
}

export default Quiz;