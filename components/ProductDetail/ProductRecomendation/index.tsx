import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './ProductRecomendation.module.css';
import ProductList from '../../common/ProductList';

const ProductRecomendation: FC = (): ReactElement => {
    return (
        <Grid item xs={12} md={12} sm={12} >
            <Typography variant='h1' className={styles.text}>Related Products</Typography>
            <ProductList maxLength={4} />
        </Grid>
    )
}

export default ProductRecomendation;