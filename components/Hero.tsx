'use client';

import React from 'react';
import Image from 'next/image';
import { RESTAURANT_INFO } from '@/data/menu';
import { ArrowRight, MapPin, Star, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      aria-label="Warman Restaurant"
      className="relative pt-20 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                id="hero-eyebrow"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold tracking-wider text-[#1C1917] bg-[#EFECE6] border border-[#DCD6C9]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B83220]"></span>
                Warman Restaurant · Kota Wisata
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1
                id="hero-headline"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-[1.12]"
              >
                Makan enak,{' '}
                <span className="text-[#B83220]">pilih sambalmu.</span>
              </h1>
              <p
                id="hero-supporting-copy"
                className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
              >
                Sajian comfort food Indonesia, aneka lauk goreng, rice bowl praktis, dan aneka pelengkap dengan 4 pilihan sambal khas Warman.
              </p>
            </div>

            {/* Social Proof & Operational Hours */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-proof"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F2EFE9] hover:bg-[#E8E4DC] transition-colors border border-[#E0DACF] text-xs sm:text-sm"
                title="Lihat reputasi di Google Maps"
              >
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                </div>
                <span className="font-bold text-[#1C1917]">{RESTAURANT_INFO.googleRating} di Google</span>
                <span className="text-[#78716C]">·</span>
                <span className="text-[#57534E] underline decoration-[#78716C]/40 underline-offset-2 font-medium">
                  {RESTAURANT_INFO.googleReviewsCount}
                </span>
              </a>

              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#78716C] px-2 py-1">
                <Clock className="w-3.5 h-3.5 text-[#1E3A2B]" />
                <span>Buka setiap hari, 10.00–22.00 WIB</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#menu"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#B83220] hover:bg-[#9E2818] active:bg-[#852012] transition-colors rounded-md shadow-xs min-h-[44px]"
              >
                <span>Lihat Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-[#292524] bg-[#EFECE6] hover:bg-[#E2DDD3] active:bg-[#D5CFBF] transition-colors rounded-md border border-[#DCD6C9] min-h-[44px]"
              >
                <MapPin className="w-4 h-4 text-[#B83220]" />
                <span>Petunjuk Arah</span>
              </a>
            </div>

            {/* Price Indicator */}
            <div className="text-xs text-[#78716C] flex items-center gap-2 pt-1">
              <span>Kisaran transaksi: <strong>{RESTAURANT_INFO.priceRange}</strong></span>
            </div>
          </div>

          {/* Right Column: Editorial Food Visual */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden border border-[#E2DDD3] bg-white shadow-xs">
              <div className="relative aspect-4/3 w-full bg-[#F5F2EB]">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
                  alt="Sajian Comfort Food Rice Bowl dan Lauk Warman Restaurant"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* 4 Sambal Pill on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#B83220]"></span>
                    <span>4 Pilihan Sambal</span>
                  </div>
                  <span className="text-[11px] bg-black/60 px-2 py-0.5 rounded font-medium backdrop-blur-xs">
                    Korek · Matah · Terasi · Cabe Ijo
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3 bg-white flex items-center justify-between text-xs border-t border-[#EAE5DB]">
                <span className="font-semibold text-[#1C1917]">
                  Dori, Paru, Karaage & Suwir Rice Bowl
                </span>
                <span className="font-bold text-[#B83220] tabular-nums">
                  Mulai Rp21.000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
