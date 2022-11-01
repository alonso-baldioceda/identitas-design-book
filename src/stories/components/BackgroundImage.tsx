import React, { FC } from "react";
import styled from "styled-components";
import { color } from "./../shared/styles.js";

// TODO: code gatsby-plugin-image && gatsby-background-image approach
// Most probably static query required
const StyledBgImg = styled((props) => <div {...props} />)`
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
  src: string;
  bgcolor?: string;
}

const BackgroundImage: FC<BackgroundImageProps> = (props) => (
  <StyledBgImg className="vh-100" {...props} />
);

export default BackgroundImage;
