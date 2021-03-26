import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import defaultCategories from './categories';
import { shuffle, getTriviaQuestion, getRandomCategory } from './helpers';
import useIncrementState from './hooks/useIncrementState';
import useToggleState from './hooks/useToggleState';
import useLocalStorageState from './hooks/useLocalStorageState';
import './TriviaGame.css';

function TriviaQuestion({questionCount=1, difficulty='medium'}) {
    const [score, incrementScore] = useIncrementState(0);
    const [categories, setCategories] = useLocalStorageState(
        "categories", 
        defaultCategories.map(c => ({...c, selected: true}))
    );
    const [question, setQuestion] = useState();
    const [showBack, toggleShowBack] = useToggleState(false);
    const [isAnswerCorrect, toggleIsAnswerCorrect] = useToggleState(false);

    useEffect(() => {
        getNewQuestion();
    }, []);

    const getNewQuestion = async () => {
        const category = getRandomCategory(categories)
        const newQuestion = await getTriviaQuestion(
            questionCount,
            difficulty,
            category.id
        );
        setQuestion(newQuestion);
    }

    const handleGuess = userGuess => {
        console.log(`U: ${userGuess}`);
        const { correctAnswer } = question;

        if(userGuess === correctAnswer) {
            incrementScore();
            toggleIsAnswerCorrect();
        }

        toggleShowBack();
    }

    const handleBackClick = async () => {
        toggleShowBack();
        
        console.log('getting question');
        setTimeout(async () => {
            await getNewQuestion();
            if(isAnswerCorrect) 
                toggleIsAnswerCorrect();
        }, 200);
        

    }

    if(question !== undefined)
        return (
            <div className="TriviaGame">
                <div className="triviagame-score">
                    <h2 className="score">Score: {score}</h2>
                </div>
                <QuestionCard 
                    {...question}
                    handleClick={handleGuess}
                    isCorrect={isAnswerCorrect}
                    clickBack={handleBackClick}
                    showBack={showBack}
                />
            </div>
        )
        return null;
}

export default TriviaQuestion
