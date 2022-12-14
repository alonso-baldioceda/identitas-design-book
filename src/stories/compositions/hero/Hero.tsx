import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import BackgroundImage from "./../../components/BackgroundImage";
import Mask from "./../../components/Mask";
import Panel, { PanelProps } from "./Panel";

// Styles
const StyledHero = styled((props) => <div {...props} />)`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: "100%";
`;

// Types
interface HeroProps {
  bgColor?: string;
  mask?: boolean;
  maskColor: string;
  maxWidth?: string;
  src: string;
  panel?: PanelProps;
}

const Hero: FC<HeroProps> = ({
  bgColor,
  mask,
  maskColor,
  maxWidth,
  src,
  panel,
}) => {
  return (
    <StyledHero
      className={`${prefix}-hero`}
      style={{ maxWidth: maxWidth ? maxWidth : 2200 }}
    >
      <BackgroundImage src={src} />
      {mask && <Mask bgcolor={maskColor} />}
      <Panel
        {...panel}
        text={panel ? panel.text : ""}
        position={panel ? panel.position : "bottom-start"}
      />
    </StyledHero>
  );
};

export default Hero;
