import React, { useContext, FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import classnames from "classnames";
import { color } from "./../shared/styles.js";

// Components
import MenuVerticalNav from "./MenuVerticalNav";
import MenuVerticalLaguages from "./MenuVerticalLanguages";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Constants
import animationParent from "./../../shared/constants/animations.js";

// Types
import Link from "../../shared/interfaces/link";

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
  /* TODO: move transition to variables  */
  transition: opacity 0.125s ease !important;
  z-index: 88888;

  &.open {
    display: block !important;
  }

  /* TODO: analyze what to do */
  hr {
    background-color: white;
  }
`;

// Types
interface MenuVerticalProps {
  bgColor: string;
  hideFrom?: string;
  isOpen: boolean;
  languages: string[];
  navigation: Link[];
  px?: number;
  py?: number;
  separator?: number;
  translate?: string;
}

const MenuVertical: FC<MenuVerticalProps> = ({
  bgColor = color.black,
  hideFrom = "xl",
  isOpen,
  languages,
  navigation,
  px = 4,
  py = 4,
  separator = 4,
  translate,
}) => {
  //   const { t } = useTranslation();

  //   const context = useContext(GlobalContext);

  //   const { active, setActive, isOpen, toggleMenu } = context;

  //   const languages = {
  //     es: "Español",
  //     en: "English",
  //   };

  return (
    <StyledMenuVertical
      className={classnames(
        `d-${hideFrom}-none bg-${bgColor} px-${px} py-${py}`,
        {
          open: isOpen,
        }
      )}
    >
      <motion.div
        initial="hidden"
        animate={`${isOpen ? "visible" : ""}`}
        variants={animationParent}
      >
        <MenuVerticalNav
          navigation={navigation}
          bgColor={bgColor}
          isOpen={true}
        />
        <hr className={`my-${separator}`} />
        <MenuVerticalLaguages languages={languages} translate={translate} />
      </motion.div>
    </StyledMenuVertical>
  );
};

export default MenuVertical;
