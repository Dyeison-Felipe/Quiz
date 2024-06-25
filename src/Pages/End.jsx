
import { useContext } from 'react';
import * as S from '../Styles/style'
import { QuizContext } from '../context/Quiz';

const End = () => {

  const [
    currentCategoryIndex,
    setCurrentCategoryIndex,
    selectedCategory,
    setSelectedCategory,
    score,
    setScore
  ] = useContext(QuizContext);

  return (
    <S.Section>
      <h1>QuizTech</h1>
      <S.DivInitial>
        Fim
        <p>sua porntuação foi: {score}</p>
      </S.DivInitial>

    </S.Section>
  )
}

export default End