import React from "react";

export default function Question(props) {

    const [answerState, setAnswerState] = React.useState(false)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showAnswer() {
        setAnswerState(true)
    }
    
    let incorrectAnswers = props.incorrectAnswers
    const correctAnswer = props.correctAnswer
    incorrectAnswers.push(correctAnswer)

    const shuffledAnswers = shuffleArray(incorrectAnswers)

    const answerSet = new Set(shuffledAnswers)
    incorrectAnswers = [...answerSet]

    const choices = incorrectAnswers

// TBC, set other options to fade away while correct answer fades in and enlarges.
    const log = choices.map((choice, index) => (
        choice === correctAnswer ?
            <div key={index} className={answerState ? "correctAnswer answer" : "incorrectAnswer answer"}>
                <h3>
                    {`> ${choice}`}
                </h3>
            </div>
            :
            <div key={index} className="incorrectAnswer">
                <h3>
                    {`> ${choice}`}
                </h3>
            </div>
    ))

    return (
        <div className="question">
            <h5>{`Category: ${props.category}`}</h5>
            <h2>{`Question: ${props.question.text}`}</h2>
            {log}
            <button
                onClick={showAnswer}
            >Show answer</button>

        </div>

    )
}
