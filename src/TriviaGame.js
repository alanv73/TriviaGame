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
            question: []
        }
    }

    async componentDidMount() {
        const newQuestion = await this.getQuestion();
        // console.log(newQuestion);
        this.setState({ question: newQuestion });
    }

    async getQuestion() {
        const { questionCount } = this.props;
        const apiURL = `${TRIVIA_API_URL}amount=${questionCount}`;
        console.log(apiURL);

        try{
            const result = await axios.get(apiURL);

            const questions = result.data.results;
            // console.log(`questions:`);
            console.log(`Q: ${questions[0].question}`);

            return questions[0];

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

    render() {
        const { question } = this.state;

        if(question !== undefined) {
            return (
                <div className="TriviaGame">
                    <div className="triviagame-content">
                        <Question 
                            question={question.question}
                            type={question.type}
                            category={question.category}
                            choices={
                                question.incorrect_answers 
                                ? this.shuffle([ 
                                    ...question.incorrect_answers, 
                                    question.correct_answer 
                                ]) 
                                : []
                            }
                        />
                    </div>
                </div>
            )
        }
    }
}

export default TriviaGame;