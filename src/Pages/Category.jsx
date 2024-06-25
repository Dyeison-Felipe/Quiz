import * as S from "../Styles/style";
import { data } from "../Data/question";
import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

const Category = () => {
  const [
    currentCategoryIndex,
    setCurrentCategoryIndex,
    selectedCategory,
    setSelectedCategory,
  ] = useContext(QuizContext);

  const categories = data.map((item, index) => (
    <S.DivCategory key={index} onClick={() => handleClick(index)}>
      <S.LinkCategory to="/questions">{item.category}</S.LinkCategory>
    </S.DivCategory>
  ));

  const handleClick = (index) => {
    // função para pegar o indice da categoria que o usario clicar
    setCurrentCategoryIndex(index);
    setSelectedCategory(data[index].category);
  };

  return (
    <S.Section>
      <h1>QuizTech</h1>

      <S.DivInitial>
        <h2>Categorias</h2>
        {categories}
        <S.DivCategory>
          <S.LinkPage to="/">Voltar</S.LinkPage>
        </S.DivCategory>
      </S.DivInitial>
    </S.Section>
  );
};

export default Category;
