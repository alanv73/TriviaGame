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
            question: ''
        }
    }

    async componentDidMount() {
        const newQuestion = await this.getQuestion();
        console.log(newQuestion);
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
            // console.log(questions);

            return questions[0];

        } catch(err) {
            console.log(err.message);
            return [];
        }
    }

    render() {
        const { question } = this.state;

        return (
            <div>
                <h1>Trivia!</h1>
                <div>
                    <Question question={question} />
                </div>
            </div>
        )
    }
}

export default TriviaGame;