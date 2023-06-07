import React, { FC, ReactElement } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ImageCard from '../../ui-components/ImageCard/index';

const ImageList:FC = (): ReactElement => {

    return (
        <Grid item container xs={12} md={12} sm={12} className="p-50">
            <Container className="mb-25 ta-c">
                <Typography variant='h2'>Bimba Art Gallery</Typography>
                <Typography variant='h5'>Explore Curated Intricate Art Styles</Typography>
            </Container>
            <Grid lg={12} item container spacing={2} pt={2}>
                <ImageCard />
            </Grid>
        </Grid>
    )
}

export default ImageList