import { useContext } from "react";
import * as S from "../Styles/style";
import { QuizContext } from "../context/Quiz";

const End = () => {
  const { score } = useContext(QuizContext);

  return (
    <S.Section>
      <h1>QuizTech</h1>
      <S.DivInitial>
        {score === 10 ? <h1>Perfeito!!</h1> : ""}
        {score > 5 && score < 10 ? <h1>Parabéns!!</h1> : ""}
        {score >= 0 && score <= 5 ? (
          <S.TileEnd>Você precisa treinar mais!!</S.TileEnd>
        ) : (
          ""
        )}
        <p>sua porntuação foi: {score} pontos.</p>
        <S.LinkPage to='/category'>Categorias</S.LinkPage>
      </S.DivInitial>
    </S.Section>
  );
};

export default End;
