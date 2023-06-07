import React, { FC, ReactElement } from 'react';
import { Container, Grid, Typography } from '@mui/material';

const About:FC = (): ReactElement => {

    return (
        <Grid item container xs={12} md={12} sm={12} className="p-50 ta-c">
            <Container maxWidth='xl' className="mb-25 ta-c">
                <Typography variant='h2'>A One-Stop Art Store</Typography>
                <Typography variant='h5'>Welcome to TheBimba</Typography>
            </Container>
            <Typography variant='body1'>The diversity of Indian culture is reflected in its indigenous art. From the divine beauty of Pichwai, the grandeur of Classical Indian Miniature artworks and the dotted excellence of Gond Paintings, each of these forms have a rich heritage. At Bimba, we celebrate these Indian art forms. Our Indian art collection is meticulously curated and elicits absolute joy and admiration at the sheer magnificence of India’s indigenous art at a mere glance.</Typography>
        </Grid>
    )
}

export default About