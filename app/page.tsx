'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SambalShowcase from '@/components/SambalShowcase';
import RiceBowlShowcase from '@/components/RiceBowlShowcase';
import FullMenu from '@/components/FullMenu';
import LocationSection from '@/components/LocationSection';
import GoogleReviewsSocialProof from '@/components/GoogleReviewsSocialProof';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <SambalShowcase />
        <RiceBowlShowcase />
        <FullMenu />
        <LocationSection />
        <GoogleReviewsSocialProof />
      </main>
      <Footer />
    </div>
  );
}
