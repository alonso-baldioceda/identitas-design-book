import React, { FC } from "react";

import ButtonLink, { ButtonLinkProps } from "../components/ButtonLink";
import Text, { TextProps } from "../components/Text";

export interface DriveProps {
  heading: TextProps;
  text: TextProps;
  buttonLink: ButtonLinkProps;
}

const Drive: FC<DriveProps> = ({ heading, text, buttonLink }) => (
  <>
    {heading && <Text {...heading} />}
    {text && <Text {...text} />}
    {buttonLink && <ButtonLink {...buttonLink} />}
  </>
);

export default Drive;
