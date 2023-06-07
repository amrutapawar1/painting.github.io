import * as React from 'react';
import { Typography, Grid, ImageListItemBar, ImageListItem, Container } from '@mui/material';
import styles from './Homepage.module.css';

const Category = () => {
  return (
    <Container>
      <Typography className={styles.title}>Shop by Category</Typography>
      <Grid container spacing={0} sx={{ marginTop: "var(--spacing-4)" }}>
        {itemData.map((item) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={item.id}>
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className={styles.categoryImageStyling}
              />
              <ImageListItemBar
                title={
                  <div className={styles.categoryImgBar_content_container}
                  >
                    <Typography className={styles.categoryImgBar_title}>{item.title}</Typography>
                    <Typography className={styles.categoryImgBar_subtitle}>{item.subTitle}</Typography>
                  </div>
                }
                className={styles.categoryImgBar}
              />
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Category;

const itemData = [
  {
    id: '1',
    img: 'https://www.shutterstock.com/image-illustration/oil-painting-rainy-day-600w-613776053.jpg',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
  {
    id: '2',
    img: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
  {
    id: '3',
    img: 'https://www.shutterstock.com/image-illustration/oil-painting-rainy-day-600w-613776053.jpg',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
  {
    id: '4',
    img: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
  {
    id: '5',
    img: 'https://www.shutterstock.com/image-illustration/oil-painting-rainy-day-600w-613776053.jpg',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
  {
    id: '6',
    img: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
  {
    id: '7',
    img: 'https://www.shutterstock.com/image-illustration/oil-painting-rainy-day-600w-613776053.jpg',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
  {
    id: '8',
    img: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Painting',
    subTitle: 'Save Over 20%',
  },
];
