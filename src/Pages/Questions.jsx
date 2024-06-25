import { useContext, useInsertionEffect, useState } from "react";
import * as S from "../Styles/style";
import { QuizContext } from "../context/Quiz"; 
import { data } from "../Data/question";
import { Navigate, useNavigate } from "react-router-dom";

const Questions = () => {
  const [
    currentCategoryIndex,
    setCurrentCategoryIndex,
    selectedCategory,
    setSelectedCategory,
    score,
    setScore
  ] = useContext(QuizContext);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [ optionSelected, setOptionSelected] = useState(null)
  const [optionCorrect, setOptionCorrect] = useState(null)

  const navigate = useNavigate()

  const currentQuestion = data[currentCategoryIndex].questions[currentQuestionIndex];
  const tip = currentQuestion.tip


  const handleClick = (option) => {

    setOptionCorrect(currentQuestion.response)

    setOptionSelected(option)
    if (optionSelected === optionCorrect) {
      setScore(score + 2);
    } else {
      alert("Resposta errada");
    }
    setTimeout(() => {
      nextQuestion()
    }, 1000)

  };

  const jump = () => {
    nextQuestion()
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < data[currentCategoryIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/end');
    }
    setOptionCorrect(null)
    setOptionSelected(null)
  }

  const buttonColor = (option) => {
    if(optionSelected === option) {
      return option === optionCorrect ? 'correct' : 'incorrect'
    }

    return '';
  }



  const Options = currentQuestion.options.map((option, index) => (
    <S.ButtonQuestions 
      key={index} 
      onClick={() => handleClick(option)}
      className={buttonColor(option)}
      >
      {option}
    </S.ButtonQuestions>
  ));

  return (
    <S.Section>
      <h1>{selectedCategory}</h1>
      <S.DivInitial>
        {currentQuestion.question}
        <S.DivCategory>
          {Options}
        </S.DivCategory>
          dica: {tip}
          <button onClick={jump}>Pular</button>
      </S.DivInitial>
    </S.Section>
  );
};

export default Questions;
