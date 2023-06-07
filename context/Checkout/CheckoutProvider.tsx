import { useMemo, useState } from "react";
import { CheckoutContext, CheckoutData, DEFAULT_CHECKOUT_CONTEXT } from "./CheckoutContext"

interface ProviderProps {
    children: string | JSX.Element | JSX.Element[];
}
type PersonalDetails = CheckoutData['personalDetails'];
type ShippingDetails = CheckoutData['shippingDetails'];
type BillingDetails = CheckoutData['billingDetails'];

const CheckoutProvider = ({ children }: ProviderProps) => {

    const [state, setState] = useState<CheckoutData>(DEFAULT_CHECKOUT_CONTEXT);

    const setPersonalDetails = (values: PersonalDetails) => {
        setState(prevState => ({
            ...prevState,
            personalDetails: values
        }));
    };
    const setShippingDetails = (values: ShippingDetails) => {
        setState(prevState => ({
            ...prevState,
            shippingDetails: values
        }));
    };
    const setBillingDetails = (values: BillingDetails) => {
        setState(prevState => ({
            ...prevState,
            billingDetails: values
        }));
    };
    const setShippingMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setState(prevState => ({
            ...prevState,
            shippingMethod: value,
        }))
    }
    const setBillingAddress = (props: boolean) => {
        setState(prevState => ({
            ...prevState,
            isBillingAddress: props,
        }))
    }
    const data = useMemo(
        () => ({
            ...state,
            update: {
                setPersonalDetails,
                setShippingDetails,
                setBillingDetails,
                setBillingAddress,
                setShippingMethod
            }
        }),
        [setPersonalDetails, setShippingDetails, setBillingDetails, setBillingAddress, setShippingMethod]
    );
    return (
        <CheckoutContext.Provider value={data}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider;