import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";

// Components
import BackgroundImage from "./BackgroundImage";
import Mask from "./Mask";

// Styles
const StyledHero = styled.div`
  height: 100vh;
  max-width: 2200px;
  overflow: hidden;
  position: relative;
  width: "100%";
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
  mask = color.background,
  src,
  text = "some text here!!",
}) => {
  return (
    <StyledHero className={`${prefix}-hero`}>
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
