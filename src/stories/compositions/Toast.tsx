import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

// Components
import Text, { TextProps } from "./../components/Text";

// Styles
const StyledToast = styled((props) => <div {...props} />)`
  ${(props) =>
    props.type &&
    props.type === "success" &&
    `
      background-color: ${props.type};
    `}

  ${(props) =>
    props.type &&
    props.type === "danger" &&
    `
      background-color: ${props.type};
    `}

  /* ${(props) =>
    props.type &&
    props.type === "warning" &&
    `
      background-color: ${props.type};
    `}

  ${(props) =>
    props.type &&
    props.type === "info" &&
    `
      background-color: ${props.type};
    `} */

  bottom: 0;
  right: 0;
`;

const StyledButton = styled.button`
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  opacity: 0.85;
`;

// Types
interface ToastProps {
  button: {
    classes?: string;
  };
  classes?: string;
  conf: {
    heading: string;
    text: string;
    type: string;
    visible: boolean;
  };
  handleClose: () => void;
  heading: TextProps;
  text: TextProps;
}

const Toast: FC<ToastProps> = ({
  button,
  classes,
  conf,
  handleClose,
  heading,
  text,
}) => (
  <StyledToast
    className={classnames(
      { [`${classes}`]: classes },
      { "d-flex": conf.visible === true },
      { "d-none": conf.visible === false },
      `${prefix}-toast`
    )}
    aria-atomic="true"
    aria-live="assertive"
    role="alert"
    type={conf.type ? conf.type : "success"}
  >
    <div className="d-flex">
      <div className="toast-body">
        <Text {...heading} />
        <Text {...text} />
      </div>
      <StyledButton
        type="button"
        className={button.classes ? button.classes : ""}
        data-bs-dismiss="toast"
        aria-label="Close"
        onClick={handleClose}
      />
    </div>
  </StyledToast>
);

export default Toast;
