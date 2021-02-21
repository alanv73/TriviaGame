import React from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './QuestionCardStyles';
import pie from './pie.svg';

function QuestionCard(props) {
    const { 
        question, 
        category, 
        categoryColor, 
        choices, 
        handleClick, 
        classes,
        message,
        nextClick,
        showBack
    } = props;

    function createMarkup(data) {
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
                            <p dangerouslySetInnerHTML={createMarkup(question)}/>
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
                    onClick={nextClick}
                >
                    <div className={classes.backDesign}>
                        <h2>Trifle Quest</h2>
                        <img src={pie} alt="pie"/>
                        <h3 className={classes.message}>{message}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(QuestionCard);