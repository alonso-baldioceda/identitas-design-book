import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";
import classnames from "classnames";

// Styles
const StyledMenuClose = styled((props) => <div {...props} />)`
  cursor: pointer;
  display: inline-block;
  height: 32px;
  overflow: hidden;
  transform: rotate(0deg);
  width: 32px;
  z-index: 1000;

  span {
    background: ${color.black};
    border-radius: 9px;
    display: block;
    height: 3px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
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
  }

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

// Types
interface SpanProps {
  colorClose: string;
  colorOpen: string;
  isOpen: boolean;
}

export interface MenuCloseProps {
  colorClose?: string;
  colorOpen?: string;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Span: FC<SpanProps> = ({ colorClose, colorOpen, isOpen }) => (
  <span className={`${isOpen ? `bg-${colorClose}` : `bg-${colorOpen}`}`}></span>
);

const MenuClose: FC<MenuCloseProps> = ({
  colorClose = "dark",
  colorOpen = "dark",
  isOpen,
  setIsOpen,
}) => (
  <StyledMenuClose
    className={classnames(`${prefix}-menu-close`, { "is-open": isOpen })}
    onClick={() => {
      document.body.style.overflow = isOpen === true ? "scroll" : "hidden";
      setIsOpen(!isOpen);
    }}
  >
    <Span isOpen={isOpen} colorClose={colorClose} colorOpen={colorOpen} />
    <Span isOpen={isOpen} colorClose={colorClose} colorOpen={colorOpen} />
    <Span isOpen={isOpen} colorClose={colorClose} colorOpen={colorOpen} />
    <Span isOpen={isOpen} colorClose={colorClose} colorOpen={colorOpen} />
  </StyledMenuClose>
);

export default MenuClose;
