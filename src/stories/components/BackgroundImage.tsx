import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

const StyledBgImg = styled((props) => <div {...props} />)`
  height: 100vh;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : props.theme.colors.bgPrimary};
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
