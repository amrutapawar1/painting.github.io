import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Homepage.module.css';

export default function RecycleSelection() {
  return (
    <Box className={styles.recycleContainer}>
      <Typography className={styles.title} sx={{ paddingTop: "var(--spacing-4)" }}>Together We Recycle</Typography>
      <Grid container spacing={0}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={styles.recycleCard} key={item.id}>
            <img src={item.img} className={styles.recycleImg} />
            <Typography className={styles.recycleTitle}>{item.title}</Typography>
            <Typography className={styles.recycleSubtitle}>{item.subTitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
const itemData = [
  {
    id: '1',
    img: '/recycle_1.png',
    title: 'Collection',
    subTitle: 'Our stores accept your based Venedor clothing.o',
  },
  {
    id: '2',
    img: '/recycle_2.png',
    title: 'Collection',
    subTitle: 'Our stores accept your based Venedor clothing.',
  },
  {
    id: '3',
    img: '/recycle_3.png',
    title: 'Collection',
    subTitle: 'Our stores accept your based Venedor clothing.',
  }]