import React from 'react';

const Question = ({ question, onAnswer }) => {
    const handleAnswer = (answer) => {
        onAnswer(answer);
    };

    return (
        <div className="quiz-container">
            <div className="question">
                <h2>{question.question}</h2>
                {question.incorrect_answers.concat(question.correct_answer).map((answer, index) => (
                    <button key={index} onClick={() => handleAnswer(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
