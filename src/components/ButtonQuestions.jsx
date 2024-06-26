import * as S from "../Styles/style";


const ButtonQuestions = ({handleClick, buttonColor, option, className}) => {
  return (
    <S.ButtonQuestions 
      onClick={() => handleClick(option)}
      className={`${buttonColor(option)} ${className}` }
    >
      {option}
    </S.ButtonQuestions>
  )
}

export default ButtonQuestions