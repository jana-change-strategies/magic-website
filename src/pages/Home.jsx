import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../sections/Hero';
import { WaxProblem } from '../sections/WaxProblem';
import { Products } from '../sections/Products';
import { ProductPhilosophy } from '../sections/ProductPhilosophy';
import { WhyMagic } from '../sections/WhyMagic';
import { MadeInPopoyo } from '../sections/MadeInPopoyo';
import { FindUs } from '../sections/FindUs';
import { InstagramGallery } from '../sections/InstagramGallery';
import { OrderForm } from '../sections/OrderForm';
import '../styles/global.css';
import '../styles/sections.css';

export function Home() {
  return (
    <>
      <Header transparentOnTop />
      <Hero />
      <WaxProblem />
      <Products />
      <ProductPhilosophy />
      <WhyMagic />
      <MadeInPopoyo />
      <FindUs />
      <InstagramGallery />
      <OrderForm />
      <Footer />
    </>
  );
}
