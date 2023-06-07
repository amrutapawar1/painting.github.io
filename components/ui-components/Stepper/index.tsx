import React from 'react';
import CustomStepper from './CustomStepper';
import { StepConfig } from './types';
import PaymentForm from '../../StepperComponents/Payment/PaymentForm';
import Shipping from '../../StepperComponents/Shipping/Shipping';
import ContactDetails from '../../StepperComponents/ContactDetails';

const steps: StepConfig[] = [
  {
    label: 'Information',
    prevLabel: "",
    nextLabel: "Continue to Shipping",
    renderer: ContactDetails ,
  },
  {
    label: 'Shipping',
    prevLabel: "Return to Information",
    nextLabel: "Continue to Payment",
    renderer: Shipping,
  },
  {
    label: 'Payment',
    prevLabel: "Return to Shipping",
    nextLabel: "Pay Now",
    renderer: PaymentForm,
  },
];

const Stepper = () => {
  return (
    <CustomStepper steps={steps} />
  );
};

export default Stepper;
