'use client';

import React from 'react';
import Image from 'next/image';
import { FULL_MENU, formatPrice } from '@/data/menu';

export default function RiceBowlShowcase() {
  const riceBowls = FULL_MENU.filter((item) => item.category === 'rice-bowl');

  return (
    <section
      id="rice-bowl"
      aria-label="Kategori Rice Bowl"
      className="py-10 sm:py-14 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#B83220] uppercase mb-1">
              Menu Utama
            </div>
            <h2
              id="rice-bowl-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight"
            >
              Rice Bowl
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#57534E]">
              Porsi praktis lengkap dengan nasi putih hangat, lauk pilihan, dan pilihan sambal.
            </p>
          </div>

          <div className="bg-[#F5F2EB] px-3 py-1.5 rounded border border-[#E2DDD3] text-xs text-[#44403C] self-start sm:self-auto">
            Add-on: <strong>Telur mata sapi</strong> +Rp6.000
          </div>
        </div>

        {/* 4 Rice Bowl Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {riceBowls.map((bowl) => (
            <article
              key={bowl.id}
              id={`rice-bowl-card-${bowl.id}`}
              className="bg-white rounded-md border border-[#E2DDD3] overflow-hidden flex flex-col justify-between hover:border-[#D0C9BC] transition-colors"
            >
              <div>
                {/* Image Container with precise aspect-ratio */}
                <div className="relative aspect-16/10 w-full bg-[#F5F2EB] overflow-hidden">
                  {bowl.image ? (
                    <Image
                      src={bowl.image}
                      alt={bowl.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-[#78716C]">
                      Warman Rice Bowl
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-xs">
                    Pilihan 4 Sambal
                  </div>
                </div>

                {/* Details */}
                <div className="p-3.5 sm:p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-[#1C1917]">
                      {bowl.name}
                    </h3>
                    <span className="font-bold text-sm sm:text-base text-[#B83220] tabular-nums whitespace-nowrap">
                      {formatPrice(bowl.price)}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-[#66615B] leading-relaxed">
                    {bowl.description}
                  </p>

                  <div className="mt-2 text-[11px] text-[#78716C]">
                    Pilihan: Korek, Matah, Terasi, Cabe Ijo
                  </div>
                </div>
              </div>

              {/* Action anchor to Full Menu */}
              <div className="p-3.5 pt-0">
                <a
                  href="#menu"
                  className="w-full py-2 px-3 text-xs font-semibold text-[#1C1917] bg-[#F5F2EB] hover:bg-[#EAE5DB] active:bg-[#DFD9CD] rounded transition-colors text-center block border border-[#E2DDD3]"
                >
                  Lihat di Daftar Menu
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
