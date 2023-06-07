import React, { FC, ReactElement } from 'react';
import { ImageListItem, ImageListItemBar, Grid } from '@mui/material';
import Data from '../../../data/ImageList.json';
import { formatPrice } from '../../../util/PriceFormatter';
import Image from 'next/image';
import styles from './ImageCard.module.css';

const ImageCard: FC = (): ReactElement => {
  return (
    <Grid lg={12} item container spacing={2}>
      {Data.map((item) => (
        <Grid item lg={4} xs={12} sm={6} key={item.id}>
          <ImageListItem >
            <Image
              src={item.image}
              alt={item.title}
              width={377}
              height={370}
              loading="lazy"
              className={styles.image}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={formatPrice(item.price)}
            />
          </ImageListItem>
        </Grid>
      ))}
    </Grid>
  )
}

export default ImageCard;