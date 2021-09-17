import "./FinishedQuiz.css"

const FinishedQuiz = props => {
    return (
        <div className={"FinishedQuiz"}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you
                    <i className={''} />
                </li>
            </ul>
            <p>4 of 10 right</p>
            <button>Repeat</button>
        </div>
    )
}

export default FinishedQuiz;