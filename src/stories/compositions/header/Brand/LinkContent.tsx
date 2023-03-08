import React, { FC } from "react";

// Components
import Text, { TextProps } from "./../../../components/Text.tsx";
import SVG, { SVGProps } from "./../../../components/SVG.tsx";

// Types
interface LinkContentProps {
  showNameOnMobile?: boolean;
  icon: typeof SVGProps;
  text: typeof TextProps;
}

const LinkContent: FC<LinkContentProps> = ({
  showNameOnMobile,
  icon,
  text,
}) => (
  <>
    <SVG {...icon} size={icon?.size ? icon.size : "sm"} />
    {showNameOnMobile ? <Text {...text} /> : null}
  </>
);

export default LinkContent;
