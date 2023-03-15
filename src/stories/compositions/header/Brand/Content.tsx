import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../../../../shared/styles";

// Components
import { TextProps } from "../../../components/Text";
import SVG, { SVGProps } from "../../../components/SVG";

// Types
interface ContentProps {
  icon: SVGProps;
  showNameOnMobile?: boolean;
  text?: TextProps;
}
const Content: FC<ContentProps> = ({ icon, text, showNameOnMobile }) => (
  <>
    <SVG {...icon} size={icon?.size ? icon.size : "sm"} />
    {text ? (
      <span
        className={classnames(
          { [`${text.classes}`]: text.classes },
          { class: showNameOnMobile },
          `${prefix}-brand-content`
        )}
      >
        {text?.text}
      </span>
    ) : null}
  </>
);

export default Content;
