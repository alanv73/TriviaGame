import React from 'react';
import { createMarkup } from './helpers';
import { withStyles } from '@material-ui/styles';
import pie from './pie.svg';
import styles from './QuestionCardStyles';

function CardBack({
    classes, 
    correctAnswer, 
    isCorrect,
    handleClick
}) {
    return (
        <div 
            className={`${classes.cardBackground} ${classes.cardBack}`}
        >
            <div 
                className={classes.cardBorder}
                onClick={handleClick}
            >
                <div className={classes.backDesign}>
                    <h1 className={classes.backItems}>Trifle Quest</h1>
                    <img className={classes.backItems} src={pie} alt="pie"/>
                    {
                        isCorrect
                        ? <h3 className={classes.message}>Correct</h3>
                        : <div className={classes.incorrect}>
                            <h2>The answer was:</h2>
                            <h4 dangerouslySetInnerHTML={createMarkup(correctAnswer)} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(CardBack);