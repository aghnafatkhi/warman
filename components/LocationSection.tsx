'use client';

import React from 'react';
import { RESTAURANT_INFO } from '@/data/menu';
import { MapPin, Clock, Phone, ArrowUpRight, Navigation, Wallet } from 'lucide-react';

export default function LocationSection() {
  return (
    <section
      id="lokasi"
      aria-label="Lokasi dan Jam Buka Warman"
      className="py-10 sm:py-14 lg:py-16 bg-[#F5F2EB] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <div className="text-xs font-bold tracking-widest text-[#B83220] uppercase mb-1">
            Informasi Restoran
          </div>
          <h2
            id="location-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight"
          >
            Lokasi & Jam Buka
          </h2>
          <p className="mt-1 text-sm sm:text-base text-[#57534E]">
            Berlokasi di kawasan Ruko Commpark Kota Wisata, Cileungsi, Kabupaten Bogor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Details Card (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-lg p-5 sm:p-6 border border-[#E2DDD3] space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#E8E2D5] text-[#B83220] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                    Alamat
                  </h3>
                  <p className="mt-1 font-bold text-sm sm:text-base text-[#1C1917]">
                    {RESTAURANT_INFO.address.line1}
                  </p>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mt-0.5">
                    {RESTAURANT_INFO.address.line2}
                    <br />
                    {RESTAURANT_INFO.address.village}, {RESTAURANT_INFO.address.district}
                    <br />
                    {RESTAURANT_INFO.address.regency}, {RESTAURANT_INFO.address.province} {RESTAURANT_INFO.address.postalCode}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F0EBE1]">
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#E8E2D5] text-[#1E3A2B] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                    Jam Operasional
                  </h3>
                  <p className="mt-1 font-bold text-sm sm:text-base text-[#1C1917]">
                    {RESTAURANT_INFO.openingHours}
                  </p>
                  <p className="text-xs text-[#57534E] mt-0.5">
                    Melayani santap di tempat (dine-in) dan bawa pulang (take-away).
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F0EBE1]">
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#E8E2D5] text-[#B83220] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                    Kontak & Telepon
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                    id="phone-link-location"
                    className="mt-1 font-bold text-sm sm:text-base text-[#1C1917] hover:text-[#B83220] transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Tersedia untuk reservasi meja atau konfirmasi pesanan take-away.
                  </p>
                </div>
              </div>

              {/* Price estimate */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F0EBE1]">
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#E8E2D5] text-[#78716C] shrink-0 mt-0.5">
                  <Wallet className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                    Kisaran Harga
                  </h3>
                  <p className="mt-1 font-semibold text-xs sm:text-sm text-[#1C1917]">
                    {RESTAURANT_INFO.priceRange}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-directions-maps"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md font-semibold text-xs sm:text-sm text-white bg-[#B83220] hover:bg-[#9E2818] active:bg-[#852012] transition-colors shadow-xs min-h-[44px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                id="btn-call-location"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md font-semibold text-xs sm:text-sm text-[#1C1917] bg-white hover:bg-[#FAF8F5] active:bg-[#EAE5DB] border border-[#DCD6C9] transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#1E3A2B]" />
                <span>Telepon</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg border border-[#E2DDD3] overflow-hidden">
              <div className="p-3 border-b border-[#EAE5DB] flex items-center justify-between bg-[#FAF8F5]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B83220]" />
                  <span className="font-bold text-xs sm:text-sm text-[#1C1917]">
                    Peta Ruko Commpark Blok E No. 15
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B83220] hover:underline flex items-center gap-1"
                >
                  <span>Buka di Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] bg-[#EAE5DB]">
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

              <div className="p-3 bg-[#FAF8F5] border-t border-[#EAE5DB] text-[11px] text-[#78716C] flex items-center justify-between">
                <span>Ruko Commpark Blok E No. 15, Canadian Broadway</span>
                <span className="text-[#1C1917] font-medium">Kota Wisata, Cileungsi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
