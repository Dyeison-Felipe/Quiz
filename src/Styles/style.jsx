import styled from 'styled-components'

export const Section = styled.section`
  background-color:#9f4306;
  color: #FFF;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

  & h1{
    color: #000;
    font-size: 4em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`

export const DivInitial = styled.div`
  width: 35em;
  height: 40em;
  padding:2em;
  border:0.1em solid #FFF;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:1em;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const LinkInitial = styled.a`
  padding: 0.5em 3em;
  text-decoration: none;
  color: #FFF;
  background-color: #211e1e;
  border-radius: 0.5em;

  &:hover {
    background-color:#000;

  }
`
