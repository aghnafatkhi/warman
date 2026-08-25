'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RiceBowlShowcase from '@/components/RiceBowlShowcase';
import FullMenu from '@/components/FullMenu';
import SambalShowcase from '@/components/SambalShowcase';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <RiceBowlShowcase />
        <FullMenu />
        <SambalShowcase />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

