import React from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './QuestionCardStyles';
import pie from './pie.svg';

function QuestionCard({ 
    questionText, 
    category, 
    categoryColor, 
    choices, 
    handleClick, 
    classes,
    isCorrect,
    clickBack,
    showBack,
    correctAnswer
}) {

    const createMarkup = data => {
        return {__html: data};
    }

    return (
        // <div className={`${classes.cardBoundary}`}>
        <div className={`${classes.cardBoundary} ${showBack && classes.isFlipped}`}>
            <div 
                className={`${classes.cardBackground} ${classes.cardFront}`}
            >
                <div className={classes.cardBorder}>
                    <div className={classes.card}>
                        <header className={classes.cardHeader}>
                            <h1>Trifle Quest</h1>
                            <div 
                                className={classes.category}
                                style={{ backgroundColor: categoryColor }}
                            >
                                <h3>{category}</h3>
                            </div>
                        </header>
                        <div className={classes.cardContent}>
                            <p dangerouslySetInnerHTML={createMarkup(questionText)}/>
                            <div className={classes.choices}>
                                {
                                    choices.map((c,i) => (
                                        <li 
                                            key={i}
                                            className={classes.choice}
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
            <div 
                className={`${classes.cardBackground} ${classes.cardBack}`}
            >
                <div 
                    className={classes.cardBorder}
                    onClick={clickBack}
                >
                    <div className={classes.backDesign}>
                        <h1 className={classes.backItems}>Trifle Quest</h1>
                        <img className={classes.backItems} src={pie} alt="pie"/>
                        {
                            isCorrect
                            ? <h3 className={classes.message}>Correct</h3>
                            : <div className={classes.incorrect}>
                                <h2>The answer was:</h2>
                                <h4>{correctAnswer}</h4>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(QuestionCard);