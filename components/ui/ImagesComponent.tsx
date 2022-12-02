import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  title: string;
  images: string[];
  footImages: string[];
}

export const ImagesComponent: FC<Props> = ({ title, images, footImages }) => {
  console.log(images);

  return (
    <>
      {images.map((image: any, index: any) => (
        <div className="mb-2" key={index}>
          <LazyLoadImage
            src={`../articles/${image}`}
            alt={title}
            className="img-thumbnail mb-1"
            effect="blur"
          />
          <p>
            <em>{footImages}</em>
          </p>
        </div>
      ))}
    </>
  );
};
