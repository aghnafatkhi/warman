'use client';

import React from 'react';
import { RESTAURANT_INFO } from '@/data/menu';
import { MapPin, Clock, Phone, ArrowUpRight, Star, Wallet } from 'lucide-react';

export default function LocationSection() {
  return (
    <section
      id="lokasi"
      aria-label="Lokasi dan Jam Buka Warman"
      className="py-8 sm:py-12 bg-[#FAF8F5] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-5 sm:mb-6">
          <h2
            id="location-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight"
          >
            Lokasi & Jam Buka
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-[#57534E]">
            Ruko Commpark Kota Wisata, Cileungsi, Kabupaten Bogor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="bg-white rounded-md p-4 sm:p-5 border border-[#E2DDD3] space-y-3 sm:space-y-3.5">
              {/* Google Rating Block */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE1]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-amber-50 border border-amber-200 text-amber-600">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm sm:text-base text-[#1C1917]">
                      {RESTAURANT_INFO.googleRating} di Google
                    </div>
                    <div className="text-xs text-[#78716C]">
                      {RESTAURANT_INFO.googleReviewsCount}
                    </div>
                  </div>
                </div>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-google-reviews-link"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#B83220] hover:underline p-1 min-h-[36px]"
                >
                  <span>Lihat di Google</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B83220] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                    Alamat
                  </h3>
                  <p className="mt-0.5 font-bold text-sm text-[#1C1917]">
                    {RESTAURANT_INFO.name}
                  </p>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mt-0.5">
                    {RESTAURANT_INFO.address.line1}
                    <br />
                    {RESTAURANT_INFO.address.line2}
                    <br />
                    {RESTAURANT_INFO.address.village}, {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.regency}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5 pt-2.5 border-t border-[#F0EBE1]">
                <Clock className="w-4 h-4 text-[#1E3A2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                    Jam Buka
                  </h3>
                  <p className="mt-0.5 font-bold text-sm text-[#1C1917]">
                    {RESTAURANT_INFO.openingHours}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-2.5 pt-2.5 border-t border-[#F0EBE1]">
                <Phone className="w-4 h-4 text-[#B83220] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                    Telepon
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                    id="phone-link-location"
                    className="mt-0.5 font-bold text-sm text-[#1C1917] hover:text-[#B83220] transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Price Range */}
              <div className="flex items-start gap-2.5 pt-2.5 border-t border-[#F0EBE1]">
                <Wallet className="w-4 h-4 text-[#78716C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                    Kisaran Harga
                  </h3>
                  <p className="mt-0.5 font-semibold text-xs sm:text-sm text-[#1C1917]">
                    {RESTAURANT_INFO.priceRange}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTAs for Mobile Conversion */}
            <div className="flex flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-directions-maps"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-md font-semibold text-xs min-[360px]:text-sm text-white bg-[#B83220] hover:bg-[#9E2818] active:bg-[#852012] active:scale-[0.99] transition-all shadow-xs min-h-[44px] whitespace-nowrap"
              >
                <MapPin className="w-4 h-4" />
                <span>Buka Maps</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                id="btn-call-location"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-md font-semibold text-xs min-[360px]:text-sm text-[#1C1917] bg-[#EFECE6] hover:bg-[#E2DDD3] active:bg-[#D5CFBF] active:scale-[0.99] border border-[#DCD6C9] transition-all min-h-[44px] whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Telepon</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map (7 cols) - Compact mobile height */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-md border border-[#E2DDD3] overflow-hidden">
              <div className="p-2.5 sm:p-3 border-b border-[#EAE5DB] flex items-center justify-between bg-[#FAF8F5]">
                <span className="font-bold text-xs sm:text-sm text-[#1C1917]">
                  Ruko Commpark Blok E No. 15
                </span>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B83220] hover:underline flex items-center gap-1 min-h-[36px] items-center"
                >
                  <span>Buka di Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe with lazy load */}
              <div className="relative w-full h-[220px] sm:h-[270px] lg:h-[310px] bg-[#EAE5DB]">
                <iframe
                  title="Peta Lokasi Warman Restaurant Kota Wisata Cileungsi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.231267448651!2d106.9612347!3d-6.364128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993a4b92b6a55%3A0xb35184a44f331cae!2sRuko%20Commpark!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-2 sm:p-2.5 bg-[#FAF8F5] border-t border-[#EAE5DB] text-[11px] text-[#78716C] flex items-center justify-between">
                <span className="truncate pr-2">Jl. Canadian Broadway Blok E No.15</span>
                <span className="text-[#1C1917] font-medium shrink-0">Kota Wisata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

