import { createContext, useState } from 'react';

// Criação do contexto
export const QuizContext = createContext();

// Provedor do contexto
export const QuizProvider = ({ children }) => {
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <QuizContext.Provider value={{ selectedRadio, setSelectedRadio }}>
      {children}
    </QuizContext.Provider>
  );
};
