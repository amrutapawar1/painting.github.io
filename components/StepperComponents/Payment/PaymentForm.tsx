import React from 'react';
import styles from './PaymentForm.module.css';
import { Box, Card, Divider, Link, Stack, Typography } from '@mui/material';
import useCheckout from '../../../context/Checkout/CheckoutContext';

const PaymentForm = () => {

  const { shippingMethod, isBillingAddress, personalDetails: { email }, billingDetails, shippingDetails } = useCheckout();

  return (
    <>
      <Box className={styles.contact_details}>
        <Stack direction="row" spacing={2} padding='var(--spacing-1)' justifyContent='space-between'>
          <Typography className={styles.sub_heading}>Contact</Typography>
          <Typography className={styles.sub_heading}>{email}</Typography>
          <Typography className={styles.sub_heading}><Link href="#">Change</Link></Typography>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={2} padding='var(--spacing-1)' justifyContent='space-between'>
          <Typography className={styles.sub_heading}>Ship to</Typography>
          {
            isBillingAddress ? (<Typography>{billingDetails.address1}&nbsp;{billingDetails.address2}</Typography>) : (<Typography>{shippingDetails.address1}&nbsp;{shippingDetails.address2}</Typography>)
          }
          <Typography className={styles.sub_heading}><Link href="#">Change</Link></Typography>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={2} padding='var(--spacing-1)' justifyContent='space-between'>
          <Typography className={styles.sub_heading}>Method</Typography>
          <Typography className={styles.sub_heading}>{shippingMethod}</Typography>
          <Typography className={styles.sub_heading}></Typography>
        </Stack>
      </Box>
      <Box>
        <Typography className={styles.heading}>Payment</Typography>
        <Typography className={styles.sub_heading}>All transactions are secure and encrypted.</Typography>
        <Card className={styles.card}>
          <Typography variant='h6'>Pay Pal</Typography>
          <Typography className={styles.sub_heading}>After placing order you will be redirected to the PayPal website.</Typography>
        </Card>
      </Box>
    </>
  );
};

export default PaymentForm;