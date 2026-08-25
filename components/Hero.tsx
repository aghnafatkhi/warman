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
      className="relative pt-18 pb-6 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          {/* Main Info: Mobile First Ordering */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5 sm:space-y-4.5">
            {/* Location Tag */}
            <div className="flex items-center">
              <span
                id="hero-eyebrow"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold tracking-wider text-[#1C1917] bg-[#EFECE6] border border-[#DCD6C9]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B83220]"></span>
                Warman Restaurant · Kota Wisata
              </span>
            </div>

            {/* Headline & Subtitle */}
            <div className="space-y-2">
              <h1
                id="hero-headline"
                className="text-[26px] leading-[1.18] min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight"
              >
                Makan enak,{' '}
                <span className="text-[#B83220]">pilih sambalmu.</span>
              </h1>
              <p
                id="hero-supporting-copy"
                className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl"
              >
                Rice bowl, lauk goreng, nasi goreng, camilan, dan empat pilihan sambal.
              </p>
            </div>

            {/* Rating & Hours */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-proof"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#F2EFE9] hover:bg-[#E8E4DC] active:bg-[#DFD9CD] transition-colors border border-[#E0DACF] text-xs sm:text-sm font-semibold"
              >
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
                <span className="font-bold text-[#1C1917]">{RESTAURANT_INFO.googleRating} di Google</span>
                <span className="text-[#78716C]">·</span>
                <span className="text-[#57534E] font-medium">
                  {RESTAURANT_INFO.googleReviewsCount}
                </span>
              </a>

              <div className="inline-flex items-center gap-1 text-xs text-[#78716C] px-1 py-1">
                <Clock className="w-3.5 h-3.5 text-[#1E3A2B] shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs - Balanced for one-hand tap */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href="#menu"
                id="hero-primary-cta"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 sm:py-3 text-xs min-[360px]:text-sm sm:text-base font-semibold text-white bg-[#B83220] hover:bg-[#9E2818] active:bg-[#852012] active:scale-[0.99] transition-all rounded-md shadow-xs min-h-[44px] whitespace-nowrap"
              >
                <span>Lihat Menu</span>
                <ArrowRight className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-secondary-cta"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs min-[360px]:text-sm sm:text-base font-semibold text-[#292524] bg-[#EFECE6] hover:bg-[#E2DDD3] active:bg-[#D5CFBF] active:scale-[0.99] transition-all rounded-md border border-[#DCD6C9] min-h-[44px] whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 text-[#B83220]" />
                <span>Buka Maps</span>
              </a>
            </div>
          </div>

          {/* Food Visual: Scaled appropriately for mobile viewports */}
          <div className="lg:col-span-5 relative mt-1 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden border border-[#E2DDD3] bg-white shadow-xs">
              <div className="relative aspect-16/10 sm:aspect-16/10 lg:aspect-4/3 w-full bg-[#F5F2EB]">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
                  alt="Sajian Rice Bowl Warman Restaurant"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <div className="px-3 py-2 sm:p-3 bg-white flex items-center justify-between text-xs border-t border-[#EAE5DB]">
                <span className="font-semibold text-[#1C1917] truncate mr-2">
                  Dori, Paru, Karaage & Suwir
                </span>
                <span className="font-bold text-[#B83220] tabular-nums shrink-0">
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

