// src/pages/Result.js
import React from 'react';

const Result = ({ correctAnswers, totalQuestions }) => {
    return (
        <div className="quiz-container">
            <h2>Quiz Complete</h2>
            <p>Total Questions: {totalQuestions}</p>
            <p>Correct Answers: {correctAnswers}</p>
            <p>Incorrect Answers: {totalQuestions - correctAnswers}</p>
        </div>
    );
};

export default Result;
