import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './Homepage.module.css';

export default function CommunitySection() {
  return (
    <Box className='ta-c' sx={{ padding: "var(--spacing-6) var(--spacing-2)" }}>
      <Typography className={styles.communityTitle}>Upload your favorite
        <br />
        <b>#venedorgram</b> outfit
        <br />
        on instagram.</Typography>
      <Button variant="outlined" className={styles.communityBtn}>Join Our Community</Button>
    </Box>
  )
}
