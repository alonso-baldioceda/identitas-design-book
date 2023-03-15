import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import Slick, { Settings } from "react-slick";
import { prefix } from "./../../shared/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Compositions
import Panel from "./Panel";

// Components
import BackgroundImage from "./../components/BackgroundImage";
import Text, { TextProps } from "./../components/Text";
import LinkGatsby, { LinkGatsbyProps } from "./../components/LinkGatsby";

// Styles
const SliderWrapper = styled((props) => <section {...props} />)`
  height: 100vh;
  margin: 0 auto;
  min-height: 575px;
  max-width: 2200px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    height: 100vh;
    max-height: 100vh;
  }

  .slick-slider {
    height: 100%;

    .slick-list {
      height: 100%;

      .image-slide {
        transform: scale(1.075);
        transition: all 1s cubic-bezier(0.7, 0, 0.3, 1);
      }
    }

    .slick-arrow {
      &.slick-prev,
      &.slick-next {
        height: 40px;
        width: 40px;
        z-index: 100;

        &:before {
          ${(props) =>
            props.controlscolor &&
            `
              color: ${props.controlscolor};
            `}

          font-size: 40px;
        }
      }

      &.slick-prev {
        left: 25px;
      }

      &.slick-next {
        right: 25px;
      }
    }

    .slick-dots {
      position: absolute;
      bottom: 25px;
      z-index: 100;

      li {
        button {
          &:before {
            ${(props) =>
              props.controlscolor &&
              `
                color: ${props.controlscolor};
              `}

            font-size: 20px;
          }
        }
      }
    }
  }
`;

// const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
//   background-attachment: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// Types
interface SliderInterface {
  settings: any;
  nodes: {
    id: string;
    image: string;
    panel: {
      position: string;
      classes: string;
      heading: TextProps;
      text?: TextProps;
      cta?: LinkGatsbyProps;
    };
  }[];
  controlsColor?: string;
}

const Slider: FC<SliderInterface> = ({ settings, nodes, controlsColor }) => {
  const slickSettings: Settings = { ...settings };

  return (
    <SliderWrapper
      className={classnames(`${prefix}-slider`)}
      controlscolor={controlsColor ? controlsColor : ""}
    >
      <Slick {...slickSettings}>
        {nodes.map((slide: any, index: number) => (
          <div key={index} className="image-slide">
            <BackgroundImage src={slide.image} />
            <Panel
              position={slide.panel.position}
              classes={slide.panel.classes}
              bgColor={slide.panel.bgColor}
            >
              {slide.panel.heading && <Text {...slide.panel.heading} />}
              {slide.panel.text && <Text {...slide.panel.text} />}
              {slide.panel.cta && <LinkGatsby {...slide.panel.cta} />}
            </Panel>
          </div>
        ))}
      </Slick>
    </SliderWrapper>
  );
};

export default Slider;
