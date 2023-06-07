import * as React from 'react';
import { Box, Grid, Typography, Rating, Divider } from '@mui/material';
import styles from './TabDetails.module.css';

const Reviews = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box className={styles.box}>
      <Grid container spacing={2} className={styles.grid_container}>
        <Grid item xs={6}>
          <Typography className={styles.title}>Customer Reviews</Typography>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography className={styles.sub_title}>Based on 3 reviews</Typography>
        </Grid>
        <Grid item xs={6} className={styles.write_review}>
          <Typography className={styles.sub_title}>Write a review</Typography>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}
export default Reviews;