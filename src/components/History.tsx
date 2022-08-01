import styled from "styled-components";
import { Character } from "../App";

type history = {
  show: boolean;
  characters: Character[];
  getCharacter: (id: number) => any;
};

export const HistoryButton = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #42b5cb;
  img {
    max-width: 25%;
    border-radius: 0.5rem;
  }
  p {
    width: 75%;
  }
  &:hover {
    background-color: #41b5cb;
    p {
      color: #fff;
    }
  }
`;

const StyledHistory = styled.aside<history>`
  position: absolute;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  color: #41b5cb;
  width: min(50%, 20rem);
  height: 100%;
  transition: all 0.3s ease;
  right: 0;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  box-shadow: 1px 0px 15px 5px #42b5cb;
`;

const History = ({ show, characters, getCharacter }: history) => {
  return (
    <StyledHistory
      show={show}
      characters={characters}
      getCharacter={getCharacter}
    >
      {characters.length > 0 ? (
        characters.map((item) => (
          <HistoryButton key={item.id} onClick={() => getCharacter(item.id)}>
            <img src={item.image} />
            <p>{item.name}</p>
          </HistoryButton>
        ))
      ) : (
        <h4>No items on history</h4>
      )}
    </StyledHistory>
  );
};

export default History;
