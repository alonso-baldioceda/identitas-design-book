import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { prefix } from "./../../shared/styles.js";
import "react-image-lightbox/style.css";

// Styles
const GalleryItem = styled((props) => <a {...props} />)``;

// Types
interface ImagesProps {
  gallery: string;
  images: any;
  openLightbox: any;
}

const Images: FC<ImagesProps> = ({ images, openLightbox, gallery }) => {
  const { t } = useTranslation();

  return images.map((img: any, index: number) => {
    const image = getImage(img[0].childImageSharp);

    const textAlt = t(`${gallery}.img${index + 1}`);

    return (
      <GalleryItem
        href="/#"
        onClick={(e: React.MouseEvent<HTMLElement>) => openLightbox(e)}
        key={img !== undefined && img[0].id}
        className={classnames(`${prefix}-gallery-item`)}
      >
        {image !== undefined ? (
          <GatsbyImage image={image} alt={textAlt} data-key={index} />
        ) : null}
      </GalleryItem>
    );
  });
};

export default Images;
