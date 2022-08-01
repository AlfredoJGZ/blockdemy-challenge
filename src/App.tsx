import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import styled from "styled-components";
import Card from "./components/Card";
import History from "./components/History";
import { gql, useLazyQuery } from "@apollo/client";
import { HistoryButton } from "./components/History";

const characterQuery = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      status
      species
      gender
    }
  }
`;

export type Character = {
  name: string;
  id: number;
  image: string;
  status: string;
  species: string;
  gender: string;
};

type container = {
  buttonContainer?: boolean;
};

const StyledApp = styled.main`
  position: relative;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: rgb(62, 149, 170);
  background: linear-gradient(
    90deg,
    rgba(62, 149, 170, 1) 0%,
    rgba(190, 222, 65, 1) 100%
  );
`;

const StyledContainer = styled.div<container>`
  max-width: min(80vw, 45rem);
  margin: 0 auto;
  padding: 2rem 0;
  ${(props) =>
    props.buttonContainer
      ? "display: flex ; justify-content: space-around;"
      : ""}
`;

const MainButton = styled.button`
  transition: background-color 0.3s ease;
  background: #42b5cb;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #30808f;
  }
`;

const App = () => {
  const [show, setShow] = useState(false);
  const [queryCharacter, result] = useLazyQuery(characterQuery);
  const [character, setCharacter] = useState<Character>();
  const [charHistory, setCharHistory] = useState<Character[]>([]);

  const getRandomCharacter = () => {
    let id = Math.floor(Math.random() * 826);
    queryCharacter({ variables: { id } });
  };

  const getCharacter = (id: number) => {
    queryCharacter({ variables: { id } });
    setShow(false);
  };

  useEffect(() => {
    if (result.data) {
      setCharacter(result.data.character);
      if (!charHistory.find((elm) => elm.id === result.data.character!.id)) {
        setCharHistory([...charHistory, result.data.character]);
      }
    }
  }, [result]);

  return (
    <StyledApp>
      <StyledContainer>
        <Hero />
        {character ? <Card character={character} /> : null}
        {result.error ? <h1>Error! please try again later</h1> : null}
      </StyledContainer>

      <History
        show={show}
        characters={charHistory}
        getCharacter={getCharacter}
      />
      <StyledContainer buttonContainer>
        <MainButton onClick={() => setShow(!show)}>History</MainButton>
        <MainButton onClick={() => getRandomCharacter()}>Generate</MainButton>
      </StyledContainer>
    </StyledApp>
  );
};

export default App;
