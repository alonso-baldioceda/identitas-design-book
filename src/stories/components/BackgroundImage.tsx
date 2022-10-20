import React, { FC } from "react";
import styled from "styled-components";
import { color } from "./../shared/styles.js";

const StyledBgImg = styled((props) => <div {...props} />)`
  background-color: ${(props) =>
    props.bgcolor !== "default" ? `${props.bgcolor}` : color.primary};
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
