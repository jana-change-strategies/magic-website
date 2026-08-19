import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WholesaleHero } from '../sections/wholesale/WholesaleHero';
import { CustomBoxes } from '../sections/wholesale/CustomBoxes';
import { WholesaleProducts } from '../sections/wholesale/WholesaleProducts';
import { WhyStock } from '../sections/wholesale/WhyStock';
import { HowItWorks } from '../sections/wholesale/HowItWorks';
import { WholesaleForm } from '../sections/wholesale/WholesaleForm';
import '../styles/global.css';
import '../styles/sections.css';

export function Wholesale() {
  return (
    <>
      <Header active="wholesale" transparentOnTop={false} />
      <WholesaleHero />
      <CustomBoxes />
      <WholesaleProducts />
      <WhyStock />
      <HowItWorks />
      <WholesaleForm />
      <Footer />
    </>
  );
}
