import styled from "styled-components";
import { Character } from "../App";

type thisCharacter = {
  character: Character;
};

const Card = ({ character }: thisCharacter) => {
  return (
    <StyledCard>
      <StyledImg src={character.image} />
      <div>
        <h1>{character.name}</h1>
        <span>{`Character ID: ${character.id}`}</span>
      </div>
      <div>
        <h2>Status</h2>
        <p>{character.status}</p>
      </div>
      <div>
        <h2>Species</h2>
        <p>{character.species}</p>
      </div>
      <div>
        <h2>Gender</h2>
        <p>{character.gender}</p>
      </div>
    </StyledCard>
  );
};

const StyledImg = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

const StyledCard = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 2rem;
  padding-bottom: 2rem;
  div {
    color: #fff;
    margin: 0 1rem;
    padding-bottom: 0.5rem 0;
    border-bottom: solid 0.1rem;
  }
  span {
    margin-bottom: 0.5rem;
    display: block;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0.5rem;
  }
`;

export default Card;
