import React, { FC } from "react";
import styled from "styled-components";
import Mask from "./Mask";

const StyledBgImg = styled((props) => <div {...props} />)`
  /* TODO: replace red by theme color */
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : `red`)};
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  z-index: -1;

  @media (min-width: 992px) {
    /* TODO: analyze code improvement */
    height: calc(100vh);
    /* height: calc(100vh - 80px); */
  }
`;

// Types
interface BackgroundImageProps {
  bgColor?: string;
  src: string;
  alt: string;
  mask?: boolean;
}

const BackgroundImage: FC<BackgroundImageProps> = ({
  // TODO: move color to variables
  bgColor = "bg-gun-powder",
  src = "",
  alt = "",
  mask = true,
}) => {
  return (
    <>
      <StyledBgImg />
      {mask && <Mask />}
    </>
  );
};

export default BackgroundImage;
