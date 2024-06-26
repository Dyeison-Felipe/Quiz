import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  background-color: #9f4306;
  color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5em;
  box-sizing: border-box;

  & h1 {
    margin: 0;
    color: #000;
    font-size: 4em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    @media (max-width: 768px) {
      font-size: 3em;
    }

    @media (max-width: 480px) {
      font-size: 2em;
      height: auto;
    }
  }
`;

export const DivInitial = styled.div`
  width: 100%;
  max-width: 35em;
  height: auto;
  padding: 2em;
  margin: 2em 0;
  border: 0.1em solid #fff;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5em;
    margin: 1.5em 0;
    gap: 1.5em;
  }

  @media (max-width: 480px) {
    padding: 0.5em 1.5em;
    margin: 1em 0;
    gap: 1em;
  }
`;

export const LinkPage = styled(Link)`
  padding: 0 3em;
  text-decoration: none;
  color: #fff;
  background-color: #211e1e;
  border-radius: 0.5em;

  &:hover {
    background-color: #000;
  }

  @media (max-width: 768px) {
    padding: 0.5em 2em;
  }

  @media (max-width: 480px) {
    padding: 0.5em 1.5em;
  }
`;

export const ButtonQuestions = styled.button`
  width: 100%;
  max-width: 25em;
  height: 2.5em;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #4169e1;
  color: #fff;
  font-size: 1em;

  &:hover {
    background-color: #3054be;
    transform: scale(1.05);
  }

  &.correct {
    background-color: #05ab05;
  }

  &.incorrect {
    background-color: red;
  }

  @media (max-width: 768px) {
    max-width: 20em;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    max-width: 20em;
    height:4em;
    font-size: 0.8em;
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
  flex-direction: column;
  gap: 0.5em;

  @media (max-width: 768px) {
    gap: 0.4em;
  }

  @media (max-width: 480px) {
    gap: 0.3em;
  }
`;

export const LinkCategory = styled(Link)`
  display: inline-block;
  padding: 0.2em;
  text-decoration: none;
  color: #fff;
  background-color: #4169e1;
  border-radius: 0.5em;
  width: 15em;
  height: 2em;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background-color: #3054be;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 8em;
    height: 1.8em;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    max-width: 15em;
    height: 2.5em;
    font-size: 0.8em;
    padding-top:0.5em;
  }
`;

export const TileEnd = styled.p`
  font-size: 2em;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const MenuButton = styled.a`
  width: 100%;
  height: auto;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  @media (max-width: 768px) {
    gap: 0.4em;
  }

  @media (max-width: 480px) {
    gap: 0.3em;
  }
`;
