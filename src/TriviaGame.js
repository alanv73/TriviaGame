import React, { Component } from 'react';
import Question from './Question';
import axios from 'axios';
/* https://opentdb.com/api_config.php */
const TRIVIA_API_URL = "https://opentdb.com/api.php?";

class TriviaGame extends Component {
    static defaultProps = {
        questionCount: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    async componentDidMount() {
        const newQuestions = await this.getQuestions();
        console.log(newQuestions);
        this.setState({ questions: newQuestions });
    }

    async getQuestions() {
        const { questionCount } = this.props;
        const apiURL = `${TRIVIA_API_URL}amount=${questionCount}`;
        console.log(apiURL);

        try{
            const result = await axios.get(apiURL);

            const questions = result.data.results;
            // console.log(`questions:`);
            // console.log(questions);

            return questions;

        } catch(err) {
            console.log(err.message);
            return [];
        }
    }

    render() {
        const { questions } = this.state;

        return (
            <div>
                <h1>Trivia!</h1>
                <div>
                    {
                        questions.map(q => (
                            <Question question={q.question} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default TriviaGame;