import React from "react";

export default function Question(props) {

    const [answerState, setAnswerState] = React.useState(false)
    const [begin, setBegin] = React.useState([])

    function showAnswer() {
        setAnswerState(true)
        setBegin(myChoices)
    }

    let myChoices = props.incorrectAnswers
    const correctAnswer = props.correctAnswer

    const randomNumber = Math.floor(Math.random() * 4)

    myChoices.splice(randomNumber, 0, correctAnswer)

    const answerSet = new Set(myChoices)
    myChoices = [...answerSet]

    const choices = begin.length === 0 ? myChoices : begin


    const log = choices.map((choice, index) => (
        choice === correctAnswer ?
            <div key={index} className={answerState ? "correctAnswer answer" : "incorrectAnswer answer"}>
                <ul>
                    <li>
                        <h3>
                            {`${choice}`}
                        </h3>
                    </li>
                </ul>
            </div>
            :
            <div key={index} className="incorrectAnswer">
                <ul>
                    <li>
                        <h3>
                            {`${choice}`}
                        </h3>
                    </li>
                </ul>
            </div>
    ))


    return (
        <div className="question">
            {/* <h5>{`Category: ${props.category}`}</h5> */}
            <h2>{`Question: ${props.question.text}`}</h2>
            {log}
            {/* {answerState&& <h2>{correctAnswer}</h2>} */}
            <button
                className="show-answer-button"
                onClick={showAnswer}
            >Show answer</button>

        </div>
    )
}
