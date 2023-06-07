import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Repeat as RepeatIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';

export const ProductView = () => {
    return (
        <Grid container spacing={0}>
            <Grid xs={12} sm={12} md={6} lg={6}>Image</Grid>
            <Grid xs={12} sm={12} md={6} lg={6} className='ta-s'>
                <Typography className='mb-1 fs-20'>Apparel Clothing Menswear White Bespoke</Typography>
                <Typography className='mb-1 fw-b'>$350.00</Typography>
                <Rating className='mb-1' />
                <Typography className='fs-16' sx={{ color: "var(--gray-2)" }}>Availability: 120 in stock</Typography>
                <Typography className='mb-2 fs-16' sx={{ color: "var(--gray-2)" }}>Product Type: Caraceni</Typography>
                <Typography className='mb-1 fs-16' sx={{ color: "var(--gray-2)" }}>Size</Typography>
                <Box className='d-f mb-1'>
                    <Button variant='outlined' sx={{ color: 'var(--primary' }}>M</Button>
                    <Button variant='outlined' sx={{ color: 'var(--primary' }} className='mb-10'>L</Button>
                </Box>
                <Typography className='mb-1'>Size Guide</Typography>
                <Box className='d-f mb-1'>
                    <Button variant='outlined' sx={{ color: 'var(--primary' }}>1</Button>
                    <Button variant='outlined' sx={{ color: 'var(--primary' }}>ADD TO CART</Button>
                    <Button variant='outlined' sx={{ color: 'var(--primary' }}><FavoriteBorderIcon /></Button>
                    <Button variant='outlined' sx={{ color: 'var(--primary' }}><RepeatIcon /></Button>
                </Box>
            </Grid>
        </Grid>
    )
}
