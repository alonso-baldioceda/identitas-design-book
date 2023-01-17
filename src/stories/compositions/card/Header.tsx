import React, { FC } from "react";
import { prefix, color } from "./../../shared/styles.js";

// Components
import Text, { TextProps } from "./../../components/Text";

//Props
export interface HeaderProps {
  text?: TextProps;
  foreignBackgroundColor?: string;
}

const Header: FC<HeaderProps> = ({ text, foreignBackgroundColor }) => {
  const backgroundColor = foreignBackgroundColor || color.primary;

  return (
    <div
      className={`w-100 text-center bg-${backgroundColor} ${prefix}-card-header`}
    >
      <Text
        text={text?.text ? text.text : ""}
        variant={text?.variant ? text.variant : "h3"}
        classes={text?.classes ? text.classes : "mb-0 py-4 text-capitalize"}
      />
    </div>
  );
};

export default Header;
