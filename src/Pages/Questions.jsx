import * as S from "../Styles/style"; // Verifique se o caminho para os estilos está correto
import { useContext } from "react";
import { QuizContext } from "../context/Quiz"; // Verifique se o caminho para o contexto está correto

const Questions = () => {
  const { selectedRadio, setSelectedRadio } = useContext(QuizContext);

  const handleChange = (event) => {
    setSelectedRadio(event.target.value);
    console.log(selectedRadio);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedRadio) {
      alert(`Selecionado: ${selectedRadio}`);
    } else {
      alert("Nenhuma opção selecionada");
    }
    console.log(selectedRadio);
  };

  return (
    <S.Section>
      <S.DivInitial>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="radio"
              name="option"
              value="1"
              onChange={handleChange}
              checked={selectedRadio === "1"}
            />
            Radio 1
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="2"
              onChange={handleChange}
              checked={selectedRadio === "2"}
            />
            Radio 2
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="3"
              onChange={handleChange}
              checked={selectedRadio === "3"}
            />
            Radio 3
          </label>

          <label>
            <input
              type="radio"
              name="option"
              value="4"
              onChange={handleChange}
              checked={selectedRadio === "4"}
            />
            Radio 4
          </label>

          <button type="submit">Enviar</button>
        </form>
      </S.DivInitial>
    </S.Section>
  );
};

export default Questions;
