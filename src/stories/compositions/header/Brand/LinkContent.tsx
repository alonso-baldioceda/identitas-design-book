import React, { FC } from "react";

// Components
import Text, { TextProps } from "./../../../components/Text";
import SVG, { SVGProps } from "./../../../components/SVG";

// Types
import Size from "./../../../../shared/enums/size";

// Types
interface LinkContentProps {
  hideNameOnMobile?: boolean;
  icon: SVGProps;
  text: TextProps;
}

const LinkContent: FC<LinkContentProps> = ({
  hideNameOnMobile,
  icon,
  text,
}) => (
  <>
    <SVG {...icon} size={icon?.size ? icon.size : Size.sm} />
    {hideNameOnMobile ? <Text {...text} /> : null}
  </>
);

export default LinkContent;
