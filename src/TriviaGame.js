import React, { Component } from 'react';
import Question from './Question';
import axios from 'axios';
/* https://opentdb.com/api_config.php */
const TRIVIA_API_URL = "https://opentdb.com/api.php?";

class TriviaGame extends Component {
    static defaultProps = {
        questionCount: 1
    }

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            category: '',
            choices: [],
            correctAnswer: ''
        }

        this.checkAnswer = this.checkAnswer.bind(this);
    }

    async componentDidMount() {
        await this.getQuestion();
    }

    async getQuestion() {
        const { questionCount } = this.props;
        const apiURL = `${TRIVIA_API_URL}amount=${questionCount}`;
        console.log(apiURL);

        try{
            const result = await axios.get(apiURL);

            const questions = result.data.results;
            // console.log(`questions:`);
            console.log(`A: ${questions[0].correct_answer}`);

            let question = questions[0].question;
            let category = questions[0].category;
            let choices = this.shuffle(
                [
                    ...questions[0].incorrect_answers,
                    questions[0].correct_answer
                ]
            );
            let correctAnswer = questions[0].correct_answer;

            this.setState({ 
                question,
                category,
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
            await this.getQuestion()
        }
    }

    render() {
        const { 
            question, 
            category, 
            choices, 
            correctAnswer 
        } = this.state;

        if(question !== undefined) {
            return (
                <div className="TriviaGame">
                    <div className="triviagame-content">
                        <Question 
                            question={question}
                            category={category}
                            choices={choices}
                            handleClick={this.checkAnswer}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default TriviaGame;