import React from 'react'
import './Question.css';

export default function Question(props) {
    const { question } = props;

    function createMarkup(data) {
        return {__html: data};
    }

    return (
        <div className="Question">
            <div className="question-outline">
                <header className="question-header">
                    <h1>Trifle Quest</h1>
                    <div className="category">
                        <h3>{question.category}</h3>
                    </div>
                </header>
                <div className="choices">
                    <p dangerouslySetInnerHTML={createMarkup(question.question)}/>
                        <li>choice1</li>
                        <li>choice2</li>
                        <li>choice3</li>
                </div>
            </div>
        </div>
    )
}
