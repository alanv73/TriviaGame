import React from 'react'

export default function Question(props) {
    const { question } = props;

    function createMarkup(data) {
        return {__html: data};
    }

    return (
        <div>
            <p dangerouslySetInnerHTML={createMarkup(question)}/>
            {/* <p dangerouslySetInnerHTML={{__html: question}}/> */}
        </div>
    )
}
