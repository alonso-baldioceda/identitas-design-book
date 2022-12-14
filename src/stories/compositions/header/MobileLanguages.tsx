import React, { useState, useContext, FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles
const Label = styled.p`
  border-bottom: 2px solid ${(props) => props.theme.colors.transparent};
  color: ${(props) => props.theme.colors.white};
  font-size: 22px;
  font-weight: 500;
  padding: 0;
  text-transform: capitalize;
`;

const LinkTranslate = styled.a`
  color: ${(props) => props.theme.colors.white};
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  padding: 0;
  text-decoration: none;
  /* TODO: move to variable default */
  transition: all 0.5s ease;
  text-transform: capitalize;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }

  &:visited {
    color: ${(props) => props.theme.colors.white} !important;
  }

  &:focus {
    outline: none;
  }

  &.active {
    color: ${(props) => props.theme.colors.white} !important;
  }
`;

// Interface
interface Language {
  name: string;
  classes?: string;
}

export interface MobileLanguagesProps {
  languages: Language[];
  translate?: string;
  translateMy?: number;
}

const MobileLanguages: FC<MobileLanguagesProps> = ({
  languages,
  translate,
  translateMy,
}) => {
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
    <div>
      <Label className={`my-${translateMy}`}>{translate}:</Label>
      <div className={`${prefix}-languages`}>
        {languages.map((language: Language, index: number) => (
          <div key={index}>
            <LinkTranslate
              onClick={() => {
                changeLocale(language.name);
                //   open !== undefined &&
                //     setLanguage !== undefined &&
                //     setLanguage(index);
              }}
              className={language.classes ? language.classes : ""}
              // TODO: include active
              // className={classnames("text-capitalize", {
              // active: language === index,
              // })}
            >
              {language.name}
            </LinkTranslate>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileLanguages;
