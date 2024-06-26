import { useContext, useEffect, useState } from "react";
import * as S from "../Styles/style";
import { QuizContext } from "../context/Quiz";
import { data } from "../Data/question";
import { useNavigate } from "react-router-dom";
import ButtonQuestions from "../components/ButtonQuestions";

const Questions = () => {
  const { currentCategoryIndex, selectedCategory, setScore } =
    useContext(QuizContext);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState(null);
  const [optionCorrect, setOptionCorrect] = useState(null);
  const [isShowCorrect, setIsShowCorrect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setScore(0);
  }, [setScore]);

  const currentQuestion =
    data[currentCategoryIndex].questions[currentQuestionIndex];
  const tip = currentQuestion.tip;

  const handleClick = (option) => {
    setIsShowCorrect(true);
    setOptionCorrect(currentQuestion.response);
    setOptionSelected(option);

    if (option === currentQuestion.response) {
      setScore((score) => score + 2);
    }
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const jump = () => {
    nextQuestion();
  };

  const nextQuestion = () => {
    if (
      currentQuestionIndex <
      data[currentCategoryIndex].questions.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/end");
    }
    setIsShowCorrect(false);
    setOptionCorrect(null);
    setOptionSelected(null);
  };

  const buttonColor = (option) => {
    if (optionSelected === option) {
      return option === optionCorrect ? "correct" : "incorrect";
    }
    return "";
  };

  return (
    <S.Section>
      <h1>{selectedCategory}</h1>
      <S.DivInitial>
        {currentQuestion.question}
        <S.DivCategory>
          {currentQuestion.options.map((option) => (
            <ButtonQuestions
              key={option.toString()}
              handleClick={handleClick}
              buttonColor={buttonColor}
              option={option}
              className={
                option === optionCorrect && isShowCorrect ? "correct" : ""
              }
            />
          ))}
          dica: {tip}
        </S.DivCategory>


        <S.MenuButton>
        
        <S.LinkPage to='/category'>Cancelar</S.LinkPage>
        {currentQuestionIndex <
        data[currentCategoryIndex].questions.length - 1 ? (
          <S.LinkPage onClick={jump}>Pular</S.LinkPage>
        ) : (
          ""
        )}
        {currentQuestionIndex ===
        data[currentCategoryIndex].questions.length - 1 ? (
          <S.LinkPage to="/end">Finalizar</S.LinkPage>
        ) : (
          ""
        )}
        </S.MenuButton>
      </S.DivInitial>
    </S.Section>
  );
};

export default Questions;
