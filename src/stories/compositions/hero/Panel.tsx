import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";
import classnames from "classnames";

// Styles
const StyledPanel = styled((props) => <div {...props} />)`
  position: absolute;
  width: 100%;
`;

const Heading = styled((props) => <h1 {...props} />)`
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  margin-bottom: 0;
`;

// Types
interface PanelProps {
  bgColor?: string;
  color?: string;
  text: string;
  size?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  spacing?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const Panel: FC<PanelProps> = ({ bgColor, color, size, spacing, text }) => (
  // TODO: add position to props
  // top-right, top-left, top-center, bottom-right, bottom-left, bottom-center, center-center, center-left, center-right
  <StyledPanel
    className={classnames(
      `start-0 bottom-0`,
      `p-${spacing ? spacing.xs : 2}`,
      `p-sm-${spacing ? spacing.sm : 2}`,
      `p-md-${spacing ? spacing.md : 2}`,
      `p-lg-${spacing ? spacing.lg : 3}`,
      `p-xl-${spacing ? spacing.xl : 3}`,
      `${prefix}-panel`
    )}
  >
    <div className="container-fluid">
      <div className="row">
        <div
          className={classnames(
            `col-${size ? size.xs : 12}`,
            `col-sm-${size ? size.sm : 12}`,
            `col-md-${size ? size.md : 12}`,
            `col-lg-${size ? size.lg : 8}`,
            `col-xl-${size ? size.xl : 6}`
          )}
          //   bgcolor={bgColor ? bgColor : null}
        >
          <Heading color={color ? color : null}>{text}</Heading>
        </div>
      </div>
    </div>
  </StyledPanel>
);

export default Panel;
