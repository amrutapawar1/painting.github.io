import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, ReactElement } from 'react';
import styles from './ArtCategory.module.css';

const CardComponent: FC = (): ReactElement => {
    return (
        <>
            <Grid item xs={4}>
                <Image src='/pro1.jpg' width={200} height={200} alt='banner-image' />
                <Box className={styles.text_container}>
                    <Typography className={styles.sub_heading}>
                        HOT TRENDS TO TRY
                    </Typography>

                    <Typography className={styles.heading}>Architecture Paintings</Typography>
                </Box>
            </Grid>
            <Grid item xs={4} >
                <Image src='/pro3.jpg' width={200} height={200} alt='banner-image' />
                <Typography className={styles.text_container}>
                    <Typography className={styles.sub_heading}>
                        HOT TRENDS TO TRY
                    </Typography>
                    <Typography className={styles.heading}>Abstract Paintings</Typography>
                </Typography>
            </Grid>
            <Grid item xs={4} >
                <Image src='/pro3.jpg' width={200} height={200} alt='banner-image' />
                <Typography className={styles.text_container}>
                    <Typography className={styles.sub_heading}>
                        HOT TRENDS TO TRY
                    </Typography>
                    <Typography className={styles.heading}>Classicists Paintings</Typography>
                </Typography>
            </Grid>
        </>
    )
}

export default CardComponent;