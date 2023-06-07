import React from 'react';
import ShippingSection from '../components/shipping/ShippingSection';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import Alerts from '../components/common/Alerts';

export type IProps = {
  children: JSX.Element
};

const LayoutProvider = ({ children }: IProps) => {
  return (
    <>
      <Alerts />
      <Header />
      {children}
      <ShippingSection />
      <Footer />
    </>
  )
}

export default LayoutProvider;