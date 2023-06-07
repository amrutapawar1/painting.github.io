import React, { useEffect } from 'react';
import '../styles/globals.css';
import 'styles/_common.css';
import 'styles/_fonts.css';
import 'styles/_colors.css';
import 'styles/_spacing.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material';
import ThemeOptions from '../styles/theme/ThemeOptions';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../settings/aws-cognito.config';
import { Auth } from 'aws-amplify';
import LayoutProvider from '../wrapper/LayoutProvider';
import { Authenticator } from '@aws-amplify/ui-react';
import FilterProvider from '../context/Filter/FilterProvider';
import CartProvider from '../context/Cart/CartProvider';
import CheckoutProvider from '../context/Checkout/CheckoutProvider';

Amplify.configure(awsExports);

const Theme = createTheme(ThemeOptions);

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Auth.currentSession()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CheckoutProvider>
    <CartProvider>
      <Authenticator.Provider>
        <ThemeProvider theme={Theme}>
          <FilterProvider>
            <LayoutProvider >
              <Component {...pageProps} />
            </LayoutProvider>
          </FilterProvider>
        </ThemeProvider>
      </Authenticator.Provider>
    </CartProvider>
    </CheckoutProvider>
  )
}
