import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './ContactDetails.module.css';
import { ErrorMessage, Field } from 'formik';
import Link from '@mui/material/Link'
import { COUNTRY, STATE } from './Constants';
import { CheckoutData } from '../../../context/Checkout/CheckoutContext';

type Props = {
  values: CheckoutData,
  handleChange: () => void,
}
const ContactDetails = (props: Props) => {
  const { values, handleChange } = props;
  return (
    <Box sx={{ padding: 'var(--spacing-3) 0' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <section>
            <Box display='flex' justifyContent='space-between' alignItems='baseline' flexWrap='wrap'>
              <Typography className={styles.heading}>Personal Details</Typography>
              <Typography className={styles.sub_heading}>Already have an account?
                <Link href="/login" underline="hover"> Log In</Link></Typography>
            </Box>
          </section>
        </Grid>
        <Grid item xs={6} >
          <Field
            placeholder='First name'
            name='personalDetails.firstName'
            className={styles.input}
            value={values.personalDetails.firstName}
            onChange={handleChange}
          />
          <ErrorMessage name="personalDetails.firstName" className={styles.error_message} />
        </Grid>
        <Grid item xs={6}>
          <Field
            placeholder='Last name'
            name='personalDetails.lastName'
            className={styles.input}
            value={values.personalDetails.lastName}
            onChange={handleChange}
          />
          <ErrorMessage name="personalDetails.lastName" className={styles.error_message} />
        </Grid>
        <Grid item xs={6}>
          <Field
            placeholder='Enter Email'
            name='personalDetails.email'
            className={styles.input}
            value={values.personalDetails.email}
            onChange={handleChange}
          />
          <ErrorMessage name="personalDetails.email" className={styles.error_message} />
        </Grid>
        <Grid item xs={6}>
          <Field
            placeholder='Phone Number'
            name='personalDetails.phoneNumber'
            className={styles.input}
            value={values.personalDetails.phoneNumber}
            onChange={handleChange}
          />
          <ErrorMessage name="personalDetails.phoneNumber" className={styles.error_message} />
        </Grid>
        <Grid item xs={12}>
          <Box >
            <Typography className={styles.heading}>Shipping Address</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Field
            placeholder='Address'
            name='shippingDetails.address1'
            className={styles.input}
            value={values.shippingDetails.address1}
            onChange={handleChange}
          />
          <ErrorMessage name="shippingDetails.address1" className={styles.error_message} />
        </Grid>
        <Grid item xs={12}>
          <Field
            placeholder='Apartment,suit, etc.(optional)'
            name='shippingDetails.address2'
            className={styles.input}
            value={values.shippingDetails.address2}
            onChange={handleChange}
          />
          <ErrorMessage name="shippingDetails.address2" className={styles.error_message} />
        </Grid>
        <Grid item xs={6}>
          <Field
            as="select"
            placeholder='Country/Region'
            name='shippingDetails.country'
            className={styles.input}
            value={values.shippingDetails.country}
            onChange={handleChange}
          >
            <option value='select'>Select</option>
            {
              COUNTRY.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))
            }
          </Field>
          <ErrorMessage name="shippingDetails.country" className={styles.error_message} />
        </Grid>
        <Grid item xs={6}>
          <Field
            as="select"
            placeholder='State'
            name='shippingDetails.state'
            className={styles.input}
            value={values.shippingDetails.state}
            onChange={handleChange}
          >
            <option value='select'>Select</option>
            {
              STATE.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            }
          </Field>
          <ErrorMessage name="shippingDetails.state" className={styles.error_message} />
        </Grid>
        <Grid item xs={6}>
          <Field
            placeholder='city'
            name='shippingDetails.city'
            className={styles.input}
            value={values.shippingDetails.city}
            onChange={handleChange}
          />
          <ErrorMessage name="shippingDetails.city" className={styles.error_message} />
        </Grid>
        <Grid item xs={6}>
          <Field
            placeholder='zipcode'
            name='shippingDetails.zipcode'
            className={styles.input}
            value={values.shippingDetails.zipcode}
            onChange={handleChange}
          />
          <ErrorMessage name="shippingDetails.zipcode" className={styles.error_message} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactDetails;