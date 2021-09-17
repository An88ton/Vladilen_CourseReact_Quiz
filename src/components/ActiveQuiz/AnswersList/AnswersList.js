import React from "react";
import './AnswersList.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
    <ul className={'AnswersList'}>
        {props.answers.map((answer, index) => {
            return <AnswerItem
                key={index}
                answer={answer}
                onAnswerClick={props.onAnswerClick}
                state={answer.state ? answer.state : null}
                />
        })}
    </ul>
)

export default AnswersList;
