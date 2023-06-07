import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box, Grid, Stack } from '@mui/material';
import { StepConfig } from './types';
import styles from './Stepper.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as Yup from 'yup';
import useCheckout, { CheckoutData, DEFAULT_CHECKOUT_CONTEXT } from '../../../context/Checkout/CheckoutContext';
import { Form, Formik, FormikHelpers } from 'formik';

type StepsProps = {
  steps: StepConfig[];
}
type CheckoutDetails = CheckoutData['personalDetails'] & CheckoutData['shippingDetails'] & CheckoutData['billingDetails'];

const Schema: Yup.ObjectSchema<CheckoutDetails> = Yup.object().shape({
  personalDetails: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .required('Last name is required'),
    email: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email address")
      .required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid phone number')
      .required('Phone number is required'),
  }),
  shippingDetails: Yup.object().shape({
    address1: Yup.string()
      .matches(/^[a-zA-z0-9" "]+$/g)
      .required('Address is required'),
    address2: Yup.string()
      .matches(/^[a-zA-z0-9" "]+$/g)
      .required('Address is required'),
    country: Yup.string().required('required'),
    state: Yup.string().required('required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[A-Za-z ]*$/, 'Please enter city name')
      .required('City is required'),
    zipcode: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, 'Must be exactly 6 digits')
      .max(6, 'Must be exactly 6 digits')
      .required('required'),
  }),
  // billingDetails: Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  //   lastName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  //   address1: Yup.string()
  //     .matches(/^[a-zA-z0-9" "]+$/g)
  //     .required('Address is required'),
  //   address2: Yup.string()
  //     .matches(/^[a-zA-z0-9" "]+$/g)
  //     .required('Address is required'),
  //   country: Yup.string().required('required'),
  //   state: Yup.string().required('required'),
  //   city: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .matches(/^[A-Za-z ]*$/, 'Please enter city name')
  //     .required('City is required'),
  //   zipcode: Yup.string()
  //     .matches(/^[0-9]+$/, "Must be only digits")
  //     .min(6, 'Must be exactly 6 digits')
  //     .max(6, 'Must be exactly 6 digits')
  //     .required('required'),
  // })
});

const CustomStepper = ({ steps }: StepsProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const Renderer = steps[activeStep]?.renderer;

  const { isBillingAddress, update: { setPersonalDetails, setShippingDetails, setBillingDetails } } = useCheckout();

  const initialState = {
    personalDetails: {
      ...DEFAULT_CHECKOUT_CONTEXT['personalDetails']
    },
    shippingDetails: {
      ...DEFAULT_CHECKOUT_CONTEXT['shippingDetails']
    },
    billingDetails: {
      ...DEFAULT_CHECKOUT_CONTEXT['billingDetails']
    }
  }
  const handleSubmit = (values: CheckoutData, { setSubmitting }: FormikHelpers<CheckoutDetails>) => {
    if (isBillingAddress) {
      setBillingDetails(values.billingDetails)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else {
      setSubmitting(false)
      setPersonalDetails(values.personalDetails)
      setShippingDetails(values.shippingDetails)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  return (<>
    <Box className={styles.stepper_container}>
      <Stepper activeStep={activeStep} connector={<ChevronRightIcon className={styles.right_icon} />}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel StepIconProps={{
              className: styles.step_icon,
            }}
            ><span className={styles.label}>{step.label}</span></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    <div className={styles.container}>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
            <Button onClick={handleReset} variant='contained' className={styles.next_button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Formik initialValues={initialState} validationSchema={Schema} onSubmit={handleSubmit}>
              {
                ({ values, handleChange, handleSubmit, }) => (
                  <Form onSubmit={handleSubmit}>
                    <Box className={styles.sub_container} >
                      <Renderer values={values} handleChange={handleChange} />
                    </Box>
                    <Stack spacing={2} direction="row" className={styles.stepper_buttons_desktopView} >
                      <Button variant="text" disabled={activeStep === 0} onClick={handleBack} className={styles.back_button}>Back</Button>
                      <Button variant="contained" type='submit' className={styles.next_button}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                    </Stack>
                    <Grid container className={styles.stepper_buttons_mobileView}>
                      <Grid item xs={6}>
                        <Button variant="outlined" fullWidth size='large' disabled={activeStep === 0} onClick={handleBack} className={styles.back_button}>Back</Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" fullWidth size='large' type='submit' className={styles.next_button}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                      </Grid>
                    </Grid>
                  </Form>
                )
              }
            </Formik>
          </div>
        )}
      </div>
    </div>
  </>
  );
};

export default CustomStepper;
