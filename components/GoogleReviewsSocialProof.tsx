'use client';

import React from 'react';
import { RESTAURANT_INFO } from '@/data/menu';
import { Star, ArrowUpRight } from 'lucide-react';

export default function GoogleReviewsSocialProof() {
  return (
    <section
      id="ulasan"
      aria-label="Reputasi Google Maps"
      className="py-10 bg-[#FAF8F5] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-[#E2DDD3] p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="flex flex-col items-center justify-center bg-[#FAF8F5] border border-[#E8E2D5] px-4 py-3 rounded-md shrink-0">
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-2xl font-black text-[#1C1917] tracking-tight">
                {RESTAURANT_INFO.googleRating}
              </span>
              <span className="text-[10px] text-[#78716C] font-semibold uppercase tracking-wider">
                Google Reviews
              </span>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#1C1917]">
                Dipercaya oleh pelanggan di Kota Wisata & Cileungsi
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#57534E] max-w-xl">
                Berdasarkan <strong>{RESTAURANT_INFO.googleReviewsCount}</strong> terverifikasi pada profil Google Maps Warman Restaurant.
              </p>
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-see-google-reviews"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-semibold text-xs sm:text-sm text-[#1C1917] bg-[#F5F2EB] hover:bg-[#EAE5DB] active:bg-[#DFD9CD] border border-[#DCD6C9] transition-colors whitespace-nowrap min-h-[44px]"
          >
            <span>Lihat Profil di Google</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#78716C]" />
          </a>
        </div>
      </div>
    </section>
  );
}
