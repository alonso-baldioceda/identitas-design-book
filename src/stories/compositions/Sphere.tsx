import React, { FC } from "react";
import ReactPannellum from "react-pannellum";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";
import classnames from "classnames";

// Components
import SVG from "./../components/SVG";

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
    transition: background-color 0.15s ease;

    p {
      color: ${color.body};
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.85);
    }
  }
`;

const RotationIconStyled = styled.div`
  height: 56px;
  position: absolute;
  right: 0%;
  top: 0;
  width: 56px;
  z-index: 100;
`;

interface SphereProps {
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
  height,
  id,
  image,
  pitch,
  preview,
  sceneId,
  width,
  yaw,
}) => {
  const config = {
    autoLoad: false,
    showZoomCtrl: false,
    keyboardZoom: false,
    mouseZoom: false,
    showFullscreenCtrl: false,
    yaw: yaw ? yaw : 0,
    pitch: pitch ? pitch : 0,
    preview: preview,
  };

  return (
    <SphereStyled className={classnames(`${prefix}-sphere`)}>
      <RotationIconStyled className="bg-white p-1">
        <SVG icon="rotation" size="sm" />
      </RotationIconStyled>
      {id && sceneId && image && (
        <ReactPannellum
          id={id}
          sceneId={sceneId}
          imageSource={image}
          config={config}
          style={{
            height: `${height ? height : "400px"}`,
            width: `${width ? width : "100%"}`,
          }}
        />
      )}
    </SphereStyled>
  );
};

export default Sphere;
