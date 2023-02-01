import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";
import classnames from "classnames";

// Contexts
import LayoutContext from "./../LayoutContext";

// Styles
const StyledMenuClose = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 32px;
  overflow: hidden;
  transform: rotate(0deg);
  width: 32px;
  z-index: 1000;

  &.is-open {
    z-index: 99999;

    span {
      background: ${color.black};

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
        left: 50%;
        top: 12px;
        width: 0%;
      }
    }
  }
`;

const StyledSpan = styled.span`
  background: ${color.black};
  border-radius: 9px;
  display: block;
  height: 3px;
  left: 0;
  opacity: 1;
  position: absolute;
  transform: rotate(0deg);
  transition: 0.125s ease-in-out;
  width: 100%;

  &:nth-child(1) {
    top: 2px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 14px;
  }

  &:nth-child(4) {
    top: 26px;
  }
`;

export interface MenuCloseProps {}

const MenuClose: FC<MenuCloseProps> = () => {
  const { isOpen, setIsOpen } = useContext(LayoutContext);

  return (
    <StyledMenuClose
      className={classnames(`${prefix}-menu-close`, { "is-open": isOpen })}
      onClick={() => {
        document.body.style.overflow = isOpen === true ? "scroll" : "hidden";
        setIsOpen(!isOpen);
      }}
    >
      <StyledSpan />
      <StyledSpan />
      <StyledSpan />
      <StyledSpan />
    </StyledMenuClose>
  );
};

export default MenuClose;
