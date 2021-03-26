import React from 'react'
import { createMarkup } from './helpers';
import CardBack from './CardBack';
import styles from './QuestionCardStyles';
import pie from './pie.svg';
import { withStyles } from '@material-ui/styles';

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

    return (
        <div className={`${classes.gameContent}`}>
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
                <CardBack 
                    isCorrect={isCorrect}
                    correctAnswer={correctAnswer} 
                    handleClick={clickBack}
                />
            </div>
        </div>
    )
}

export default withStyles(styles)(QuestionCard);