import React, { FC } from "react";
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
  text: string;
  mask?: boolean;
  bgColor: string;
}

const Hero: FC<HeroProps> = ({
  bgColor = "default",
  mask = true,
  src,
  text = "some text here!!",
}) => {
  return (
    <StyledHero className="position-relative w-100 overflow-hidden vh-100">
      <BackgroundImage src={src} bgcolor="default" />
      {mask && <Mask bgcolor={bgColor} />}
      <div className="position-absolute start-0 bottom-0 p-4 w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-8 col-xl-6">
              {/* TODO: move text color (e.g: text-white) to props */}
              <h1 className="mb-0 text-white">{text}</h1>
            </div>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
