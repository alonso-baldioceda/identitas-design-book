import React, { useState, FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import classnames from "classnames";
import { prefix, color } from "./../../shared/styles.js";

// Styles
const LinkTranslate = styled.a`
  border-bottom: 2px solid ${color.transparent};
  color: ${color.body};
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.6px;
  padding-bottom: 4px;
  text-decoration: none;

  /* TODO: improve hover effect */
  &.active,
  &:hover,
  &:focus {
    border-bottom: 2px solid ${color.secondary};
    color: ${color.body};
  }

  &:visited {
    color: ${color.body};
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
    console.log("language", language);
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
          key={index}
          className={classnames(
            { [`${language.classes}`]: language.classes },
            `${prefix}-language-link`
          )}
          onClick={() => changeLocale(language ? language.name : "es")}
        >
          {language.name}
        </LinkTranslate>
      ))}
    </div>
  );
};

export default DesktopLanguages;
