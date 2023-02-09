import React, { FC } from "react";

// Components
import Text, { TextProps } from "./../../../components/Text";
import SVG, { SVGProps } from "./../../../components/SVG";

// Types
import Size from "./../../../../shared/enums/size";

// Types
interface LinkContentProps {
  showNameOnMobile?: boolean;
  icon: SVGProps;
  text: TextProps;
}

const LinkContent: FC<LinkContentProps> = ({
  showNameOnMobile,
  icon,
  text,
}) => (
  <>
    <SVG {...icon} size={icon?.size ? icon.size : Size.sm} />
    {showNameOnMobile ? <Text {...text} /> : null}
  </>
);

export default LinkContent;
