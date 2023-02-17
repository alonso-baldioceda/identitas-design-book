import React, { useState, useMemo, FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import Lightbox from "react-image-lightbox";
import Masonry from "react-masonry-component";
import "react-image-lightbox/style.css";
import { prefix } from "./../../stories/shared/styles.js";

// Components
import Images from "./Images";

// Styles
const StyledGallery = styled((props) => <Masonry {...props} />)`
  display: flex;
  justify-content: space-between;
`;

// Types
interface GalleryProps {
  images: any;
  name: string;
}

const Gallery: FC<GalleryProps> = ({ images, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const arrayLength = images.edges.length;

  const current = photoIndex;
  const next = (photoIndex + 1) % arrayLength;
  const prev = (photoIndex + arrayLength - 1) % arrayLength;

  const arrImg = (images.edges as any).map((image: any) => [
    image.node,
    image.node.childImageSharp.gatsbyImageData.images.fallback.src,
  ]);

  const sorter = (a: any, b: any) => {
    parseInt(a[1].split("/").pop()) - parseInt(b[1].split("/").pop());
  };

  const arrImgSorted = useMemo(() => arrImg.sort(sorter), [arrImg]);

  const openLightbox = (event: any) => {
    event.preventDefault();
    setIsOpen(true);
    setPhotoIndex(parseInt(event.target.getAttribute("data-key")));
  };

  return (
    <div className={classnames(`${prefix}-gallery`)}>
      <StyledGallery elementType={"div"} className={"gallery"}>
        <Images
          images={arrImgSorted}
          openLightbox={openLightbox}
          gallery={name}
        />
      </StyledGallery>

      {isOpen && (
        <Lightbox
          mainSrc={`${arrImgSorted[current][1]}`}
          nextSrc={`${arrImgSorted[next][1]}`}
          prevSrc={`${arrImgSorted[prev][1]}`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex(prev)}
          onMoveNextRequest={() => setPhotoIndex(next)}
        />
      )}
    </div>
  );
};

export default Gallery;
