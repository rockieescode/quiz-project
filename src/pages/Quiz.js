// src/pages/Quiz.js
import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../utils/api';
import Question from '../components/Question';
import Timer from '../components/Timer';

const Quiz = ({ onQuizComplete }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
        JSON.parse(localStorage.getItem('currentQuestionIndex')) || 0
    );
    const [correctAnswers, setCorrectAnswers] = useState(
        JSON.parse(localStorage.getItem('correctAnswers')) || 0
    );
    const [totalAnswers, setTotalAnswers] = useState(
        JSON.parse(localStorage.getItem('totalAnswers')) || 0
    );

    useEffect(() => {
        const getQuestions = async () => {
            const questions = await fetchQuestions();
            setQuestions(questions);
        };

        getQuestions();
    }, []);

    useEffect(() => {
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
        localStorage.setItem('correctAnswers', correctAnswers);
        localStorage.setItem('totalAnswers', totalAnswers);
    }, [currentQuestionIndex, correctAnswers, totalAnswers]);

    const handleAnswer = (answer) => {
        if (questions[currentQuestionIndex].correct_answer === answer) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setTotalAnswers(totalAnswers + 1);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            onQuizComplete(correctAnswers, questions.length);
        }
    };

    const handleTimeUp = () => {
        onQuizComplete(correctAnswers, questions.length);
    };

    return (
        <div className="quiz-container">
            {questions.length > 0 && (
                <>
                    <Timer initialTime={300} onTimeUp={handleTimeUp} />
                    <Question
                        question={questions[currentQuestionIndex]}
                        onAnswer={handleAnswer}
                    />
                    <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
                </>
            )}
        </div>
    );
};

export default Quiz;
