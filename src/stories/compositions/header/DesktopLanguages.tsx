import React, { useState, FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import classnames from "classnames";
import { prefix, color } from "./../../shared/styles.js";

// Styles
const LinkTranslate = styled.a`
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.6px;
  padding-bottom: 4px;
  text-decoration: none;
  transition: all 0.15s ease;

  &:visited {
    text-decoration: none;
  }
`;

// Types
interface Language {
  name: string;
  classes?: string;
}

export interface DesktopLanguagesProps {
  hideLanguagesFrom?: string;
  languages: Language[];
}

const DesktopLanguages: FC<DesktopLanguagesProps> = ({
  hideLanguagesFrom,
  languages,
}) => {
  const { i18n } = useTranslation();

  const [, setLanguage] = useState<string>("es");

  const changeLocale = (language: string) => {
    i18n.changeLanguage(language);

    setLanguage(language);
  };

  return (
    { languages } && (
      <div
        className={classnames(
          `d-none`,
          {
            [`d-${hideLanguagesFrom}-inline`]: hideLanguagesFrom,
          },
          { "d-xl-inline": !hideLanguagesFrom },
          `${prefix}-languages`
        )}
      >
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
    )
  );
};

export default DesktopLanguages;
