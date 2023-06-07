import React, { useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';
import styles from './ProductDescription.module.css';
import { formatPrice, getDiscountedPrice } from '../../../util/PriceFormatter';

export interface IProductDescription {
    title: string;
    category: string;
    price: number;
    discount: number;
    description: string;
    image: string;
}

const ProductDescription = (props: IProductDescription) => {
    const [value, setValue] = useState<number | null>(5);
    const { title, category, price, discount, description }: IProductDescription = props;

    return (
        <>
            <Typography className={styles.title}>{title}</Typography>
            <Typography className={styles.price} >{formatPrice(price)}</Typography>
            <Box>
                <Box className="d-f">
                    <Rating readOnly value={value} size="small" className={styles.text} />
                    <Typography className={styles.text}>(3 total reviews)</Typography>
                </Box>
                <Typography className={styles.text}>Availability: 30 in stock</Typography>
                <Typography className={styles.text}>Product Type: Belber</Typography>
            </Box>
        </>

    )
}

export default ProductDescription;