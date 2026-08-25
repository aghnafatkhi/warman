'use client';

import React from 'react';
import { RESTAURANT_INFO } from '@/data/menu';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      aria-label="Footer Warman"
      className="bg-[#1C1917] text-[#FAF8F5] py-8 border-t border-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#2E2A27]">
          {/* Brand and Details */}
          <div className="space-y-1">
            <div className="font-extrabold text-xl tracking-wider text-white">
              {RESTAURANT_INFO.brandName}
            </div>
            <p className="text-xs text-[#A8A29E]">
              {RESTAURANT_INFO.name} · Kota Wisata, Cileungsi
            </p>
            <p className="text-xs text-[#78716C]">
              {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.line2}
            </p>
            <p className="text-xs text-[#78716C]">
              {RESTAURANT_INFO.openingHours}
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a
              href="#menu"
              className="text-[#D6D3D1] hover:text-white transition-colors"
            >
              Menu & Harga
            </a>
            <a
              href="#rice-bowl"
              className="text-[#D6D3D1] hover:text-white transition-colors"
            >
              Rice Bowl
            </a>
            <a
              href="#sambal"
              className="text-[#D6D3D1] hover:text-white transition-colors"
            >
              Pilihan Sambal
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D6D3D1] hover:text-white transition-colors"
            >
              Buka Maps
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="text-[#D6D3D1] hover:text-white transition-colors"
            >
              Telepon ({RESTAURANT_INFO.phone})
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-xs text-[#78716C] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {currentYear} Warman Restaurant.</p>
          <p className="text-[11px] text-[#57534E]">Kota Wisata, Cileungsi, Kabupaten Bogor</p>
        </div>
      </div>
    </footer>
  );
}

