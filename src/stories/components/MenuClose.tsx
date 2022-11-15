import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles

const StyledMenuIcon = styled((props) => <div {...props} />)`
  cursor: pointer;
  height: 28px;
  overflow: hidden;
  position: fixed;
  right: 15px;
  top: 28px;
  transform: rotate(0deg);
  width: 35px;
  z-index: 1000;

  span {
    ${(props) =>
      props.color ? `background: ${props.color};` : `${color.black};`}
    border-radius: 9px;
    display: block;
    height: 3px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    width: 100%;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 12px;
  }

  span:nth-child(4) {
    top: 24px;
  }

  &.open {
    z-index: 99999;

    span {
      background: ${color.white};

      &:nth-child(1) {
        left: 50%;
        top: 12px;
        width: 0%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }

      &:nth-child(4) {
        top: 12px;
        width: 0%;
        left: 50%;
      }
    }
  }
`;

interface MenuCloseProps {
  color: string;
}

const MenuClose: FC<MenuCloseProps> = ({ color }) => {
  //   const context = useContext(GlobalContext);

  //   const { open, toggleMenu } = context;

  return (
    <StyledMenuIcon
      //   className={`d-xl-none ${open ? "open" : ""}`}
      className={`d-xl-none ${prefix}-menu-close`}
      color={color}
      onClick={
        () => console.log("hola")
        // toggleMenu !== undefined && open !== undefined && toggleMenu(open)
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledMenuIcon>
  );
};

export default MenuClose;
