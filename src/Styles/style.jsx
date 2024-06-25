import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  background-color: #9f4306;
  color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;

  & h1 {
    margin: 0;
    color: #000;
    font-size: 4em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
`;

export const DivInitial = styled.div`
  width: 35em;
  height: 30em;
  padding: 2em;
  border: 0.1em solid #fff;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
`;

export const LinkPage = styled(Link)`
  padding: 0.5em 3em;
  text-decoration: none;
  color: #fff;
  background-color: #211e1e;
  border-radius: 0.5em;
  &:hover {
    background-color: #000;
  }
`;

export const ButtonQuestions = styled.button`
  width: 25em;
  height: 2.5em;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  background-color: #4169e1;
  color: #fff;
  font-size:1em;
  &:hover {
    background-color: #3054be;
    transform: scale(1.05);
  }

  &.correct{
    background-color: #05ab05;
  }

  &.incorrect{
    background-color: red;
  }
`;

// Category

export const DivCategory = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 0.5em;
`;

export const LinkCategory = styled(Link)`
  display: inline-block;
  padding:0.2em;
  text-decoration: none;
  color: #fff;
  background-color: #4169e1;
  border-radius: 0.5em;
  width: 10em;
  height:2em;
  text-align: center;
  box-sizing: border-box; /* Inclui padding e border na largura total */

  &:hover {
    background-color: #3054be;
    transform: scale(1.05);
  }
`;