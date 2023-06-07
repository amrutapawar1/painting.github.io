import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Shipping.module.css';
import { Box, Divider, FormControl, FormControlLabel, Grid, Link, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { COUNTRY, STATE } from '../ContactDetails/Constants';
import useCheckout, { CheckoutData } from '../../../context/Checkout/CheckoutContext';

enum Methods {
    standard = "standard",
    express = "Express"
}
type Props = {
    values: CheckoutData,
    handleChange: () => void,
}
const Shipping = (props: Props) => {
    const { values, handleChange } = props;

    const { shippingMethod, isBillingAddress, personalDetails: { email }, shippingDetails, update: { setBillingAddress, setShippingMethod } } = useCheckout();
    return (
        <Box sx={{ padding: '0 0 var(--spacing-2) 0' }}>
            <Box className={styles.contact_details}>
                <Stack direction="row" spacing={2} padding='var(--spacing-1)' justifyContent='space-between'>
                    <Typography className={styles.sub_heading}>Contact</Typography>
                    <Typography className={styles.sub_heading}>{email}</Typography>
                    <Typography className={styles.sub_heading}><Link href="#">Change</Link></Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={2} padding='var(--spacing-1)' justifyContent='space-between'>
                    <Typography className={styles.sub_heading}>Ship to</Typography>
                    <Typography className={styles.sub_heading}>{shippingDetails.address1}&nbsp;{shippingDetails.address2}</Typography>
                    <Typography className={styles.sub_heading}><Link href="#">Change</Link></Typography>
                </Stack>
            </Box>
            <Typography className={styles.heading} padding={'0 0 var(--spacing-1) 0'}>Shipping Method</Typography>
            <Box>
                <TextField
                    fullWidth
                    select
                    label='shippingMethod'
                    placeholder='shippingMethod'
                    name='shippingMethod'
                    value={shippingMethod}
                    onChange={setShippingMethod}
                    required
                    variant="outlined"
                >
                    <MenuItem value={Methods.standard}>{Methods.standard}</MenuItem>
                    <MenuItem value={Methods.express}>{Methods.express}</MenuItem>
                </TextField>
            </Box>
            <Box>
                <Typography className={styles.heading}>Billing Address</Typography>
                <Typography className={styles.sub_heading}>Select the address that matches your card or payment method.</Typography>
                <Box className={styles.form_section}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={isBillingAddress === false ? "shipping_address" : "billing_address"}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="shipping_address" control={<Radio />} label="Same as shipping address" onClick={() => setBillingAddress(false)} />
                            <FormControlLabel value="billing_address" control={<Radio />} label="Use a different billing address" onClick={() => setBillingAddress(true)} />
                        </RadioGroup>
                    </FormControl>
                    {
                        isBillingAddress && (
                            <Box >
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Field
                                            placeholder='First name (optional)'
                                            name='billingDetails.firstName'
                                            className={styles.input}
                                            value={values.billingDetails.firstName}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="billingDetails.firstName" className={styles.error_message} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            placeholder='Last name'
                                            name='billingDetails.lastName'
                                            className={styles.input}
                                            value={values.billingDetails.lastName}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="billingDetails.lastName" className={styles.error_message} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            as="select"
                                            placeholder='Country/Region'
                                            name='billingDetails.country'
                                            className={styles.input}
                                            value={values.billingDetails.country}
                                            onChange={handleChange}
                                        >
                                            <option value='select'>Select</option>
                                            {
                                                COUNTRY.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                ))
                                            }
                                        </Field>
                                        <ErrorMessage name="billingDetails.country" className={styles.error_message} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            as="select"
                                            placeholder='State'
                                            name='billingDetails.state'
                                            className={styles.input}
                                            value={values.billingDetails.state}
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
                                        <ErrorMessage name="billingDetails.state" className={styles.error_message} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            placeholder='Address'
                                            name='billingDetails.address1'
                                            className={styles.input}
                                            value={values.billingDetails.address1}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="billingDetails.address1" className={styles.error_message} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            placeholder='Apartment,suit, etc.(optional)'
                                            name='billingDetails.address2'
                                            className={styles.input}
                                            value={values.billingDetails.address2}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="billingDetails.address2" className={styles.error_message} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            placeholder='city'
                                            name='billingDetails.city'
                                            className={styles.input}
                                            value={values.billingDetails.city}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="billingDetails.city" className={styles.error_message} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Field
                                            placeholder='zipcode'
                                            name='billingDetails.zipcode'
                                            className={styles.input}
                                            value={values.billingDetails.zipcode}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name="billingDetails.zipcode" className={styles.error_message} />
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default Shipping;