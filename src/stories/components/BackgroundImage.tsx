import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles";

const StyledBgImg = styled((props) => <div {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background-color: ${props.bgcolor};
    `}

  ${(props) =>
    props.src &&
    `
      background-image: url(${props.src});
    `}

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
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
    bgcolor={bgColor ? bgColor : color.primary}
    src={src}
  />
);

export default BackgroundImage;
