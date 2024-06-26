import * as S from "../Styles/style";

const Initial = () => {
  return (
    <S.Section>
      <h1>QuizTech</h1>
      <S.DivInitial>
        <h3>Bem-vindo ao Quiz da Programação!</h3>
        <p>
          Prepare-se para testar seus conhecimentos e se divertir com as
          perguntas desafiadoras que preparamos para você. Este quiz abrange
          diversos temas e está cheio de surpresas que vão colocar à prova sua
          memória, raciocínio e habilidades.
        </p>

        <h3>Como funciona?</h3>

        <ul>
          <li>Cada pergunta tem apenas uma única resposta certa que equivale 2 pontos.</li>

          <li>Leia cada pegunta com muita atenção e escolha sua alternativa.</li>

          <li>
            No final, você poderá ver seu resultado e descobrir o quanto você
            sabe!
          </li>
        </ul>

        <S.LinkPage to="/category">Começar</S.LinkPage>
      </S.DivInitial>
    </S.Section>
  );
};

export default Initial;
