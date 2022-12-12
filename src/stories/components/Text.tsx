import React, { FC } from "react";
import styled from "styled-components";

// Styles
const StyledText = styled((props) => <p {...props} />)`
  color: ${(props) => props.color};
`;

interface TextProps {
  color?: string;
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
}

const Text: FC<TextProps> = ({ text, variant }) => {
  const getVariant = (variant: string) => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      case "p":
        return "p";
      case "span":
        return "span";
      case "small":
        return "small";
      default:
        return "p";
    }
  };

  return React.createElement(getVariant(variant ? variant : "p"), {}, text);
};

export default Text;
