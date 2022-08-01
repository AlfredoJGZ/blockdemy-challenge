import HeroImage from "../images/Rick_and_Morty.webp";
import styled from "styled-components";

const StyledHero = styled.img`
  width: min(80vw, 45rem);
`;

const Hero = () => {
  return <StyledHero src={HeroImage} alt="Background Hero" />;
};

export default Hero;
