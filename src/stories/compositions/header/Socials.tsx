import React, { FC } from "react";

// Components
import LinkIcon, { LinkIconProps } from "./../../components/LinkIcon";

export interface SocialsProps {
  socials?: LinkIconProps[];
}

const Socials: FC<SocialsProps> = ({ socials }) => {
  return (
    { socials } && (
      <div className="d-flex">
        {socials?.map((social: LinkIconProps, index: number) => (
          <LinkIcon {...social} key={index} />
        ))}
      </div>
    )
  );
};

export default Socials;
