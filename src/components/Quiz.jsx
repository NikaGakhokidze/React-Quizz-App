import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);
  // const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={() => handleSelectAnswer(null)}
        />
      </div>
    </div>
  );
}
