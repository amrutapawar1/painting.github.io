import React from 'react';
import Category from './Category';
import Banner from './Banner';
import CommunitySection from './CommunitySection';
import ProductSection from './ProductSection';
import RecycleSelection from './RecycleSelection';
import SignupSection from './SignupSection';

export default function Homepage() {
  return (
    <>
      <Banner />
      <SignupSection />
      <Category />
      <CommunitySection />
      <ProductSection />
      <RecycleSelection />
    </>
  )
}
