import React, { useState, useContext, FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
// import classnames from "classnames";
import { motion } from "framer-motion";
import { prefix, color } from "./../../shared/styles.js";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Constants
import animationParent from "./../../../shared/constants/animations.js";

// Styles
const Label = styled.p`
  border-bottom: 2px solid transparent;
  color: ${color.white};
  font-size: 22px;
  font-weight: 500;
  padding: 0;
  text-transform: capitalize;
`;

const LinkTranslate = styled.a`
  background: transparent;
  border-bottom: 2px solid transparent;
  color: ${color.white};
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  padding: 0;
  text-decoration: none;
  transition: all 0.5s ease;
  text-transform: capitalize;

  &:hover {
    border-bottom: 2px solid blue;
    color: red;
    text-decoration: none;
  }

  &:visited {
    color: ${color.white} !important;
  }

  &:focus {
    outline: none;
  }

  &.active {
    border-bottom: 2px solid var(--terracotta);
    color: ${color.white} !important;
  }
`;

// Interface
export interface MobileLanguagesProps {
  languages: string[];
  linkMb?: string;
  translate?: string;
  translateMy?: number;
}

const MobileLanguages: FC<MobileLanguagesProps> = ({
  languages,
  linkMb = 2,
  translate,
  translateMy = 2,
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
    <motion.div variants={animationParent}>
      <Label className={`my-${translateMy}`}>{translate}:</Label>
      <div className={`${prefix}-languages`}>
        {languages.map((language: string, index: number) => (
          <div key={index} className={`mb-${linkMb}`}>
            <LinkTranslate
              onClick={() => {
                changeLocale(language);
                //   open !== undefined &&
                //     setLanguage !== undefined &&
                //     setLanguage(index);
              }}
              // TODO: include active
              // className={classnames("text-capitalize", {
              // active: language === index,
              // })}
            >
              {language}
            </LinkTranslate>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileLanguages;
