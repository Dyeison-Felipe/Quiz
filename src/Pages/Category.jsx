import * as S from "../Styles/style";
const Category = () => {
  return (
    <S.Section>
      <h1>Quiz da Programação</h1>

      <S.DivInitial>
        <h2>Categorias</h2>
        <S.DivCategory>
          <S.ButtonCategory to="/questions">JavaScript</S.ButtonCategory>
          <S.ButtonCategory to="/questions">HTML</S.ButtonCategory>
          <S.ButtonCategory to="/questions">Css</S.ButtonCategory>
          <S.ButtonCategory to="/questions">Python</S.ButtonCategory>
          <S.ButtonCategory to="/questions">React</S.ButtonCategory>
        </S.DivCategory>

        <S.DivCategory>
          <S.LinkPage to='/'>Voltar</S.LinkPage>
        </S.DivCategory>
      </S.DivInitial>
    </S.Section>
  );
};

export default Category;
