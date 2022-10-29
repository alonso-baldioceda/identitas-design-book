import React, { FC, ReactElement } from "react";

// Components
import ButtonLink from "./ButtonLink";

// Types
interface DriveProps {
  buttonAppearance?: string;
  cta?: string;
  heading?: string;
  icon?: ReactElement;
  iconLeft?: boolean;
  targetBlank?: boolean;
  text?: string;
  url?: string;
}

const Drive: FC<DriveProps> = ({
  buttonAppearance = "primary",
  cta = "Abrir Mapa",
  heading,
  icon,
  iconLeft = false,
  targetBlank = true,
  text = "",
  url = "",
}) => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div
          className={`col-10 col-sm-12 col-md-6 ${
            iconLeft ? "order-2" : "order-1"
          }`}
        >
          {/* TODO: analyze moving h2, p & button wrapper margin-bottom to props */}
          <h2 className="mb-5">{heading}</h2>
          <p className="mb-5">{text}</p>
          <div className="mb-5 mb-md-0">
            <ButtonLink
              appearance={buttonAppearance}
              bold
              mb={0}
              px={4}
              py={2}
              rounded
              targetBlank={targetBlank}
              text={cta}
              url={url}
            />
          </div>
        </div>
        <div
          className={`col-10 col-sm-12 col-md-6 ${
            iconLeft ? "order-1" : "order-2"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Drive;
