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
export interface HeroProps {
  height?: string | number;
  mask?: boolean;
  maskColor?: string;
  maxWidth?: string;
  opacity?: number;
  panel?: PanelProps;
  src: string;
}

const Hero: FC<HeroProps> = ({
  height,
  mask,
  maskColor,
  maxWidth,
  opacity,
  panel,
  src,
}) => {
  return (
    <StyledHero
      className={`${prefix}-hero`}
      style={{ maxWidth: maxWidth ? maxWidth : 2200 }}
      height={height ? height : null}
    >
      {/* TODO: add a mobile image version */}
      <BackgroundImage src={src} />
      {mask && (
        <Mask
          bgColor={maskColor ? maskColor : ""}
          opacity={opacity ? opacity : 25}
        />
      )}
      <Panel {...panel} />
    </StyledHero>
  );
};

export default Hero;
