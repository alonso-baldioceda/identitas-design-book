import React, { FC } from "react";
import styled from "styled-components";
import { color } from "./../shared/styles.js";

// Styles
const StyledMask = styled((props) => <div {...props} />)`
  background: ${(props) =>
    props.bgcolor !== "default" ? props.bgcolor : color.background};
`;

// Types
interface MaskProps {
  bgcolor?: string;
}

const Mask: FC<MaskProps> = ({ bgcolor = "default" }) => {
  return (
    <StyledMask
      bgcolor={bgcolor}
      className="position-absolute bottom-0 start-0 end-0 top-0 w-100 h-100"
    />
  );
};

export default Mask;
