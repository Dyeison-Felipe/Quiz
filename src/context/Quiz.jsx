// QuizProvider.js
import { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{currentCategoryIndex, setCurrentCategoryIndex, selectedCategory, setSelectedCategory, score, setScore}}>
      {children}
    </QuizContext.Provider>
  );
};
