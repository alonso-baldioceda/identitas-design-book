import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../../shared/styles";

// Components
import BackgroundImage from "./../../components/BackgroundImage";
import Mask from "./../../components/Mask";
import Panel, { PanelProps } from "../Panel";
import Text, { TextProps } from "./../../components/Text";

// Styles
const StyledHero = styled((props) => <div {...props} />)`
  height: 50vh;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    ${(props) =>
      props.height &&
      `
      height: ${props.height};
    `}
  }
`;

// Types
export interface HeroProps {
  height?: string | number;
  mask?: boolean;
  maskColor?: string;
  maxWidth?: string;
  opacity?: number;
  panel?: PanelProps;
  text?: TextProps;
  src: string;
}

const Hero: FC<HeroProps> = ({
  height,
  mask,
  maskColor,
  maxWidth,
  opacity,
  panel,
  text,
  src,
}) => {
  return (
    <StyledHero
      className={`${prefix}-hero`}
      style={{ maxWidth: maxWidth ? maxWidth : 2200 }}
      height={height ? height : null}
    >
      <BackgroundImage src={src} />
      {mask && (
        <Mask
          bgColor={maskColor ? maskColor : ""}
          opacity={opacity ? opacity : 25}
        />
      )}
      <Panel {...panel}>
        <Text {...text} />
      </Panel>
    </StyledHero>
  );
};

export default Hero;
