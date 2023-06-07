import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import ImageGallery from '../../ui-components/ImageGallery/index';


const ProductImage: FC = (props): ReactElement => {
    const { image, images } = props;

    return (
        <Grid item xs={12} md={12} lg={6} xl={6} className="jc-c ai-c">
            <ImageGallery image={image} images={images} />
        </Grid>
    )
}

export default ProductImage;

