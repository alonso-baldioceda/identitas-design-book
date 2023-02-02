import React, { FC } from "react";
import ReactPannellum from "react-pannellum";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";
import classnames from "classnames";

// Assets
import RotationIcon from "./../../images/svg/rotation.svg";

const SphereStyled = styled((props) => <div {...props} />)`
  ${(props) =>
    props.border &&
    `
      border-width: ${props.border}px;
    `}

  border-color: ${color.primary};
  border-style: solid;
  position: relative;

  .pnlm-load-button {
    background-color: rgba(255, 255, 255, 0.7);
    transition: background-color 0.25s linear;

    p {
      color: ${color.body};
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.85);
    }
  }
`;

const RotationIconStyled = styled((props: any) => <RotationIcon {...props} />)`
  height: 56px;
  position: absolute;
  right: 0%;
  top: 0;
  width: 56px;
  z-index: 100;
`;

interface SphereProps {
  border?: number;
  height?: string;
  id: string;
  image: any;
  pitch?: number;
  preview?: any;
  sceneId: string;
  width?: string;
  yaw?: number;
}

const Sphere: FC<SphereProps> = ({
  border,
  height = "400px",
  id,
  image,
  pitch = 0,
  preview,
  sceneId,
  width = "100%",
  yaw = 0,
}) => {
  const config = {
    autoLoad: false,
    showZoomCtrl: false,
    keyboardZoom: false,
    mouseZoom: false,
    showFullscreenCtrl: false,
    yaw: yaw,
    pitch: pitch,
    preview: preview,
  };

  return (
    <SphereStyled
      className={classnames(`${prefix}-sphere`)}
      border={border ? border : 5}
    >
      <RotationIconStyled className="bg-white p-1" />
      <ReactPannellum
        id={id}
        sceneId={sceneId}
        imageSource={image}
        config={config}
        style={{
          background: `${color.primary}`,
          height: `${height}`,
          width: `${width}`,
        }}
      />
    </SphereStyled>
  );
};

export default Sphere;
