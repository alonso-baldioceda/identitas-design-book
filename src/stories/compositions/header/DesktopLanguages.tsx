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
  text-transform: uppercase;

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

export interface DesktopLanguagesProps {
  languages: string[];
  me?: number;
  meSm?: number;
  meMd?: number;
  meLg?: number;
  meXl?: number;
}

const DesktopLanguages: FC<DesktopLanguagesProps> = ({
  languages,
  me,
  meSm,
  meMd,
  meLg,
  meXl,
}) => {
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
      {languages.map((language: string, index: number) => (
        <LinkTranslate
          className={classnames(
            `me-${me ? me : 3}`,
            `me-sm-${meSm ? meSm : 3}`,
            `me-md-${meMd ? meMd : 3}`,
            `me-lg-${meLg ? meLg : 3}`,
            `me-xl-${meXl ? meXl : 3}`,
            `${prefix}-language-link`
          )}
          key={index}
          onClick={() => {
            changeLocale(language);
            //   open !== undefined &&
            //     setLanguage !== undefined &&
            //     setLanguage(index);
          }}
        >
          {language}
        </LinkTranslate>
      ))}
    </div>
  );
};

export default DesktopLanguages;
