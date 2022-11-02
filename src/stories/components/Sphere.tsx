import React, { FC } from "react";
import ReactPannellum from "react-pannellum";
import styled from "styled-components";

// Assets
import RotationIcon from "./../../images/svg/rotation.svg";

const Rotation = styled((props: any) => <RotationIcon {...props} />)`
  height: 56px;
  width: 56px;
  z-index: 100;
`;

const SphereWrapper = styled.div`
  .pnlm-load-button {
    background-color: rgba(255, 255, 255, 0.7);
    transition: background-color 0.25s linear;

    &:hover {
      background-color: rgba(255, 255, 255, 0.85);
    }
  }
`;

interface SphereProps {
  border?: number;
  borderColor?: string;
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
  border = 5,
  borderColor = "primary",
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
    <SphereWrapper>
      <div
        className={`d-inline-block w-100 position-relative border border-${border} border-${borderColor}`}
      >
        <Rotation className="position-absolute bg-white top-0 end-0 p-1" />
        <ReactPannellum
          id={id}
          sceneId={sceneId}
          imageSource={image}
          config={config}
          style={{
            background: `transparent`,
            height: `${height}`,
            width: `${width}`,
          }}
        />
      </div>
    </SphereWrapper>
  );
};

export default Sphere;
