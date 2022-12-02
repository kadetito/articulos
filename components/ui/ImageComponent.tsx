import { Card } from "react-bootstrap";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  title: string;
  image: string;
  footImages: string;
}

export const ImageComponent: FC<Props> = ({ title, image, footImages }) => {
  return (
    <>
      <LazyLoadImage
        src={image}
        alt={title}
        className="img-thumbnail mb-1"
        effect="blur"
      />
      <p>
        <em>{footImages}</em>
      </p>
    </>
  );
};
