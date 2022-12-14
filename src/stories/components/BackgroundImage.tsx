import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

const StyledBgImg = styled((props) => <div {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background-color: ${props.bgcolor};
    `}

  ${(props) =>
    !props.bgcolor &&
    `
      background-color: ${props.theme.colors.bgPrimary};
    `}

  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  z-index: -1;
`;

// Types
interface BackgroundImageProps {
  bgColor?: string;
  src: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({ bgColor, src }) => (
  <StyledBgImg
    className={`${prefix}-background-image`}
    bgcolor={bgColor}
    src={src}
  />
);

export default BackgroundImage;
