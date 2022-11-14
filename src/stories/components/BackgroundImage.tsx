import React, { FC } from "react";
import styled from "styled-components";
import { color } from "./../shared/styles.js";

const StyledBgImg = styled((props) => <div {...props} />)`
  height: 100vh;

  ${(props) =>
    props.bgcolor !== "default" &&
    `
      background-color: ${props.bgcolor};
    `}

  ${(props) =>
    props.bgcolor === "default" &&
    `
      background-color: ${color.primary};
    `}

  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

// Types
interface BackgroundImageProps {
  bgcolor?: string;
  src: string;
}

const BackgroundImage: FC<BackgroundImageProps> = (props) => (
  <StyledBgImg {...props} />
);

export default BackgroundImage;
