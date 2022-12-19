import React, { useState, FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Styles
const LinkTranslate = styled((props) => <a {...props} />)`
  border-bottom: 2px solid ${(props) => props.theme.colors.transparent};
  color: ${(props) => props.theme.colors.body};
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.6px;
  padding-bottom: 4px;
  text-decoration: none;
  /* text-transform: uppercase; */

  /* TODO: improve hover effect */
  &.active,
  &:hover,
  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.body};
  }

  &:visited {
    color: ${(props) => props.theme.colors.body};
    text-decoration: none;
  }
`;

// Types
interface Language {
  name: string;
  classes?: string;
}

export interface DesktopLanguagesProps {
  languages: Language[];
}

const DesktopLanguages: FC<DesktopLanguagesProps> = ({ languages }) => {
  const { i18n } = useTranslation();

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
      {languages.map((language: Language, index: number) => (
        <LinkTranslate
          className={`${
            language.classes ? language.classes : ""
          } ${prefix}-language-link`}
          key={index}
          onClick={() => {
            changeLocale(language ? language.name : "es");
            //   open !== undefined &&
            //     setLanguage !== undefined &&
            //     setLanguage(index);
          }}
        >
          {language.name}
        </LinkTranslate>
      ))}
    </div>
  );
};

export default DesktopLanguages;
