import React, { useState, useContext, FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
// import classnames from "classnames";
import { prefix, color } from "./../../shared/styles.js";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles
const LinkTranslate = styled.a`
  border-bottom: 2px solid transparent;
  color: ${color.black};
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.6px;
  padding-bottom: 4px;
  text-decoration: none;
  text-transform: uppercase;

  &:first-of-type {
    margin-right: 0.75rem;
  }

  /* TODO: improve hover effect */
  &:hover {
    border-bottom: 2px solid red;
    color: ${color.black} !important;
    text-decoration: none !important;
  }

  &:visited {
    color: ${color.black} !important;
    text-decoration: none;
  }

  @media (min-width: 1200px) {
    margin-right: 1.25rem;

    &:hover {
      color: ${color.black} !important;
    }

    &:visited {
      color: ${color.black} !important;
    }

    &:focus {
      outline: none;
    }
  }

  &.active {
    border-bottom: 2px solid red;
  }
`;

export interface DesktopLanguagesProps {
  languages: string[];
}

const DesktopLanguages: FC<DesktopLanguagesProps> = ({ languages }) => {
  const { i18n } = useTranslation();
  //   const context = useContext(GlobalContext);
  //   const { language, setLanguage, open } = context;

  const [, setLanguage] = useState({
    language: "es",
  });

  const changeLocale = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage((oldValues) => ({
      ...oldValues,
      language: language,
    }));
  };

  return (
    <div className={`${prefix}-languages`}>
      {languages.map((language: string, index: number) => (
        <LinkTranslate
          key={index}
          onClick={() => {
            changeLocale(language);
            //   open !== undefined &&
            //     setLanguage !== undefined &&
            //     setLanguage(index);
          }}
          // className={classnames("text-capitalize", {
          // active: language === index,
          // })}
        >
          {language}
        </LinkTranslate>
      ))}
    </div>
  );
};

export default DesktopLanguages;
