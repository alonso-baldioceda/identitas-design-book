import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import BackgroundImage from "./../../components/BackgroundImage";
import Mask from "./../../components/Mask";
import Panel, { PanelProps } from "./Panel";

// Styles
const StyledHero = styled((props) => <div {...props} />)`
  ${(props) =>
    props.height &&
    `
      height: ${props.height};
    `}

  ${(props) =>
    !props.height &&
    `
      height: 100vh;
    `}

  overflow: hidden;
  position: relative;
  width: 100%;
`;

// Types
interface HeroProps {
  mask?: boolean;
  maskColor: string;
  maxWidth?: string;
  src: string;
  panel?: PanelProps;
  height?: string | number;
}

const Hero: FC<HeroProps> = ({
  mask,
  maskColor,
  maxWidth,
  src,
  panel,
  height,
}) => {
  return (
    <StyledHero
      className={`${prefix}-hero`}
      style={{ maxWidth: maxWidth ? maxWidth : 2200 }}
      height={height ? height : null}
    >
      {/* TODO: add a mobile image version */}
      <BackgroundImage src={src} />
      {mask && <Mask bgColor={maskColor} opacity={25} />}
      <Panel {...panel} />
    </StyledHero>
  );
};

export default Hero;
