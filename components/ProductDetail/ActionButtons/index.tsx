import React from 'react';
import { Button, Stack } from '@mui/material';
import styles from './ActionButtons.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GroupedButtons from '../../ui-components/GroupedButtons';
import useCart from '../../../context/Cart/CartContext';
import { IProduct } from '../../../types/product';

type Props = {
    product: IProduct
}
const ActionButtons = (props: Props) => {
    const { product } = props;
    const { addToCart, addToWishList } = useCart();
    return (
        <Stack spacing={1} direction="row" className={styles.container}>
            <GroupedButtons product={product} quantity={product.qty} />
            <Button size='small' variant="outlined" onClick={() => addToCart(product)} className={styles.cart_button}>Add to Cart</Button>
            <Button size='small' variant="contained" className={styles.wishlist_button} >
                <FavoriteBorderIcon cursor='pointer' onClick={() => addToWishList(product)} />
            </Button>
        </Stack>
    )
}

export default ActionButtons;