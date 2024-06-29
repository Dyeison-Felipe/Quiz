import * as S from "../Styles/style";
import { data } from "../Data/question";
import { useContext } from "react";
import { QuizContext } from "../context/Quiz";
import ButtonCategory from "../components/ButtonCategory";

const Category = () => {
  const { setCurrentCategoryIndex, setSelectedCategory } =
    useContext(QuizContext);

  const handleClick = (index) => {
    setCurrentCategoryIndex(index);
    setSelectedCategory(data[index].category);
  };

  return (
    <S.Section>
      <h1>QuizTech</h1>
      <S.DivInitial>
        <h2>Categorias</h2>
        <p>Escolha uma categoria</p>
        <S.DivCategory>
          {data.map((item, index) => (
            <ButtonCategory key={index} item={item} handleClick={() => handleClick(index)} />
          ))}
        </S.DivCategory>
        <S.DivCategory>
          <S.LinkPage to="/">Voltar</S.LinkPage>
        </S.DivCategory>
      </S.DivInitial>
    </S.Section>
  );
};

export default Category;
