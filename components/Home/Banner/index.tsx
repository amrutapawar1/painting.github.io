import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from './Banner.module.css';

const Banner:FC = (): ReactElement => {
  return (
    <Grid item container xs={12} md={12} sm={12} className={styles.banner}>
      <Image src='/bimba2.jpg' fill  alt='banner-image' />
    </Grid>
  )
}

export default Banner