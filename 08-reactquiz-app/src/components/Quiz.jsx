import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length

  console.log('userAnswers', userAnswers)
  console.log('quizIsOver', quizIsOver)

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((previousUserAnswers) => {
      return [...previousUserAnswers, selectedAnswer]
    });
  }, []);

  const handleOnTimeout = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer])

  // early returns if quizIsOver!
  if (quizIsOver) {
    return <Summary userAnswers={userAnswers}/>;
  }
  
  return <div id="quiz">
    <Question 
      key={activeQuestionIndex} // we add this so both QuestionTimer and Answers gets re-rendered for every new question! very clever
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleOnTimeout}
    />
  </div>
};