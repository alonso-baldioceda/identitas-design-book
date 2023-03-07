import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import Lightgallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { prefix } from "./../../shared/styles.js";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

// Styles
const StyledGallery = styled((props) => <div {...props} />)`
  .lg-react-element {
    a {
      img {
        border: 5px solid red;
        justify-content: space-around;
        width: 49% !important;
      }
    }
  }
`;

// Types
interface GalleryProps {
  images: string[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <StyledGallery className={classnames(`${prefix}-gallery`)}>
      <Lightgallery plugins={[lgThumbnail, lgZoom]} speed={500}>
        {images.map((image, index) => (
          <a href={image} key={index}>
            <img
              src={image}
              alt={`Gallery Image ${index}`}
              className="img-fluid"
            />
          </a>
        ))}
      </Lightgallery>
    </StyledGallery>
  );
};

export default Gallery;
