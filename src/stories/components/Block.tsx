import React, { FC } from "react";
import classnames from "classnames";
import styled from "styled-components";

const StyledBlock = styled.section`
  transition: all 0.15 ease;
`;

export interface BlockProps {
  id?: string;
  classes?: string;
  children?: React.ReactNode;
}

const Block: FC<BlockProps> = ({ id, classes, children }) => (
  <StyledBlock
    className={classnames({ [`${classes}`]: classes })}
    id={`${id ? id : ""}`}
  >
    {children}
  </StyledBlock>
);

export default Block;
