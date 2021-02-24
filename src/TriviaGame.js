import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
import axios from 'axios';
import categories from './categories';
import './TriviaGame.css';

/* https://opentdb.com/api_config.php */
const TRIVIA_API_URL = "https://opentdb.com/api.php?";

const DIFFICULTY = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard'
}

class TriviaGame extends Component {
    static defaultProps = {
        questionCount: 1
    }

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            categoryName: '',
            categoryNumber: 0,
            categoryColor: 'white',
            difficulty: 'hard',
            choices: [],
            correctAnswer: '',
            score: 0,
            message: '',
            showBack: false,
            categories: window.localStorage.getItem("categories") 
                || categories.map(c => ({...c, selected: true}))
        }

        this.checkAnswer = this.checkAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    async componentDidMount() {
        await this.getQuestion();
    }

    async getQuestion() {
        const { questionCount } = this.props;
        const { difficulty, categories } = this.state;
        const randNum = Math.floor(Math.random() * categories.filter(c => c.selected).length);
        const randCategory = categories.filter(c => c.selected)[randNum];
        console.log(randCategory);

        const apiOptions = `amount=${questionCount}` 
            + `&difficulty=${difficulty}` 
            + `&category=${randCategory.id}`;
        const apiURL = `${TRIVIA_API_URL}${apiOptions}`;
        console.log(apiURL);

        try{
            const result = await axios.get(apiURL);

            const questions = result.data.results;
            console.log(`A: ${questions[0].correct_answer}`);

            let question = questions[0].question;
            let categoryName = questions[0].category;
            let categoryColor = categories.find(c => c.name === categoryName).color;
            let choices = this.shuffle(
                [
                    ...questions[0].incorrect_answers,
                    questions[0].correct_answer
                ]
            );
            let correctAnswer = questions[0].correct_answer;

            this.setState({ 
                question,
                categoryName,
                categoryColor,
                choices,
                correctAnswer
            });

        } catch(err) {
            console.log(err.message);
            return [];
        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    async checkAnswer(answer) {
        console.log(answer);
        const { correctAnswer } = this.state;

        if(answer === correctAnswer) {
            console.log('Correct!');
            this.setState(st => ({
                score: st.score + 1,
                message: 'Correct!',
                showBack: true
            }));
        } else {
            this.setState(st => ({
                message: 'Incorrect 😢',
                showBack: true
            }));
        }

        // await this.getQuestion()
    }

    async nextQuestion() {
        this.setState(st => ({
            showBack: false,
        }));

        await this.getQuestion();
    }

    render() {
        const { 
            question, 
            categoryName,
            categoryColor, 
            choices,
            score,
            message,
            showBack
        } = this.state;

        if(question !== undefined)
            return (
                <div className="TriviaGame">
                    <div className="triviagame-score">
                        <h2 className="score">Score: {score}</h2>
                    </div>
                    <div className="triviagame-content">
                        <QuestionCard 
                            question={question}
                            category={categoryName}
                            categoryColor={categoryColor}
                            choices={choices}
                            handleClick={this.checkAnswer}
                            message={message}
                            nextClick={this.nextQuestion}
                            showBack={showBack}
                        />
                    </div>
                </div>
            );
            return null;
    }
}

export default TriviaGame;