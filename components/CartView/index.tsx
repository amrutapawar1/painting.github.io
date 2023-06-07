import { Grid, Typography, Button, AppBar, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {
    CurrencyRupee as CurrencyRupeeIcon,
    Clear as ClearIcon,
    Delete as DeleteIcon
} from '@mui/icons-material';
import GroupedButtons from '../ui-components/GroupedButtons';
import Link from 'next/link';
import styles from './CartView.module.css';
import ShoppingBag from '../Common/ShoppingBag';
import { formatPrice, getCartTotal } from '../../util/PriceFormatter';
import { Routes } from '../../routes/pageRoutes';
import useCart from '../../context/Cart/CartContext';
import { IProduct } from '../../types/product';

type Props = {
    handleClose: () => void,
}
const CartView = (props: Props) => {
    const { cartItems, removeFromCart } = useCart();
    const totalAmount = getCartTotal(cartItems);
    return (
        <>
            <AppBar position="sticky" sx={{ boxShadow: 'none' }}>
                <ClearIcon cursor='pointer' onClick={props.handleClose} className={styles.clear_icon} />
                <Box className={styles.header_text_section} >
                    <Typography className={styles.header_title}>SHOPPING CART</Typography>
                    <div className={styles.divider_container}>
                        <div className={styles.divider}></div>
                    </div>
                    <Typography className={styles.cart_count_text}>You are <b>{formatPrice(150.00)}</b> away from free shipping!</Typography>
                </Box>
            </AppBar>

            {
                cartItems.length > 0 ?
                    (<>
                        <Box className={styles.parent_container} >
                            {
                                cartItems.map((product: IProduct) => (
                                    <Grid container spacing={0} className={styles.card_container} key={product.id}>
                                        <Grid item xs={4} justifyContent='center' className={styles.productImage}>
                                            <Link href={`/productDetail/${product.id}`}>
                                                <Image src={`${product.image}`} alt='' width={60} height={70} />
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className={styles.product_detail}>{product.title}</Typography>
                                            <Typography className={styles.product_detail}>{product.category}</Typography>
                                            <Typography className={styles.product_detail}><CurrencyRupeeIcon className='fs-10' />{product.price}</Typography>
                                            <GroupedButtons product={product} quantity={product.qty} />
                                        </Grid>
                                        <Grid item xs={2} className='ta-c'>
                                            <DeleteIcon fontSize='small' cursor='pointer' onClick={() => removeFromCart(product.id)} />
                                        </Grid>
                                    </Grid>
                                ))}
                        </Box>
                        <Box className={styles.footerContainer}>
                            <Box className={styles.description}>
                                <Typography className={styles.footer_text}>Subtotal:</Typography>
                                <Typography className={styles.footer_text}><CurrencyRupeeIcon className='fs-10' />{totalAmount.toFixed(2)}</Typography>
                            </Box>
                            <Typography className={styles.footer_text} sx={{ padding: '5px 0' }}>Tax included and shipping calculated at checkout</Typography>
                            <Box className='d-f'>
                                <Link href='/cartlist' className='mr-2'><Button variant="outlined" onClick={props.handleClose} fullWidth className={styles.viewcart_btn}>View Cart</Button></Link>
                                <Link href='/checkout'><Button variant="contained" fullWidth onClick={props.handleClose} className={styles.checkout_btn}>CheckOut</Button></Link>
                            </Box>
                        </Box>
                    </>) :
                    (
                        <Box className="p-2 ta-c jc-c">
                            <ShoppingBag fontSize='small' />
                            <Typography className={styles.header_title}>CARTLIST IS EMPTY.</Typography>
                            <Typography className={styles.empty_cart_text}>you dont have any products in the cartlist yet.</Typography>
                            <Typography className={styles.empty_cart_text}>You will find a lot of interesting products on our {`"Shop"`} page.</Typography>
                            <Link href={Routes.productlist} onClick={props.handleClose}> <Button variant='contained' className={styles.shop_btn}>Continue Shopping</Button></Link>
                        </Box>
                    )
            }
        </>
    )
}

export default CartView;