import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import styles from "./Imagedata.module.css";

type imageProps = {
  title: string,
  subtitle: string,
  image: string,
}

const ImageCard = (props: imageProps) => {

  return (
    <div className={styles.maindiv}>
      <ImageList sx={{ width: 900, height: 500 }} className={styles.imageview}>
        <ImageListItem>
          <img src={props.image} alt={"image"} />
          <ImageListItemBar
            title={props.subtitle}
            subtitle={props.title}
          />
        </ImageListItem>
      </ImageList>
    </div>
  );
};
export default ImageCard;
