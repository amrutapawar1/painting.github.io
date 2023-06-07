import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Routes } from '../../routes/pageRoutes';
import ProductCard from '../../components/Common/ProductCard';
import { IProduct } from '../../types/product';
import styles from "./Wishlist.module.css";
import useCart from '../../context/Cart/CartContext';

const WishList = () => {
  const { wishlistItems } = useCart();
  if (wishlistItems.length === 0)
    return (
      <Box className="p-1 ta-c jc-c">
        <FavoriteBorderIcon className={styles.wishIcon} />
        <Typography className={styles.wishTitle}>WISHLIST IS EMPTY.</Typography>
        <Typography className={styles.wishSubtitle}>you dont have any products in the wishlist yet.</Typography>
        <Typography className={styles.wishSubtitle}>You will find a lot of interesting products on our {"Shop"} page.</Typography>
        <Button variant='contained' href={Routes.productlist} className={styles.btn} >CONTINUE SHOPPING</Button>
      </Box>
    );

  return (<>
    <Box className="p-50 ta-c jc-c">
      {
        wishlistItems.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} category={'WishList'} />
        ))
      }
    </Box>
  </>
  )
}

export default WishList;