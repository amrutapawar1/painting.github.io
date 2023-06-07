import React, { FC } from 'react';
import Stepper from '../../components/ui-components/Stepper';
import { Box, Button, Grid, Typography } from '@mui/material';
import styles from './checkout.module.css';
import Image from 'next/image';
import { CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';
import useCart from '../../context/Cart/CartContext';
import { IProduct } from '../../types/product';
import ShoppingBag from '../../components/Common/ShoppingBag';
import Link from 'next/link';
import { getCartTotal } from '../../util/PriceFormatter';

const Checkout: FC = () => {
  const { cartItems } = useCart();
  const totalAmount = getCartTotal(cartItems);
  const shippingAmount = 19.82;
  const total = totalAmount + shippingAmount;

  const findTotal = (price: number, qty: number) => {return price * qty }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} md={7} lg={7}>
        <Stepper />
      </Grid>
      {
        cartItems.length === 0 ?
          (<Box className={styles.empty_text}>
            <ShoppingBag fontSize='small' />
            <Typography className={styles.header_title}>CARTLIST IS EMPTY.</Typography>
            <Typography className={styles.empty_cart_text}>you dont have any products in the cartlist yet.</Typography>
            <Typography className={styles.empty_cart_text}>You will find a lot of interesting products on our {`"Shop"`} page.</Typography>
            <Link href={'/'}> <Button variant='contained' className={styles.shop_btn}>Continue Shopping</Button></Link>
          </Box>) :
          (
            <Grid item xs={12} sm={5} md={5} lg={5} className={styles.parent_container}>
              <Grid container spacing={1} className={styles.card_container} >

                {
                  cartItems.map((product: IProduct) => (
                    <>
                      <Grid item xs={3} justifyContent='center'>
                        <Image src={product.image} alt='' width={60} height={70} />
                      </Grid>
                      <Grid item xs={5}>
                        <Typography className={styles.product_detail}>{product.title}</Typography>
                        <Typography className={styles.product_detail}>quantity:<b>{product.qty}</b></Typography>
                      </Grid>
                      <Grid item xs={4} textAlign='right'>
                        <Typography className={styles.product_detail} ><CurrencyRupeeIcon className='fs-10' />{findTotal(product.price, product.qty)}</Typography>
                      </Grid>
                    </>
                  ))
                }
              </Grid>
              <Grid container className={styles.footerContainer}>
                <Grid item xs={12} className={styles.description}>
                  <Typography className={styles.footer_text}>Subtotal:</Typography>
                  <Typography className={styles.footer_text}><CurrencyRupeeIcon className='fs-10' />{totalAmount.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={12} className={styles.description}>
                  <Typography className={styles.footer_text}>Shipping:</Typography>
                  <Typography className={styles.footer_text}><CurrencyRupeeIcon className='fs-10' />{shippingAmount}</Typography>
                </Grid>
                <Grid item xs={12} className={styles.description}>
                  <Typography className={styles.footer_text}><b>Total:</b></Typography>
                  <Typography className={styles.footer_text}><b><CurrencyRupeeIcon className='fs-10' />{total.toFixed(2)}</b></Typography>
                </Grid>
              </Grid>
            </Grid>)
      }
    </Grid>
  )
}

export default Checkout;