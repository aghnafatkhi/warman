'use client';

import React from 'react';
import { SAMBAL_LIST } from '@/data/menu';

export default function SambalShowcase() {
  return (
    <section
      id="sambal"
      aria-label="Pilihan Sambal Warman"
      className="py-8 sm:py-12 bg-[#F5F2EB] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-5 sm:mb-6 gap-2">
          <div>
            <h2
              id="sambal-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight"
            >
              Pilih sambalmu.
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#57534E]">
              Empat pilihan sambal khas untuk setiap menu Rice Bowl dan lauk goreng.
            </p>
          </div>

          <div className="text-xs text-[#57534E] self-start sm:self-auto bg-white px-2.5 py-1 rounded border border-[#E0DACF]">
            Porsi ekstra Rp8.000
          </div>
        </div>

        {/* 4 Sambal Horizontal Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {SAMBAL_LIST.map((sambal) => (
            <div
              key={sambal.id}
              id={`sambal-card-${sambal.id}`}
              className="bg-white rounded-md p-3.5 sm:p-4 border border-[#E2DDD3] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#1C1917]">
                  {sambal.name}
                </h3>
              </div>
              <div className="mt-2 text-[11px] text-[#78716C]">
                Khas Warman
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

