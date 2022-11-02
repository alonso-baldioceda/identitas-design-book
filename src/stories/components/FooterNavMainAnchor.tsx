import React, { FC, useContext } from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles
const StyledAnchorLink = styled((props) => <AnchorLink {...props} />)`
  padding-top: 2px;
  text-decoration: none;
  transition: all 0.125s ease-out;
  z-index: 1;
`;

// Types
interface NavigationAnchorProps {
  appearance?: string;
  index: number;
  onAnchorLinkClick: (arg: number) => void;
  stripHash?: boolean;
  text: string;
  to: string;
}

const FooterNavMainAnchor: FC<NavigationAnchorProps> = ({
  appearance = "white",
  index = -1,
  onAnchorLinkClick,
  stripHash = true,
  text,
  to,
}) => (
  <StyledAnchorLink
    to={`/${to}`}
    stripHash={stripHash}
    onAnchorLinkClick={() => onAnchorLinkClick(index)}
    className={`text-${appearance} p-0 d-block position-relative`}
  >
    {text}
  </StyledAnchorLink>
);

export default FooterNavMainAnchor;
