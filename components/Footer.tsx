'use client';

import React from 'react';
import { RESTAURANT_INFO } from '@/data/menu';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      aria-label="Informasi Footer Warman Restaurant"
      className="bg-[#1C1917] text-[#FAF8F5] pt-12 pb-8 border-t border-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#332E2A]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-wider text-white">
                {RESTAURANT_INFO.brandName}
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#B83220] text-white tracking-wider uppercase">
                Restoran
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed max-w-sm">
              Sajian lauk goreng, rice bowl praktis, dan 4 pilihan sambal khas di kawasan Kota Wisata, Cileungsi, Kabupaten Bogor.
            </p>
            <div className="text-xs text-[#78716C]">
              {RESTAURANT_INFO.name}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A8A29E]">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="text-[#D6D3D1] hover:text-white transition-colors">
                  Daftar Menu & Harga
                </a>
              </li>
              <li>
                <a href="#sambal" className="text-[#D6D3D1] hover:text-white transition-colors">
                  4 Pilihan Sambal Khas
                </a>
              </li>
              <li>
                <a href="#rice-bowl" className="text-[#D6D3D1] hover:text-white transition-colors">
                  Rice Bowl Favorit
                </a>
              </li>
              <li>
                <a href="#lokasi" className="text-[#D6D3D1] hover:text-white transition-colors">
                  Lokasi & Jam Buka
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A8A29E]">
              Kontak & Operasional
            </h4>
            <div className="space-y-2.5 text-xs text-[#D6D3D1]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B83220] shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.line2}, {RESTAURANT_INFO.address.regency}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1E3A2B] shrink-0" />
                <span>Buka Setiap Hari: 10.00 – 22.00 WIB</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B83220] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white font-semibold underline decoration-white/30"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#A8A29E] hover:text-white"
                >
                  <span>Google Maps Listing</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-3">
          <p>© {currentYear} Warman Restaurant. All rights reserved.</p>
          <p className="text-[11px]">Kota Wisata Cileungsi · Casual Indonesian Comfort Dining</p>
        </div>
      </div>
    </footer>
  );
}
