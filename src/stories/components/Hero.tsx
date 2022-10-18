import React, { FC, ReactNode } from "react";
import styled from "styled-components";

// Components
import BackgroundImage from "./BackgroundImage";
import Mask from "./Mask";

// Styles
const StyledHero = styled.div`
  max-width: 2200px;
`;

// Types
interface HeroProps {
  src: string;
  children: ReactNode | ReactNode[];
  mask?: boolean;
  bgColor: string;
}

const Hero: FC<HeroProps> = ({
  src,
  children,
  mask = true,
  bgColor = "default",
}) => {
  return (
    <StyledHero className="position-relative w-100 overflow-hidden vh-100">
      <BackgroundImage src={src} bgcolor="default" />
      {mask && <Mask bgcolor={bgColor} />}
      {children}
    </StyledHero>
  );
};

export default Hero;
