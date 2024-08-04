// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const App = () => {
  const [user, setUser] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleQuizComplete = (correctAnswers, totalQuestions) => {
    setCorrectAnswers(correctAnswers);
    setTotalQuestions(totalQuestions);
    setQuizComplete(true);
  };

  return (
      <div className="App">
        {!user && <Login onLogin={handleLogin} />}
        {user && !quizComplete && <Quiz onQuizComplete={handleQuizComplete} />}
        {quizComplete && <Result correctAnswers={correctAnswers} totalQuestions={totalQuestions} />}
      </div>
  );
};

export default App;
