import * as React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import styles from './Homepage.module.css';
import { Routes } from '../../routes/pageRoutes';

const Banner = () => {
  return (
    <Grid container spacing={0} className={styles.bannerContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12}  className={styles.bannerBox}>
        <Typography className={styles.bannerHeading}>Meet the world of</Typography>
        <Typography className={styles.bannerTitle}>A new generation <br /> of organic cosmetics.</Typography>
        <Typography className={styles.bannerSubtitle}>Cum sociis natoque penatibus et magnis dis partur montes, nascetur ridiculus mus.</Typography>
        <Button variant="contained" className={styles.bannerShopBtn} href={Routes.productlist}>Shop Now</Button>
      </Grid>
    </Grid>
  )
}
export default Banner;