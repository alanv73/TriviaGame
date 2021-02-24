import axios from 'axios';
import categories from './categories';
const TRIVIA_API_URL = "https://opentdb.com/api.php?";

const shuffle = array => {
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

const getTriviaQuestion = async (questionCount, difficulty, categoryId) => {
    const apiOptions = `amount=${questionCount}` 
        + `&difficulty=${difficulty}` 
        + `&category=${categoryId}`;

    const apiURL = `${TRIVIA_API_URL}${apiOptions}`;
    console.log(apiURL);

    try{
        const result = await axios.get(apiURL);

        const triviaQuestion = result.data.results[0];
        console.log(`A: ${triviaQuestion.correct_answer}`);

        let categoryColor = categories.find(
            c => c.name === triviaQuestion.category).color;

        let choices = shuffle(
            [
                ...triviaQuestion.incorrect_answers,
                triviaQuestion.correct_answer
            ]
        );

        const question = { 
            questionText: triviaQuestion.question,
            category: triviaQuestion.category,
            categoryColor: categoryColor,
            type: triviaQuestion.type,
            difficulty: triviaQuestion.difficulty,
            choices: choices,
            correctAnswer: triviaQuestion.correct_answer
        }

        return question;

    } catch(err) {
        console.log(err.message);
        return null;
    }
}

const getRandomCategory = (categories) => {
    const randNum = Math.floor(Math.random() * categories.filter(c => c.selected).length);
    const randCategory = categories.filter(c => c.selected)[randNum];
    return randCategory;
}

const toggleCategory = (categories, categoryID) => {
    const newCategories = categories.map(c => 
        c.id === categoryID ? {...c, selected: !c.selected} : c
    );

    return newCategories;
}


export { shuffle, getTriviaQuestion, getRandomCategory, toggleCategory };