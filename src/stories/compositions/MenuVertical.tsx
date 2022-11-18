import React, { useContext, FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import classnames from "classnames";
import { color } from "./../shared/styles.js";

// Components
import LanguageSelector from "./../components/LanguageSelector";
import LinkGatsby from "./../components/LinkGatsby";
import LinkScroll from "./../components/LinkScroll";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types
import Link from "../../shared/interfaces/link";
import LinkType from "../../shared/enums/linkType";

// Styles
const StyledMenuVertical = styled.div`
  backdrop-filter: blur(4px);
  background: rgba(2, 18, 23, 1) !important;
  /* display: none; */
  bottom: 0;
  left: 0;
  padding: 3rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.125s ease !important;
  z-index: 88888;

  &.open {
    display: block !important;
  }
`;

// const StyledLink = styled((props) => <Link {...props} />)`
//   background: transparent;
//   border-bottom: 2px solid transparent;
//   color: ${color.white};
//   display: inline-block;
//   font-size: 22px;
//   font-weight: 500;
//   padding: 0;
//   text-decoration: none;
//   transition: all 0.5s ease;

//   &:hover {
//     border-bottom: 2px solid blue;
//     color: red;
//     text-decoration: none;
//   }

//   &:visited {
//     color: ${color.white} !important;
//   }

//   &:focus {
//     outline: none;
//   }

//   &.active {
//     border-bottom: 2px solid var(--terracotta);
//     color: ${color.white} !important;
//   }
// `;

const LanguagesWrapper = styled.div`
  display: inline-block;

  a {
    color: ${color.white};
    display: block;
    font-size: 22px;
    font-weight: 500;
    text-transform: capitalize;
    transition: all 0.5s ease;

    &:nth-child(1) {
      width: 85px;
    }

    &:nth-child(2) {
      width: 80px;
    }

    &:hover {
      color: var(--manhattan);
      text-decoration: underline;
    }

    &.active {
      border-bottom: 2px solid red;
    }
  }
`;

const Label = styled.p`
  color: var(--acapulco);
  font-size: 22px;
  font-weight: 500;
`;

// Animations
const motionDefault = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.0125,
      delayChildren: 0.125,
    },
  },
};

const motionDefaultItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Types
interface MenuVerticalProps {
  backgroundColor: string;
  hideFrom?: string;
  languages: string[];
  linkMb?: number;
  navigation: Link[];
  isOpen: boolean;
  textColor?: string;
  translate: string;
  translateMb?: number;
}

const MenuVertical: FC<MenuVerticalProps> = ({
  backgroundColor = color.black,
  hideFrom = "xl",
  languages,
  linkMb = 2,
  navigation,
  isOpen,
  translate,
  translateMb = 2,
}) => {
  //   const { t } = useTranslation();

  //   const context = useContext(GlobalContext);

  //   const { menu, active, setActive, isOpen, toggleMenu } = context;

  //   const languages = {
  //     es: "Español",
  //     en: "English",
  //   };

  return (
    <StyledMenuVertical
      className={classnames(`d-${hideFrom}-none bg-${backgroundColor}`, {
        open: isOpen,
      })}
    >
      <motion.div
        initial="hidden"
        animate={`${isOpen ? "visible" : ""}`}
        variants={motionDefault}
      >
        {navigation.map((navItem: Link, index: number) => (
          <motion.div variants={motionDefaultItem} key={index}>
            {navItem.type && navItem.type === LinkType.Link ? (
              <LinkGatsby text={navItem.text} to={navItem.anchor} />
            ) : (
              <LinkScroll text={navItem.text} to={navItem.anchor} />
            )}
            {/* // onClick={() => {
              //   setActive !== undefined && setActive(index);
              //   toggleMenu !== undefined &&
              //     isOpen !== undefined &&
              //     toggleMenu(isOpen);
              // */}
          </motion.div>
        ))}
        <hr className="my-2" />
        <motion.div variants={motionDefaultItem}>
          <Label className={`mb-${translateMb}`}>{translate}</Label>
          <LanguagesWrapper>
            <LanguageSelector languages={languages} />
          </LanguagesWrapper>
        </motion.div>
      </motion.div>
    </StyledMenuVertical>
  );
};

export default MenuVertical;
