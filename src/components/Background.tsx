import styled from "styled-components";
import Hero from "./Hero";

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(62, 149, 170);
  background: linear-gradient(
    90deg,
    rgba(62, 149, 170, 1) 0%,
    rgba(190, 222, 65, 1) 100%
  );
`;

const Background = () => {
  return (
    <StyledBackground>
      <Hero />
    </StyledBackground>
  );
};

export default Background;
