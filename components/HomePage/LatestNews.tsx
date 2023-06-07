import { Button, Card, Typography, Grid } from '@mui/material';
import React from 'react';
import styles from './Homepage.module.css';


const LatestNews = () => {
  return (
    <>
      <Typography className={styles.title}>Latest News</Typography>
      <Grid container spacing={0}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={12} md={6} lg={6} className={styles.NewsBox} key={item.id}>
            <img src={item.img} className={styles.NewsImg} />
            <Card className={styles.NewsCard} >
              <Typography className={styles.NewsTitle}>{item.title}</Typography>
              <Button variant='outlined' className={styles.NewsBtn}>{item.subTitle}</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default LatestNews;
const itemData = [
  {
    id: '1',
    img: 'https://www.shutterstock.com/image-illustration/oil-painting-rainy-day-600w-613776053.jpg',
    title: 'Breakfast',
    subTitle: '@bkristastucchio',
  },
  {
    id: '2',
    img: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Burger',
    subTitle: '@rollelflex_graphy726',
  },
  {
    id: '3',
    img: 'https://www.shutterstock.com/image-illustration/oil-painting-rainy-day-600w-613776053.jpg',
    title: 'Burger',
    subTitle: '@rollelflex_graphy726',
  },
  {
    id: '4',
    img: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Burger',
    subTitle: '@rollelflex_graphy726',
  }

];
