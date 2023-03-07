import React, { useState, FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { prefix } from "./../../../shared/styles.js";

// Components
import Text, { TextProps } from "../../components/Text";

// Styles
const MobileLanguagesStyled = styled.div`
  label {
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    text-transform: capitalize;
  }
`;

const LinkTranslate = styled.a`
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  padding: 0;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.15s ease;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

// Interface
interface Language {
  name: string;
  classes?: string;
}

export interface MobileLanguagesProps {
  languages: Language[];
  label?: TextProps;
}

const MobileLanguages: FC<MobileLanguagesProps> = ({ languages, label }) => {
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
    <MobileLanguagesStyled className={`${prefix}-mobile-languages`}>
      <Text
        text={label?.text ? label.text : ""}
        classes={label?.classes ? label.classes : ""}
        variant={label?.variant ? label.variant : "label"}
      />
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
    </MobileLanguagesStyled>
  );
};

export default MobileLanguages;
