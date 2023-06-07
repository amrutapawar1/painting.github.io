import React, { useState } from "react";
import styles from "./ImageGallery.module.css";
import { ImageProps } from "../../../types/product";
import { Grid } from "@mui/material";

const ImageGallery = (props: ImageProps) => {
  const { src, srcSet } = props;

  const [img, setImg] = useState<string>(src);

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setImg(e.currentTarget.src);
  };
  return (
    <Grid container spacing={2} columns={8} justifyContent="center">
      <Grid item xs={2} sm={2} md={1} lg={1} marginTop="40px">
        <Grid item className={styles.image_section}>
          <img
            src={image}
            alt="Elva dressed as a fairy"
            onClick={handleClick}
            className={styles.product_thumb_selected}
          />
        </Grid>
        <Grid item>
          {images.map((item: string) => (
            <img
              src={item.src}
              alt="Elva dressed as a fairy"
              width="100%"
              height="100%"
              onClick={handleClick}
              className={styles.product_thumb}
              key={item.id}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4} sm={4} md={5} lg={5}>
        <>
          <img
            src={src}
            alt="Elva dressed as a fairy"
            className={styles.image_Gallery_Style}
          />
        </>
      </Grid>
    </Grid>
  );
};

export default ImageGallery;