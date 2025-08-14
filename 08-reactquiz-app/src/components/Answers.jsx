import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
  // ref to manage values independently from the component lifecycle
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);  
  }
  
  return <ul id="answers">
    {answers.map(answer => {
      const isSelected = selectedAnswer === answer;
      let cssClass = "";
      if (answerState === "answered" && isSelected) {
        cssClass = "selected"
      }
      if ((answerState === "correct" || answerState === "wrong") && isSelected) {
        cssClass = answerState
      }
      return (
        <li key={answer} className="answer">
          <button 
            className={cssClass}
            onClick={() => onSelect(answer)}
            disabled={answerState !== ""}
          >
            {answer}
          </button>
        </li>
      )
    })}
  </ul>
}