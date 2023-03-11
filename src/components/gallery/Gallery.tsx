import React, { useState, useMemo, FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { prefix } from "./../../shared/styles";

// Components
import Images from "./Images";

// Styles
const StyledGallery = styled((props) => <div {...props} />)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  > a {
    display: flex;
  }
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
    <StyledGallery className={classnames(`${prefix}-gallery`)}>
      <Images
        images={arrImgSorted}
        openLightbox={openLightbox}
        gallery={name}
      />

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
    </StyledGallery>
  );
};

export default Gallery;
