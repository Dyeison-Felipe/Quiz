import * as S from '../Styles/style';

const ButtonCategory = ({item, handleClick}) => {
  return (
    <S.DivCategory onClick={() => handleClick(item)}>
      <S.LinkCategory to="/questions">{item.category}</S.LinkCategory>
    </S.DivCategory>
  );
};

export default ButtonCategory;
