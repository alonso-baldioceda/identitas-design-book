import React, { useContext, FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import classnames from "classnames";
import { color } from "./../shared/styles.js";

// Components
import MobileNav from "./MobileNav";
import MobileLaguages from "./MobileLanguages";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Constants
import animationParent from "./../../shared/constants/animations.js";

// Types
import Link from "../../shared/interfaces/link";

// Styles
const StyledMobile = styled.div`
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
interface MobileProps {
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

const Mobile: FC<MobileProps> = ({
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
    <StyledMobile
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
        <MobileNav navigation={navigation} bgColor={bgColor} isOpen={true} />
        <hr className={`my-${separator}`} />
        <MobileLaguages languages={languages} translate={translate} />
      </motion.div>
    </StyledMobile>
  );
};

export default Mobile;
