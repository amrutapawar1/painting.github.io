import { Grid, Typography, Button, AppBar, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {
    FavoriteBorder as FavoriteBorderIcon,
    CurrencyRupee as CurrencyRupeeIcon,
    Delete as DeleteIcon
} from '@mui/icons-material';
import GroupedButtons from '../ui-components/GroupedButtons';
import Link from 'next/link';
import styles from './WishlistView.module.css';
import ClearIcon from '@mui/icons-material/Clear';
import { Routes } from '../../routes/pageRoutes';
import useCart from '../../context/Cart/CartContext';
import { IProduct } from '../../types/product';

const WishlistView = (props: any) => {
    const { wishlistItems, removeFromWishList } = useCart();
    return (
        <>
            <AppBar position="sticky" sx={{ boxShadow: 'none' }}>
                <Typography className={styles.clear_icon}>
                    <ClearIcon cursor='pointer' onClick={props.handleClose} />
                </Typography>
                <Box className={styles.header_text_section} >
                    <Typography className={styles.header_title}>WishList Items</Typography>
                    <div className={styles.divider_container}>
                        <div className={styles.divider}></div>
                    </div>
                </Box>
            </AppBar>
            {
                wishlistItems.length > 0 ?
                    (
                        <>
                            <Grid container spacing={2} className={styles.parent_container} >
                                {
                                    wishlistItems.map((product: IProduct) => (
                                        <Grid container spacing={0} className={styles.card_container} key={product.id}>
                                            <Grid item xs={3} justifyContent='center' className={styles.productImage}>
                                                <Link href={`/productDetail/${product.id}`}>
                                                    <Image src={`${product.image}`} alt='' width={60} height={70} />
                                                </Link>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography className={styles.product_detail}>{product.title}</Typography>
                                                <Typography className={styles.product_detail}>{product.category}</Typography>
                                                <Typography className={styles.product_detail}><CurrencyRupeeIcon className='fs-10' />{product.price}</Typography>
                                                <GroupedButtons product={product} quantity={product.qty}/>
                                            </Grid>
                                            <Grid item xs={2} textAlign='right'>
                                                <DeleteIcon fontSize='small' cursor='pointer' onClick={() => removeFromWishList(product.id)} />
                                            </Grid>
                                        </Grid>
                                    ))}
                            </Grid>
                            <Link href={Routes.productlist} onClick={props.handleClose} className='ta-c'><Button variant='contained' className={styles.shop_btn}>Back to Shop</Button></Link>
                        </>
                    ) :
                    (
                        <Box className="p-2 ta-c jc-c">
                            <FavoriteBorderIcon sx={{ fontSize: "var(--fs-heading)", color: 'var(--primary)' }} />
                            <Typography className={styles.header_title}>WISHLIST IS EMPTY.</Typography>
                            <Typography className={styles.empty_cart_text}>you dont have any products in the cartlist yet.</Typography>
                            <Typography className={styles.empty_cart_text}>You will find a lot of interesting products on our {`"Shop"`} page.</Typography>
                            <Link href={Routes.productlist} onClick={props.handleClose}> <Button variant='contained' className={styles.shop_btn}>Continue Shopping</Button></Link>
                        </Box>
                    )
            }
        </>
    )
}

export default WishlistView;