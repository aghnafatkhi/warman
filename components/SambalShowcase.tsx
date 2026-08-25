'use client';

import React from 'react';
import { SAMBAL_LIST, formatPrice } from '@/data/menu';

export default function SambalShowcase() {
  return (
    <section
      id="sambal"
      aria-label="Pilihan Sambal Warman"
      className="py-10 sm:py-14 bg-[#F5F2EB] border-y border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <div className="text-xs font-bold tracking-widest text-[#B83220] uppercase mb-1">
            Karakter Sambal
          </div>
          <h2
            id="sambal-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight"
          >
            Pilih sambal sesuai selera.
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#57534E]">
            Setiap hidangan Rice Bowl dan aneka lauk goreng dapat dinikmati bersama 4 pilihan sambal khas Warman:
          </p>
        </div>

        {/* 4 Sambals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SAMBAL_LIST.map((sambal) => (
            <div
              key={sambal.id}
              id={`sambal-card-${sambal.id}`}
              className="bg-white rounded-md p-4 border border-[#E2DDD3] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-base font-bold text-[#1C1917]">
                    {sambal.name}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      sambal.id === 'cabe-ijo'
                        ? 'bg-[#1E3A2B]/10 text-[#1E3A2B]'
                        : 'bg-[#B83220]/10 text-[#B83220]'
                    }`}
                  >
                    {sambal.badge}
                  </span>
                </div>

                <p className="text-xs text-[#66615B] leading-relaxed">
                  {sambal.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#F0EBE1] flex items-center justify-between text-xs text-[#78716C]">
                <span>Porsi ekstra satuan</span>
                <span className="font-bold text-[#1C1917] tabular-nums">
                  {formatPrice(sambal.price)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-xs text-[#78716C] flex items-center justify-between flex-wrap gap-2">
          <span>*Termasuk pada setiap menu Rice Bowl dan lauk yang menggunakan sambal.</span>
          <span className="italic">Harga belum termasuk pajak 10%</span>
        </div>
      </div>
    </section>
  );
}
