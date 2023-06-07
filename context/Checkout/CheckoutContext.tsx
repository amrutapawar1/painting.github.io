import { createContext, useContext } from "react";

 type PersonalDetails = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
}
 type ShippingDetails = {
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string
}
type BillingDetails = {
    firstName: string,
    lastName: string,
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string
}

type CheckoutUpdate = {
    setPersonalDetails: (values: PersonalDetails) => void,
    setShippingDetails: (values: ShippingDetails) => void,
    setBillingDetails: (values:BillingDetails) => void,
    setBillingAddress: (props: boolean) => void,
    setShippingMethod: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
export type CheckoutData = {
    personalDetails: PersonalDetails,
    shippingDetails: ShippingDetails,
    billingDetails: BillingDetails,
    isBillingAddress: boolean,
    shippingMethod: string,
    update: CheckoutUpdate
}
export const DEFAULT_CHECKOUT_CONTEXT: CheckoutData = {
    personalDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    },
    shippingDetails: {
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        zipcode: ''
    },
    billingDetails: {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        zipcode: ''
    },
    shippingMethod: '',
    isBillingAddress: false,
    update: {
        setPersonalDetails: () => null,
        setShippingDetails: () => null,
        setBillingDetails: () => null,
        setBillingAddress: () => null,
        setShippingMethod: () => null,
    }
}

export const CheckoutContext = createContext<CheckoutData>(DEFAULT_CHECKOUT_CONTEXT);
const useCheckout = () => useContext(CheckoutContext);

export default useCheckout;