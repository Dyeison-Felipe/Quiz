import * as S from "../Styles/style";

const Initial = () => {
  return (
    <S.Section>
      <h1>Quiz da Programação</h1>
      <S.DivInitial>
        <h3>Bem-vindo ao Quiz da Programação!</h3>
        <p>
          Prepare-se para testar seus conhecimentos e se divertir com as
          perguntas desafiadoras que preparamos para você. Este quiz abrange
          diversos temas e está cheio de surpresas que vão colocar à prova sua
          memória, raciocínio e habilidades. Lembre-se, o objetivo é aprender e
          se divertir, então relaxe e aproveite o desafio!
        </p>

        <h3>Como funciuona?</h3>

        <ul>
          <li>Cada pergunta tem apenas uma unica resposta certa</li>

          <li>Leia cada pegunta com muita atenção e escolha sua alternativa</li>

          <li>
            Caso esteja em duvida, há possibilidade de eliminar uma alternativa
            ou pedir uma dica.{" "}
          </li>

          <li>
            A dica você podera usar apenas umas vez, já a eliminação de um
            alternativa, pode usar a cada rodada.
          </li>

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
