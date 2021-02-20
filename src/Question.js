import React from 'react'
import './Question.css';



export default function Question(props) {
    const { question, category, choices, handleClick } = props;

    function createMarkup(data) {
        return {__html: data};
    }

    return (
        <div className="card-background">
            <div className="card-border">
                <div className="card">
                    <header className="card-header">
                        <h1>Trifle Quest</h1>
                        <div className="category">
                            <h3>{category}</h3>
                        </div>
                    </header>
                    <div className="card-content">
                        <p dangerouslySetInnerHTML={createMarkup(question)}/>
                        <div className="choices">
                            {
                                choices.map((c,i) => (
                                    <li 
                                        key={i}
                                        dangerouslySetInnerHTML={createMarkup(c)}
                                        onClick={() => handleClick(c)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
